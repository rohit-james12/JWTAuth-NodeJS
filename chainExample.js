// chaining route handlers
const one = (req, res, next) => {
  console.log("First");
  next();
};

const two = (req, res, next) => {
  console.log("Second");
  next();
};

const three = (req, res) => {
  console.log("Third");
  res.send("<h1>Finished</h1>");
};

// app.get("/chain(.html)?", [one, two, three]);
