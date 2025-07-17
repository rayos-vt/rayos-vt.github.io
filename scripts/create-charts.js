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

async function createStockTableChart() {
    
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
};

async function createMovingAverageChart() {

  new Chart(moving_average_chart, {
    type: 'line',
    data: {
      labels: ['0', '1', '2', '3', '4', '5', '6', '0', '1', '2', '3', '4', '5', '6'],
      datasets: [
        {
        label: 'Stock Prices',
        data: [
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10)
        ],
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(255, 255, 255)',
        yAxisID: 'y',
        xAxisID: 'x',
        },
        {
        label: '30D MA',
        data: [
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10)
        ],
        borderColor: 'rgb(148, 86, 199)',
        backgroundColor: 'rgb(148, 86, 199)',
        borderDash: [10],
        },
        {
        label: '90D MA',
        data: [
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10)
        ],
        borderColor: 'rgb(250, 69, 69)',
        backgroundColor: 'rgb(250, 69, 69)',
        borderDash: [10],
        }
    ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {display: false},
          border: {display: false},
          ticks: {display: false},
          },
        y: {
          grid: {display: false},          
          border: {display: false},
          ticks: {
            color: 'rgb(255, 255, 255)'
          },
        },
      },
      plugins: {
        legend: {
          align: 'start',
          labels: {
            usePointStyle: true,
            font: {
              size: 16,
            },
            boxHeight: 9,
            color: 'rgb(255, 255, 255)'
          },
        },
      }
    }
  });
};

async function createTradingVolumeChart() {

  new Chart(trading_volume_chart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
      {
        label: 'Trading Volume',
        data: [
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10)
        ],
        backgroundColor: 'rgb(253, 70, 162)',
        yAxisID: 'y',
        xAxisID: 'x'
      },
      {
        label: 'Previous Volume High',
        data: [
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10)
        ],
        backgroundColor: 'rgb(255, 203, 244)',
        yAxisID: 'y',
        xAxisID: 'x'
      }
    ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          grid: {display: false},
          border: {display: false},
          ticks: {
            color: 'rgb(255, 255, 255)'
          },
        },
        y: {
          beginAtZero: true,
          grid: {display: false},
          border: {display: false},
          ticks: {
            color: 'rgb(255, 255, 255)',
            major: {
              enabled: true
            }
          },
        },
      },
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
};

async function createTopWorstChart(chart_id) {
    new Chart(chart_id, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
        label: 'Trading Volume',
        data: [
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * 10),
          (Math.random() * -10),
          (Math.random() * -10),
          (Math.random() * -10)],
        backgroundColor: 'rgb(253, 70, 162)',
        yAxisID: 'y',
        xAxisID: 'x'
      }
    ]
    },
    options: {
      // responsive: True,
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          display: false,
          grid: {display: false},
          border: {display: false},
        },
        y: {
          beginAtZero: true,
          grid: {display: false},
          border: {display: false},
          ticks: {
            color: 'rgb(255, 255, 255)'
          },
        },
      },
      plugins: {
        legend: {display: false},
        title: {display: false}
      }
    }
  });
};

createStockTableChart();
createMovingAverageChart();
createTradingVolumeChart();
createTopWorstChart(last_30_days);
createTopWorstChart(last_7_days);
createTopWorstChart(selected_days);