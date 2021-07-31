"ues strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const process = {
  sendData: (req, res) => {
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};
