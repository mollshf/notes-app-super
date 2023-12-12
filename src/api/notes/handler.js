class NotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHandler(request, h) {
    try {
      const { title = "untitled", body, tags } = request.payload;

      const noteId = this._service.addNote({ title, body, tags });

      const response = h.response({
        status: "success",
        message: "Catatan berhasil ditambahkan",
        data: {
          noteId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      const response = h.response({
        status: "fail",
        message: error.message,
      });
      response.code(400);
      return response;
    }
  }
  getNotesHandler() {
    try {
      const notes = this._service.getNotes();
      return {
        status: "success",
        data: {
          notes,
        },
      };
    } catch (error) {
      const response = h.response({
        status: "fail",
        message: error.message,
      });
      response.code(400);
      return response;
    }
  }

  getNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;
      const note = this._service.getNoteById;
      return {
        status: "success",
        data: {
          note,
        },
      };
    } catch (error) {
      const response = h.response({
        status: "fail",
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }
  putNoteByIdHandler() {
    try {
      const { id } = request.payload;
      this._service.editNoteById(id, request.payload);
      return {
        status: "succes",
        message: "Catatan berhasil diperbarui",
      };
    } catch (error) {
      const response = h.response({
        status: "fail",
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }
  deleteNoteByIdHandler() {
    try {
      const { id } = request.payload;
      this._service.deleteNoteByid(id);
      return {
        status: "success",
        message: "Catatan berhasil dihapus",
      };
    } catch (error) {
      const response = h.response({
        status: "fail",
        message: error.message,
      });
      response.code(404);
      return response;
    }
  }
}

// module.exports = NotesHandler;
