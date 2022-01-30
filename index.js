const puppeteer = require("puppeteer");


async function searchRes() {

  try{
  let name="";
    if (process.argv[2]==undefined) {
    console.log("no name specified using example");
  }
  else name=process.argv[2];
  const searchQuery = "site:linkedin.com "+name;

  browser = await puppeteer.launch(
    {
      headless:false,
      slowMo:250
    }
  );
  const [page] = await browser.pages();
  await page.goto("https://www.google.com/");
  await page.waitForSelector('input[aria-label="Search"]', {visible: true});
  await page.type('input[aria-label="Search"]', searchQuery);
  await Promise.all([
    page.waitForNavigation(),
    page.keyboard.press("Enter"),
  ]);
  await page.waitForSelector(".LC20lb", {visible: true});
  const searchResults = await page.evaluate(() => 
    [...document.querySelectorAll(".LC20lb")].map(e => ({
      title: e.innerText,
      link: e.parentNode.href
    }))
  );
  console.log(searchResults);
  }catch(e){
    console.log(e)
  }
  finally{
    await browser.close()
  }
}
searchRes()

