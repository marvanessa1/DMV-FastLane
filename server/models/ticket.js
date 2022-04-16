const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
    visitReason: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    employeeID: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    }
});

ticketSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

ticketSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Ticket = model('Ticket', ticketSchema);

module.exports = Ticket;
