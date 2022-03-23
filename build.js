const fs = require("fs");

const { readFile, writeFile, copyFile } = fs;
const encoding = "utf-8";

async function build() {
  // copy css file
  copyFile("./src/style.css", "./dist/style.css", (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
  });

  // combine js + html
  let output;
  readFile("./src/index.html", encoding, async (err, html) => {
    if (err) {
      throw new Error(err);
    }

    readFile("./src/main.js", encoding, async (err, javascript) => {
      if (err) {
        throw new Error(err);
      }

      output = html.replace("${INLINE_SCRIPT}", javascript);
      writeFile("./dist/index.html", output, {}, (err) => {
        if (err) {
          throw new Error(err);
        }

        console.log("Successfully written to file dist/index.html");
      });
    });
  });
}

try {
  build();
} catch (err) {
  console.log("There has been an error: ", err);
}
