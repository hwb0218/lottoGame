const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => res.render("index"));

app.get("/winner-numbers", (req, res) => {
  const crawler = async () => {
    const arr = [];
    const response = await axios.get(
      "https://www.dhlottery.co.kr/gameResult.do?method=byWin"
    );
    const html = response.data;
    const $ = cheerio.load(html);

    const $span = $(".win_result > .nums > .win > p > span");
    for (let i = 0; i < $span.length; i += 1) {
      const link = $span.eq(i).text();
      arr.push(link);
    }
    return arr;
  };
  const z = crawler();
  z.then((x) => res.send(x));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
