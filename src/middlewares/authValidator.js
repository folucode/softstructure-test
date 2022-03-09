module.exports = {
  signup: (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      if (!name) {
        res.status(400).send({ status: false, message: 'name is required' });
      }

      if (!email) {
        res.status(400).send({ status: false, message: 'email is required' });
      }

      if (!password) {
        res
          .status(400)
          .send({ status: false, message: 'password is required' });
      }

      return next();
    } catch (error) {
      res
        .status(500)
        .send({ status: 'failed', message: 'Something went wrong' });
    }
  },
};
