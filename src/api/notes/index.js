const NotesHandler = require('../../../src/api/notes/handler');
const routes = require('./routes');

module.exports = {
  notes: {
    name: 'notes',
    version: '1.0.0',
    register: async (server, { service, validator }) => {
      const notesHandler = new NotesHandler(service, validator);
      server.route(routes(notesHandler));
    },
  },
  suba: {
    name: 'suba',
    version: '1.0.0',
    register: async (server) => {
      server.route({
        method: 'GET',
        path: '/endpoint2',
        handler: (req, res) => {
          return 'hello world';
        },
      });
    },
  },
};
