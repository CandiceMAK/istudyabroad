const router = require("express").Router();
const course_en = require("../models/course-model-en");
const course_cn = require("../models/course-model-cn");
const course_zh = require("../models/course-model-zh");
const statics_en = require("../public/js/statics_en");
const statics_cn = require("../public/js/statics_cn");
const statics_zh = require("../public/js/statics_zh");
const funt = require("../public/js/function");

router.get("/:lang?", async (req, res) => {
    if (req.params.lang == "cn") {
        let courseFound = await course_cn.find();
        let statics = statics_cn.statics_cn;
        res.render("search", {
            statics: statics,
            courses: courseFound,
            monthNames: funt.monthNames_chi,
            countries: statics_cn.countries,
            funt: funt,
            actButton: null,

        });
    } else if (req.params.lang == "zh") {
        let courseFound = await course_zh.find();
        let statics = statics_zh.statics_zh;
        res.render("search", {
            statics: statics,
            courses: courseFound,
            monthNames: funt.monthNames_chi,
            countries: statics_zh.countries,
            funt: funt,
            actButton: null,

        });
    } else if (req.params.lang != "cn" | "zh") {
        let courseFound = await course_en.find();
        let statics = statics_en.statics_en;
        res.render("search", {
            statics: statics,
            courses: courseFound,
            monthNames: funt.monthNames,
            countries: statics_en.countries,
            funt: funt,
            actButton: null,
        });
    }
});

router.get("/:lang?/filter", async (req, res) => {
    if (req.params.lang == "cn") {
        let {
            discipline,
            country,
            province,
            city,
            maxfee,
            mindur,
            maxdur,
            ieltsBelow
        } = req.query;
        discipline != undefined ? emptyDisp = false : emptyDisp = true;
        country != undefined ? emptyCountry = false : emptyCountry = true;
        province != undefined ? emptyProvince = false : emptyProvince = true;
        city != undefined ? emptyCity = false : emptyCity = true;
        maxfee != "" ? emptyfee = false : emptyfee = true;
        mindur != "" ? emptyMin = false : emptyMin = true;
        maxdur != "" ? emptyMax = false : emptyMax = true;
        ieltsBelow != "" ? emptyIelts = false : emptyIelts = true;
        const arr = [{
                fee: emptyfee ? {
                    $exists: true
                } : {
                    $lte: maxfee / 6
                }
            }, {
                duration: emptyMin ? {
                    $exists: true
                } : {
                    $gte: mindur
                }
            },
            {
                duration: emptyMax ? {
                    $exists: true
                } : {
                    $lte: maxdur
                }
            },
            {
                IELTS: emptyIelts ? {
                    $exists: true
                } : {
                    $lte: ieltsBelow
                }
            },
            {
                disciplineCode: emptyDisp ? {
                    $exists: true
                } : {
                    $eq: discipline
                }
            },
            {
                locationCode: emptyCity ? {
                    $exists: true
                } : {
                    $eq: city
                }
            },
            {
                locationCode: emptyCountry ? {
                    $exists: true
                } : {
                    $gte: country, $lt: country + 100
                }
            },
            {
                locationCode: emptyProvince ? {
                    $exists: true
                } : {
                    $gte: province, $lt: province + 1
                }
            },
        ]

        let courseFound = await course_cn.find({
            $and : arr
        })
        let statics = statics_cn.statics_cn;
        res.render("search", {
            statics: statics,
            courses: courseFound,
            monthNames: funt.monthNames_chi,
            countries: statics_cn.countries,
            funt: funt,
            actButton: null,
        });
    } else if (req.params.lang == "zh") {
        let {
            discipline,
            country,
            province,
            city,
            maxfee,
            mindur,
            maxdur,
            ieltsBelow
        } = req.query;
        discipline != undefined ? emptyDisp = false : emptyDisp = true;
        country != undefined ? emptyCountry = false : emptyCountry = true;
        province != undefined ? emptyProvince = false : emptyProvince = true;
        city != undefined ? emptyCity = false : emptyCity = true;
        maxfee != "" ? emptyfee = false : emptyfee = true;
        mindur != "" ? emptyMin = false : emptyMin = true;
        maxdur != "" ? emptyMax = false : emptyMax = true;
        ieltsBelow != "" ? emptyIelts = false : emptyIelts = true;
        const arr = [{
                fee: emptyfee ? {
                    $exists: true
                } : {
                    $lte: maxfee / 6
                }
            }, {
                duration: emptyMin ? {
                    $exists: true
                } : {
                    $gte: mindur
                }
            },
            {
                duration: emptyMax ? {
                    $exists: true
                } : {
                    $lte: maxdur
                }
            },
            {
                IELTS: emptyIelts ? {
                    $exists: true
                } : {
                    $lte: ieltsBelow
                }
            },
            {
                disciplineCode: emptyDisp ? {
                    $exists: true
                } : {
                    $eq: discipline
                }
            },
            {
                locationCode: emptyCity ? {
                    $exists: true
                } : {
                    $eq: city
                }
            },
            {
                locationCode: emptyCountry ? {
                    $exists: true
                } : {
                    $gte: country, $lt: country + 100
                }
            },
            {
                locationCode: emptyProvince ? {
                    $exists: true
                } : {
                    $gte: province, $lt: province + 1
                }
            },
        ]

        let courseFound = await course_zh.find({
            $and : arr
        })
        let statics = statics_zh.statics_zh;
        res.render("search", {
            statics: statics,
            courses: courseFound,
            monthNames: funt.monthNames_chi,
            countries: statics_zh.countries,
            funt: funt,
            actButton: null,
        });
    } else if (req.params.lang != "cn" | "zh") {
        let {
            discipline,
            country,
            province,
            city,
            maxfee,
            mindur,
            maxdur,
            ieltsBelow
        } = req.query;
        discipline != undefined ? emptyDisp = false : emptyDisp = true;
        country != undefined ? emptyCountry = false : emptyCountry = true;
        province != undefined ? emptyProvince = false : emptyProvince = true;
        city != undefined ? emptyCity = false : emptyCity = true;
        maxfee != "" ? emptyfee = false : emptyfee = true;
        mindur != "" ? emptyMin = false : emptyMin = true;
        maxdur != "" ? emptyMax = false : emptyMax = true;
        ieltsBelow != "" ? emptyIelts = false : emptyIelts = true;
        const arr = [{
                fee: emptyfee ? {
                    $exists: true
                } : {
                    $lte: maxfee / 6
                }
            }, {
                duration: emptyMin ? {
                    $exists: true
                } : {
                    $gte: mindur
                }
            },
            {
                duration: emptyMax ? {
                    $exists: true
                } : {
                    $lte: maxdur
                }
            },
            {
                IELTS: emptyIelts ? {
                    $exists: true
                } : {
                    $lte: ieltsBelow
                }
            },
            {
                disciplineCode: emptyDisp ? {
                    $exists: true
                } : {
                    $eq: discipline
                }
            },
            {
                locationCode: emptyCity ? {
                    $exists: true
                } : {
                    $eq: city
                }
            },
            {
                locationCode: emptyCountry ? {
                    $exists: true
                } : {
                    $gte: country, $lt: country + 100
                }
            },
            {
                locationCode: emptyProvince ? {
                    $exists: true
                } : {
                    $gte: province, $lt: province + 1
                }
            },
        ]

        let courseFound = await course_en.find({
            $and : arr
        })
        let statics = statics_en.statics_en;
        res.render("search", {
            statics: statics,
            courses: courseFound,
            monthNames: funt.monthNames,
            countries: statics_en.countries,
            funt: funt,
            actButton: null,
        });
    }
});

module.exports = router;