var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-106px";
  }
  prevScrollpos = currentScrollPos;
};

const countries_en = {
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
  //   country: "United State",
  //   countryCode: 200,
  // },
};

const disciplines = ["Agriculture & Forestry", "Applied Science", "Arts & Design", "Architecture", "Business & Management", "Computer Science & IT", "Education & Training", "Engineering & Technology", "Envirnomental Studies & Earth Science", "Hospitality, Leisure & Sports", "Humanities", "Journalism & Media", "Law", "Mathematics", "Medicine & Health", "Nature Sciences", "Social Science"];

document.getElementById("clear").addEventListener("click", myFunction);

function myFunction() {
  for (var i = 0; i < disciplines.length; i++) {
    if (document.getElementById("discipline_" + i).checked == true) {
      document.getElementById("discipline_id_" + i).classList.remove("active");
    }
  };
  for (let i in countries_en) {
    if (document.getElementById("country_" + i).checked == true) {
      document.getElementById("country_id_" + i).classList.remove("active");
    }
  };
  for (let i in countries_en["ca"].provinces) {
    if (document.getElementById("province_" + i).checked == true) {
      document.getElementById("province_id_" + i).classList.remove("active");
    }
  };
  for (var i = 0; i < countries_en["ca"].cities["bc"].length; i++) {
    if (document.getElementById("city_" + i).checked == true) {
      document.getElementById("city_id_" + i).classList.remove("active");
    }
  };
  document.getElementById("myForm").reset();
}

function checkbox_discipline(discipline) {
  let check = document.getElementById("discipline_" + discipline).checked;
  let button = document.getElementById("discipline_id_" + discipline);

  if (check == true) {
    document.getElementById("discipline_" + discipline).checked = false;
  } else if (check == false) {
    button.classList.add("active");
    document.getElementById("discipline_" + discipline).checked = true;
  };
  for (var i = 0; i < disciplines.length; i++) {
    if (document.getElementById("discipline_" + i).checked == false) {
      document.getElementById("discipline_id_" + i).classList.remove("active");
    }
  };
}


function checkbox_country(country) {
  let check = document.getElementById("country_" + country).checked;
  let button = document.getElementById("country_id_" + country);

  if (check == true) {
    document.getElementById("country_" + country).checked = false;
  } else if (check == false) {
    button.classList.add("active");
    document.getElementById("country_" + country).checked = true;
  };
  for (let i in countries_en) {
    if (document.getElementById("country_" + i).checked == false) {
      document.getElementById("country_id_" + i).classList.remove("active");
    }
  };
}

function checkbox_province(province) {
  let check = document.getElementById("province_" + province).checked;
  let button = document.getElementById("province_id_" + province);

  console.log(document.getElementById("province_" + province).value)
  if (check == true) {
    for (let j = 0; j < countries_en["ca"].cities[province].length; j++) {
      document.getElementById(province + j + "_id").style.display = "none";
      document.getElementById(province + j).checked = false;
    }
    document.getElementById("province_" + province).checked = false;
  } else if (check == false) {
    button.classList.add("active");
    document.getElementById("province_" + province).checked = true;
    for (let city in countries_en["ca"].cities) {
      if (city == province) {
        for (let j = 0; j < countries_en["ca"].cities[province].length; j++) {
          document.getElementById(province + j + "_id").style.display = "inline-block";
        }
      } else {
        for (let j = 0; j < countries_en["ca"].cities[city].length; j++) {
          document.getElementById(city + j + "_id").style.display = "none";
          document.getElementById(city + j).checked = false;
        }
      }
    }
  }
  for (let i in countries_en["ca"].provinces) {
    if (document.getElementById("province_" + i).checked == false) {
      document.getElementById("province_id_" + i).classList.remove("active");
    }
  }

}

function checkbox_city(city, j) {
  let check = document.getElementById(city + j).checked;
  let button = document.getElementById(city + j + "_id");
  console.log(city);
  console.log(countries_en["ca"].cities[city].length);
  if (check == true) {
    document.getElementById(city + j).checked = false;
  } else if (check == false) {
    button.classList.add("active")
    document.getElementById(city + j).checked = true;
  };
  for (var i = 0; i < countries_en["ca"].cities[city].length; i++) {
    if (document.getElementById(city + i).checked == false) {
      document.getElementById(city + i + "_id").classList.remove("active");
    }
  };
}