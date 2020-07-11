const fetchData = (url) => {
  const storeData = (fetchedData) => {
    return fetchedData;
  };
  fetch(url)
    .then((res) => res.json())
    .then((data) => storeData(data))
    .catch((err) => console.log(`${err}`));
};
export default fetchData;
