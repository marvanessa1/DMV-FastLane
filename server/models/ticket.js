const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    service: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    complete: {
        type: Boolean,
        default: false,
    }
});

const Ticket = model('Ticket', ticketSchema);

module.exports = Ticket;
