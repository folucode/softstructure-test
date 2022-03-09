const { hashSync } = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  signup: async (name, email, password) => {
    const hashedPassword = hashSync(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });
    const tokenExpiryInSeconds = parseInt(process.env.JWT_TOKEN_EXPIRY_IN_SECONDS, 10);
    const tokenExpiresAt = new Date(new Date().getTime() + 1000 * tokenExpiryInSeconds);


    return {
      status: 'success',
      message: 'Signup was successful',
      data: user,
    };
  },
};
