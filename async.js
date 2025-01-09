function waitASecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Waiting 3 seconds')
      resolve()
    }, 3000)
  })
}

async function run() {
  console.log('Initializing')
  await waitASecond()
  console.log('After waiting for 3 seconds…')
}

run()
