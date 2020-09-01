const express = require("express");
const playwright = require("playwright");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  console.log("building pdf");

  const browser = await playwright["chromium"].launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://payaca.com/");
  const pdf = await page.pdf({ format: "A4" });
  await browser.close();
  // return pdf
  res.send(pdf);
});

app.listen(port, async () => {
  console.log("building pdf");

  const browser = await playwright["chromium"].launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://payaca.com/");
  const pdf = await page.pdf({ format: "A4" });
  await browser.close();
  console.log("pdf built");
  console.log(`Example app listening at http://localhost:${port}`);
});
