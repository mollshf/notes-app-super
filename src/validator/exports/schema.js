const Joi = require('joi');

const ExportNotesPalyloadSchema = Joi.object({
  targetEmail: Joi.string().email({ tlds: true }).required(),
});

module.exports = ExportNotesPalyloadSchema;
