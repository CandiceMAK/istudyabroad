const statics_en = {
    lang: "en",
    course: "Course",
    immigration: "Immigration",
    wishList: "Wish List",
    ourService: "Our Service",
    partnership: "Partnership",
    service: "Student Service",
    what: "What&nbsp;do&nbsp;you&nbsp;study?",
    where: "Where&nbsp;do&nbsp;you&nbsp;go?",
    programeDetail: "Programe Name & Detail",
    location: "Location",
    fee: "Course Fee",
    maxFee: "Course Fee Budget",
    dur: "Duration",
    term: "Next Offering Term",
    eng: "IELTS",
    permit: "Student Permit & PGWP",
    studentPermit: "Student Permit",
    PGWP: "PGWP",
    date: "Term",
    rank: "Rank",
    filter: "Filter",
    discipline: "discipline",
    disciplines: ["Agriculture&nbsp;&&nbsp;Forestry", "Applied&nbsp;Science", "Arts&nbsp;&&nbsp;Design", "Architecture", "Business&nbsp;&&nbsp;Management", "Computer&nbsp;Science&nbsp;&&nbsp;IT", "Education&nbsp;&&nbsp;Training", "Engineering&nbsp;&&nbsp;Technology", "Envirnomental&nbsp;Studies&nbsp;&&nbsp;Earth&nbsp;Science", "Hospitality,&nbsp;Leisure&nbsp;&&nbsp;Sports", "Humanities", "Journalism&nbsp;&&nbsp;Media", "Law", "Mathematics", "Medicine&nbsp;&&nbsp;Health", "Nature&nbsp;Sciences", "Social&nbsp;Science"],
    disciplines_id: ["Agriculture & Forestry", "Applied Science", "Arts & Design", "Architecture", "Business & Management", "Computer Science & IT", "Education & Training", "Engineering & Technology", "Envirnomental Studies & Earth Science", "Hospitality, Leisure & Sports", "Humanities", "Journalism & Media", "Law", "Mathematics", "Medicine & Health", "Nature Sciences", "Social Science"],
    country: "Country",
    city: "City/Town",
    province: "Province/State",
    expdur: "Expected Duration",
    month: "Months",
    year: "Year",
    apply: "Apply",
    to: "to",
    sort: "Sort By",
    clear: "Clear All",
    ieltsBelow: "IELTS Below",
};

const countries = {
    ca: {
        country: "Canada",
        countryCode: 100,
        provinces: {
            ab: "Alberta",
            bc: "British Columbia",
            mb: "Manitoba",
            nb: "New Brunswick",
            nl: "Newfoundland and Labrador",
            ns: "Nova Scotia",
            on: "Ontario",
            pei: "Prince Edward Island",
            qb: "Quebec",
            sk: "Saskatchewan"
        },
        provinceCode: {
            ab: 101,
            bc: 102,
            mb: 103,
            nb: 104,
            nl: 105,
            ns: 106,
            on: 107,
            pei: 108,
            qb: 109,
            sk: 110,
        },
        cities: {
            ab: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert", "Medicine Hat", "Grande Prairie", "Airdrie", "Spruce Grove", "Leduc", "Others"],
            bc: ["Vancouver", "Surrey", "Burnaby", "Richmond", "Abbotsford", "Coquitlam", "Kelowna", "Langley", "Saanich", "Delta", "Others"],
            mb: ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie", "Winkler", "Selkirk", "Dauphin", "Morden", "Flin Flon"],
            nb: ["Bathurst", "Campbellton", "Dieppe", "Edmundston", "Fredericton", "Miramichi", "Moncton", "Saint John"],
            nl: ["St. John's", "Conception Bay South", "Mount Pearl", "Paradise", "Corner Brook", "Grand Falls-Windsor", "Gander", "PortugalCove-St. Philip's", "Happy Valley-Goose Bay", "Torbay", "Others"],
            ns: ["Halifax", "Sydney", "Truro", "New Glasgow", "Glace Bay", "Kentville", "Sydney Mines", "Amherst", "Bridgewater", "Yarmouth", "Others"],
            on: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London", "Markham", "Vaughan", "Kitchener", "Windsor", "Others"],
            pei: ["Charlottetown", "Summerside", "Stratford", "Cornwall", "Three Rivers", "North Shore", "Belfast", "Kensington", "Afton", "Miltonvale Park", "Others"],
            qb: ["Montreal", "Quebec City", "Gatineau", "Sherbrooke", "Trois-Rivières", "Chicoutimi-Jonquière", "Saint-Jean-sur-Richelieu", "Châteauguay", "Drummondville", "Saint-Jérôme", "Others"],
            sk: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Swift Current", "Yorkton", "North Battleford", "Lloydminster", "Estevan", "Warman", "Others"],
        },
    },
    // usa: {
    //     country: "United State",
    //     countryCode: 200,
    // }
};


module.exports = {
    statics_en,
    countries
};