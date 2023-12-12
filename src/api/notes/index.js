const NotesService = require("../../services/inMemory/NotesServices");
const routes = require("./routes");

module.exports = {
  name: "notes",
  version: "1.0.0",
  register: async (server, { service }) => {
    const notesHandler = new NotesService(service);
    server.route(routes(notesHandler));
  },
};
