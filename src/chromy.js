const Chromy = require("chromy")
const fs = require("fs")


async function main() {
  let driver = new Chromy({
    additionalChromeFlags: ["--window-size=1200,1000"]
  })
  await driver.goto("https://sitest.jp")
  const capture = await driver.screenshot()
  fs.writeFileSync("./tmp/capture.png", capture)
  await driver.close()
}

main()
