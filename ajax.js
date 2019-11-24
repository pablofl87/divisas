const url = 'https://api.exchangeratesapi.io/latest';

function getRates() {
  return fetch(url).then(res => res.json());
  // .then(data => data);
}
export { getRates };
