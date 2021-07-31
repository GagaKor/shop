"ues strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
};

const process = {
  sendData: async (req, res) => {
    const data = {
      result: true,
      data: req.body,
    };
    console.log(data);
    res.json(data);
  },
};

module.exports = {
  output,
  process,
};
