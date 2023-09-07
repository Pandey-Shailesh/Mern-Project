exports.signup = (req, res) => {
  console.log("REQ BODY", req.body);
  res.json({ message: "Signup works " });
};

exports.signout = (req, res) => {
  res.json({
    message: "User Signout",
  });
};
