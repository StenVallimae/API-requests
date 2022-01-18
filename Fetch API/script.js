// fetch("https://api.cryptonator.com/api/full/btc-usd")
//   .then((res) => {
//     console.log("resonse waiting to parse", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data recieved");
//     console.log(data.ticker.price);
//   })
//   .catch((e) => {
//     console.log("error", e);
//   });

const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch("https://api.cryptonator.com/api/full/btc-usd");
    const data = await res.json();
    console.log(data.ticker.price);
  } catch (e) {
    console.log("something is wrong", e);
  }
};
