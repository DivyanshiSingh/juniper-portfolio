const CONSTANTS = require("./constants");

const { oneMegabyte, oneDay } = CONSTANTS;

module.exports = {
  startPriceMonitor: process.env.MONITOR_PRICE || true,
  environment: process.env.NODE_ENV || "development",
  trustProxy: 1,
  jsonSpaces: 2,
  port: process.env.SERVER_PORT || 9000,
  urlencoded: {
    extended: false,
    limit: oneMegabyte,
  },
  uploadLimit: oneMegabyte,
  db: {
    url: process.env.DB_URL || "mongodb://localhost",
    database: process.env.DB_NAME || "juniper",
    mongooseCfg: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  },
  wallet: {
    limit: 50,
  },
  bitcoinScraper: {
    network: "main",
  },
  ethereumScraper: {},
  priceMonitor: {
    interval: oneDay,
    binance: {
      apiUrl: "https://www.binance.com/api/v3/avgPrice?symbol=",
      currencyPairs: [
        { currency: "Bitcoin", symbol: "BTC", ticker: "BTCUSDT" },
        { currency: "Ether", symbol: "ETH", ticker: "ETHUSDT" },
      ],
    },
    bitstamp: {
      apiUrl: "https://www.bitstamp.net/api/v2/ticker/",
      currencyPairs: [
        { currency: "Bitcoin", symbol: "BTC", ticker: "btcusd" },
        { currency: "Ether", symbol: "ETH", ticker: "ethusd" },
      ],
    },
    coinbase: {
      apiUrl: "https://api.coinbase.com/v2/prices/",
      currencyPairs: [
        { currency: "Bitcoin", symbol: "BTC", ticker: "BTC-USD" },
        { currency: "Ether", symbol: "ETH", ticker: "ETH-USD" },
      ],
    },
    mongo: {
      url: "mongodb://localhost/",
      database: process.env.DB_NAME || "juniper",
      mongooseCfg: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
    },
  },
};
