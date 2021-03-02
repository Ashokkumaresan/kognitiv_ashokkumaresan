function filterJSON(res) {
  console.log("response");
  return res.json();
}
function filterStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }
  const error = new Error(res.statusText);
  error.res = res;
  error.type = "http";
  throw error;
}
export function Get(urlString) {
  let url = urlString;

  return fetch(url, {
    headers: {   
      "Cache-control": " no-cache",
      "Cache-control": "no-store",
      Pragma: "no-cache",
      Expires: "0",
     'Access-Control-Allow-Origin':'*',    
    },   
  })
    .then(filterStatus)
    .then(filterJSON);
}