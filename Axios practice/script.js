// FETCHING DATA 1

// axios
//   .get("https://api.cryptonator.com/api/full/btc-usd")
//   .then((res) => {
//     console.log(res.data.ticker.price);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// FETCHING DATA 2

// const fetchBitcoinPrice = async () => {
//   try {
//     const res = await axios.get("https://api.cryptonator.com/api/full/btc-usd");
//     console.log(res.data.ticker.price);
//   } catch (e) {
//     console.log("error", e);
//   }
// };

// FETCHING DATA 3, CHANGING HEADERS
const jokes = document.querySelector("#jokes");
const button = document.querySelector("#button");

const addNewJoke = async () => {
  const joke = await getDadJoke();
  console.log(joke);
  const newLI = document.createElement("li");
  newLI.append(joke);
  jokes.append(newLI);
};
const getDadJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "no jokes";
  }
};

button.addEventListener("click", addNewJoke);
