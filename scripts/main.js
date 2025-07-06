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

setTickerSymbol();