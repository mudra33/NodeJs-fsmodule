const fs = require("fs");

const result = fs.readdirSync("./", { withFileTypes: true });

result.forEach((d) => {
  if (d.isDirectory()) {
    console.log(d.name, "is a folder");
  } else {
    console.log(d.name, "is a file");
  }
});
