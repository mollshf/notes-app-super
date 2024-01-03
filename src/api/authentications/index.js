const AuthenticationsHandler = require('./handler.js');
const routes = require('./routes.js');

module.exports = {
  name: 'authentications',
  version: '1.0.0',
  register: async (server, { authenticationsService, usersService, tokenManager, validator }) => {
    const authenticationsHandler = new AuthenticationsHandler(
      authenticationsService,
      usersService,
      tokenManager,
      validator
    );
    server.route(routes(authenticationsHandler));
  },
};
