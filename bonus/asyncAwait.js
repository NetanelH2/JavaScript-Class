function waitASecond() {
  console.log('Waiting 3 seconds')
  return new Promise((resolve) => {
    setTimeout(() => {
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

const idan = async () => await click()
