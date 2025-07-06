

function getLastUpdate() {
  var now = new Date();
  // 7 = number of days in week, 3 = the Wednesday (0 = sunday)
  var daysAfterLastWednesday = (-7 + 3) - now.getDay(); 
  var currentMs = now.getTime();
  var lastUpdate = new Date(
    currentMs + (daysAfterLastWednesday * 24 * 60 * 60 * 1000)
  );
  
  document.getElementById("last-price-date").innerHTML = (lastUpdate.getMonth() + 1) + "/" + lastUpdate.getDate() + "/" + lastUpdate.getFullYear();
  document.getElementById("endDate").value = lastUpdate.getFullYear() + "-" + String((lastUpdate.getMonth() + 1)).padStart(2, '0') + "-" + lastUpdate.getDate();

  return (lastUpdate.getMonth() + 1) + "/" + lastUpdate.getDate() + "/" + lastUpdate.getFullYear();
}

function controlstartDate(fromSlider, startDate, endDate, controlSlider) {

  const [from, to] = getParsed(startDate, endDate);
  fillSlider(startDate, endDate, sliderColor, rangeColor, controlSlider);
  if (from > to) {
      fromSlider.value = to;
      startDate.value = to;
  } else {
      fromSlider.value = from;
  }
}
    
function controlendDate(toSlider, startDate, endDate, controlSlider) {

  const [from, to] = getParsed(startDate, endDate);
  fillSlider(startDate, endDate, sliderColor, rangeColor, controlSlider);
  setToggleAccessible(endDate);
  if (from <= to) {
    toSlider.value = to;
    endDate.value = to;
  } else {
    endDate.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, startDate) {

  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, sliderColor, rangeColor, toSlider);
  if (from > to) {
    fromSlider.value = to;
    startDate.value = to;
  } else {
    startDate.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, endDate) {

  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, sliderColor, rangeColor, toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
  } else {
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {

  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {

    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

getLastUpdate(); 

const start_date = "2019-12-16";
const end_date = "0";
const sliderColor = "#F6F6F6";
const rangeColor = "#ffbfbf";
const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const startDate = document.querySelector('#startDate');
const endDate = document.querySelector('#endDate');
fillSlider(fromSlider, toSlider, sliderColor, rangeColor, toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, startDate);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, endDate);
// view rawdualRangeSlider.js hosted with ❤ by GitHub