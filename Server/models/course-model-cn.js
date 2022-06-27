const mongoose = require("mongoose");

const courseSchema_cn = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    discipline: {
        type: String,
    },
    disciplineCode: {
        type: Number,
    },
    Institution: {
        type: String,
    },
    duration: {
        type: Number,
    },
    fee: {
        type: Number,
    },
    currency: {
        type: String,
    },
    period: {
        type: String,
    },
    applyDate: {
        type: Date,
    },
    startDate: {
        type: Date,
    },
    level: {
        type: String
    },
    levelCode: {
        type: Number
    },
    city: {
        type: String
    },
    province: {
        type: String
    },
    country: {
        type: String
    },
    locationCode: {
        type: Number
    },
    IELTS: {
        type: Number
    },
    TOEFL: {
        type: Number
    },
    Duolingo: {
        type: Number
    },
    req: {
        type: Array
    },
    mode: {
        type: String
    },
    modeCode: {
        type: Number
    },
    updateDate: {
        type: Date,
        default: Date.now,
    },
    click: {
        type: Number,
    },
    code: {
        type: String
    },
    lang: {
        en: {
            type: String,
        },
        cn: {
            type: String,
        },
        zh: {
            type: String,
        }
    }
});

module.exports = mongoose.model("course_cn", courseSchema_cn);