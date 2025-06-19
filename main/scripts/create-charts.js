// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';

const stock_index_chart = document.getElementById("stock-index-chart");
const stock_table_chart = document.getElementById("stock-table-chart");
const moving_average_chart = document.getElementById("moving-average-chart");
const trading_volume_chart = document.getElementById("trading-volume-chart");
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
    
    document.getElementById("stock-table-tody").innerHTML = rows;
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
        yAxisID: 'y',
        xAxisID: 'x'
        },
        {
        label: '30D MA',
        data: [22,15,8,4,82,4,14,18,15,8,4,82,8,4,82,428,4,4,9,19,10],
        borderDash: [10],
        borderColor: 'rgb(227, 135, 245)',
        yAxisID: 'y1',
        },
        {
        label: '90D MA',
        data: [2,10,15,8,4,82,428,4,9,3,8,4,82,48,4,15,8,4,82,8,4,82],
        borderDash: [10],
        borderColor: 'rgb(148, 86, 199)',
        yAxisID: 'y2',
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
        borderColor: 'rgb(252, 52, 152)',
        borderWidth: 1,
        yAxisID: 'y',
        xAxisID: 'x'
      },
    {
        label: 'Previous Volume High',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(255, 181, 239)',
        borderWidth: 1,
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
    //   responsive: True
    }
  });
})();