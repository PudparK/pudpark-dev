async function fetchData(url) {
  console.log("url:", url);
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
export default fetchData;
