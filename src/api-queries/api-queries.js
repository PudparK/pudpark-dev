const fetchData = (url) => {
  const storeData = (fetchedData) => {
    console.log("fetchedData:", fetchedData);
  };
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log("data", data))
    // .then((data) => storeData(data))
    .catch((err) => console.log(`Error: ${err}`));
};
export default fetchData;
