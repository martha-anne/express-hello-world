const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  console.log("building pdf");

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.payaca.com/", { waitUntil: "networkidle0" });
  const pdf = await page.pdf({ format: "A4" });
  await browser.close();
  console.log(pdf);
  console.log("pdf built");
  // return pdf
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
