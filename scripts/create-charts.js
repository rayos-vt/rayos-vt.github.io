const stock_table_tbody = document.getElementById("stock-table-tbody");
const moving_average_chart = document.getElementById("moving-average-chart");
const trading_volume_chart = document.getElementById("trading-volume-chart");
const last_30_days = document.getElementById("last-30-days");
const last_7_days = document.getElementById("last-7-days");
const selected_days = document.getElementById("selected-days");
const symbols = [
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

(async function createStockIndexChart() {

})();

(async function createStockTableChart() {
    
    var rows = '';
    // return;
    for (let step = 0; step < symbols.length-20; step++) {
        
        rows += (
            '<tr>' +
            '<th scope="row">' + symbols[step] + '</th>' +
            '<td>' + (Math.random() * 100000).toFixed(2) + '</td>' + 
            '<td>' + (Math.random() * 100000).toFixed(2) + '</td>' + 
            '<td>' + (Math.random() * 100000).toFixed(2) + '</td>' +
            '<td>' + (Math.random() * 100).toFixed(2) + '</td>' +
            '<td>' + (Math.random() * 100000).toFixed(2) + '</td>' + 
            '<td>' + (Math.random() * 100000).toFixed(2) + '</td>' +
            '</tr>'
        );
    }
    
    stock_table_tbody.innerHTML = rows;
})();

(async function createMovingAverageChart() {

  new Chart(moving_average_chart, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
        label: 'Stock Prices',
        data: [12,15,8,4,82,4,15,8,4,15,8,4,82,4,82,15,36,15,8,14,4],
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(255, 255, 255)',
        yAxisID: 'y',
        xAxisID: 'x'
        },
        {
        label: '30D MA',
        data: [2,10,15,8,4,82,428,4,9,3,8,4,82,48,4,15,8,4,82,8,4,82],
        borderColor: 'rgb(148, 86, 199)',
        backgroundColor: 'rgb(148, 86, 199)',
        borderDash: [10],
        yAxisID: 'y2',
        },
        {
        label: '90D MA',
        data: [22,15,8,4,82,4,14,18,15,8,4,82,8,4,82,428,4,4,9,19,10],
        borderColor: 'rgb(250, 69, 69)',
        backgroundColor: 'rgb(250, 69, 69)',
        borderDash: [10],
        yAxisID: 'y1',
        }
    ]
    },
    options: {
      scales: {
        x: {
        //   beginAtZero: true
          display: false
        },
        y: {
        //   beginAtZero: true
        },
        y1: {
        //   beginAtZero: true
          display: false
        },
        y2: {
        //   beginAtZero: true,
          display: false
        }
      },
      borderJoinStyle: "bevel",
      plugins: {
        legend: {
          align: 'start',
          labels: {
            usePointStyle: true,
            font: {
              size: 16,
            },
            boxHeight: 9,
            color: 'rgb(252, 255, 255)'
          },
        },
      }
    }
  });
})();

(async function createTradingVolumeChart() {

  new Chart(trading_volume_chart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
        label: 'Trading Volume',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(253, 70, 162)',
        yAxisID: 'y',
        xAxisID: 'x'
      },
    {
        label: 'Previous Volume High',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 203, 244)',
        yAxisID: 'y1',
        xAxisID: 'x1'
      }
    ]
    },
    options: {
      scales: {
        x: {
          beginAtZero: true,
          display: false
        },
        y: {
          beginAtZero: true
        },
        y1: {
          beginAtZero: true,
          display: false
        },
      },
    //   responsive: True,
      plugins: {
        legend: {
          align: 'start',
          labels: {
            usePointStyle: true,
            font: {
              size: 16,
            },
            boxHeight: 9,
            color: 'rgb(252, 255, 255)'
          },
        },
      }
    }
  });
})();

(async function createTopWorstChart() {
    new Chart(last_30_days, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
        label: 'Trading Volume',
        data: [12, 9, 3, -5, -2, -3],
        borderColor: 'rgb(252, 52, 152)',
        borderWidth: 1,
        yAxisID: 'y',
        xAxisID: 'x'
      }
    ]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          display: false
        },
        y: {
          beginAtZero: true
        },
      },
      // responsive: True,
      plugins: {
        legend:{
          display: false,
        },
        title: {
          display: false,
        }
      }
    }
  });
})();
