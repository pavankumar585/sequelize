function error(err, req, res, next) {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err)
    res.status(400).json({ status: false, message: "Bad JSON syntax" });
}

module.exports = error;
