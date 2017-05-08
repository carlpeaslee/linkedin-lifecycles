

const url = 'https://myapi.com'
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    //your json stuff
  })
}

fetch(url, options)
  .then(response => response.json())
  .then(json => json).catch()



async function getData(url, options) {
  try {
    let response = await fetch(url, options)
    let result = await response.json()
    return result
  } catch (e) {
    console.log(e)
  }
}
