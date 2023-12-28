const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    handler: (request, h) => handler.postNoteHandler(request, h),
  },
  {
    method: 'GET',
    path: '/notes',
    handler: (request, h) => handler.getNotesHandler(request, h),
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: (request, h) => handler.getNoteByIdHandler(request, h),
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: (request, h) => handler.putNoteByIdHandler(request, h),
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: (request, h) => handler.deleteNoteByIdHandler(request, h),
  },
];

module.exports = routes;
