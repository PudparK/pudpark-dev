const fetchData = (url) => {
  const storeData = (fetchedData) => {
    console.log("fetchedData:", fetchedData);
  };
  fetch(url)
    .then((data) => storeData(data))
    .catch((err) => console.log(`Error: ${err}`));
};
export default fetchData;
