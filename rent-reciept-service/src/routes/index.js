var express = require("express");
var router = express.Router();
var html_to_pdf = require("html-pdf-node");

let options = { format: "A4" };

const createPDF = async (param) => {
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ["--disable-extensions"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/users/" + param, {
    waitUntil: "networkidle2",
  });
  await page.pdf({ path: param + ".pdf", format: "a4" });
  await browser.close();
};

/* GET home page. */
router.get("/:param", async function (req, res, next) {
  const param = req.params.param;
  let file = [
    { url: "http://localhost:3000/users/" + param, name: "example.pdf" },
  ];
  html_to_pdf.generatePdfs(file, options).then((output) => {
    console.log("PDF Buffer:-", output); // PDF Buffer:- [{url: "https://example.com", name: "example.pdf", buffer: <PDF buffer>}]
  });
  res.render("index", { title: "Express" });
});

module.exports = router;
