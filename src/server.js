const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const notes = requires("./api/notes");
const NotesService = require("./services/inMemory/NotesServices");

const init = async () => {
  const notesSerivices = new NotesService();
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
