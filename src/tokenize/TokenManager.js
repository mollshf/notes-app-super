const Jwt = require('@hapi/jwt');
const InvariantError = require('../exception/InvariantError');

const TokenManager = {
  generateAccessToken: (payload) => {
    console.log(process.env.ACCESS_TOKEN_KEY);
    return Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY);
  },

  generateRefreshToken: (payload) => {
    console.log(process.env.REFRESH_TOKEN_KEY);
    return Jwt.token.generate(payload, process.env.REFRESH_TOKEN_KEY);
  },

  verifyRefreshToken: (refreshToken) => {
    try {
      const artifacts = Jwt.token.decode(refreshToken);
      console.log(artifacts);
      Jwt.token.verifySignature(artifacts, process.env.REFRESH_TOKEN_KEY);
      const { payload } = artifacts.decoded;
      return payload;
    } catch (error) {
      console.log(error);
      throw new InvariantError('Refresh token tidak valid');
    }
  },
};

module.exports = TokenManager;
