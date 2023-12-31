import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<html><head><title>Form</title></head`);
    res.write(
      `<body><form method='post' action='/process'><input name='message'/></form></body>`
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("stream finished");
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      res.write(`<p>${parseBody}</p>`);
      res.end();
    });
  } else {
    res.write("not Found");
    res.end();
  }
});

server.listen(3000);
