function setTickerSymbol() {

  var symbols = [
    "RNT",
    "HKR",
    "KRN",
    "SZK",
    "NNE",
    "KSR",
    "HHR",
    "KRM",
    "MEI",
    "IKS",
    "MMM",
    "MMK",
    "CYI",
    "NDS",
    "YMM",
    "MMJ",
    "YKY",
    "KSK",
    "AHK",
    "UTN",
    "MAI",
    "MMH",
    "RNB",
    "SUH",
    "EIR",
    "TMN",
    "HMK",
    "MTR",
    "USM",
    "MRZ",
    "SKT",
    "NMN",
    "HSH",
    "KMR",
    ];
  var ticker = symbols[Math.floor(Math.random() * symbols.length)];
  document.getElementById("ticker-symbol").innerHTML = ticker;
}

function getLastUpdate() {
  var now = new Date();
  // 7 = number of days in week, 3 = the Wednesday (0 = sunday)
  var daysAfterLastWednesday = (-7 + 3) - now.getDay(); 
  var currentMs = now.getTime();
  var lastUpdate = new Date(
    currentMs + 
    (daysAfterLastWednesday * 24 * 60 * 60 * 1000)
  );
  var test = lastUpdate.getMonth();
  document.getElementById("last-price-date").innerHTML = (lastUpdate.getMonth() + 1) + "/" + lastUpdate.getDate() + "/" + lastUpdate.getFullYear();
  document.getElementById("end-date").value = lastUpdate.getFullYear() + "-" + String((lastUpdate.getMonth() + 1)).padStart(2, '0') + "-" + lastUpdate.getDate();
}
setTickerSymbol();
getLastUpdate();
