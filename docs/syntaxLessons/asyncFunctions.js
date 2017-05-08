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


async function waitingGame (seconds) {
  try {
    let successMessage = await waitUpToThreeSeconds(seconds)
    console.log(successMessage)
  } catch (e) {
    console.log(e)
  }
}

waitingGame(4)
waitingGame(2)


async function doubleWaitingGame(firstTime, secondTime) {
  try {
    let [
      firstResult, secondResult
    ] = await Promise.all([
      waitUpToThreeSeconds(firstTime),
      waitUpToThreeSeconds(secondTime)
    ])
    console.log("both promises succeeded!")
  } catch (e) {
    console.log("both promises failed")
  }
}

doubleWaitingGame(2, 1)

doubleWaitingGame(2, 6)
