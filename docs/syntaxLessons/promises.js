function waitUpToThreeSeconds(seconds) {
  return new Promise( (resolve, reject) => {

    console.log(`I'll wait up to three seconds. You asked me to wait for ${seconds} seconds.`)

    setTimeout(
      () => {
        reject('3 seconds are up! You asked me to wait too long!')
      },
      3000
    )

    setTimeout(
      () => {
        resolve(`${seconds} seconds are up! What a pleasure!`)
      },
      seconds * 1000
    )


  })
}

waitUpToThreeSeconds(2000)
  .then(successMessage => {
    console.log(successMessage)
  })
  .catch(errorMessage => {
    console.log(errorMessage)
  })

waitUpToThreeSeconds(4000)
  .then(successMessage => {
    console.log(successMessage)
  })
  .catch(errorMessage => {
    console.log(errorMessage)
  })
