function createElement (data) {
  const pelem = document.createElement('p');
  pelem.innerHTML = data;
  document.body.appendChild(pelem);
}
function queryWikipedia (callback) {
  const wikiRequest = new XMLHttpRequest();
  wikiRequest.onreadystatechange = () => {
    if (wikiRequest.readyState == XMLHttpRequest.DONE) {
      const response = JSON.parse(wikiRequest.responseText);
      callback(response.query.pages['21721040'].extract);
    }
  };
  wikiRequest.open('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
  wikiRequest.send();
}
queryWikipedia(createElement);
