var today2 = new Date();
var currentMonth2 = today.getMonth();
var currentYear2 = today.getFullYear();
var selectYear2 = document.getElementById("year--2");
var selectMonth2 = document.getElementById("month--2");
var monthHeader2 = document.getElementById("monthHeader--2");
var yearHeader2 = document.getElementById("yearHeader--2");
var nextBtn2 = document.getElementById("next--2");
var previousBtn2 = document.getElementById("previous--2");
var datePicked2 = document.getElementById("date-picked--2");
var months2 = "";
var days2 = "";
var monthsArr2 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var daysArr2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

months2 = monthsArr2;
days2 = daysArr2;

var tableHeaderMonth2 = document.getElementById("thead-month--2");
var dataHead2 = "<tr>";
var startDay2 = "";

for (dhead2 in days2) {
  days[dhead2] === "Sun" ? (startDay2 = "red-text") : (startDay2 = "");
  dataHead2 +=
    "<th data-days='" +
    days2[dhead2] +
    "' class='" +
    startDay2 +
    "'>" +
    days2[dhead] +
    "</th>";
}

dataHead2 += "</tr>";
tableHeaderMonth2.innerHTML = dataHead2;
showCalendar2(currentMonth2, currentYear2);

nextBtn2.addEventListener("click", next2, false);
previousBtn2.addEventListener("click", previous2, false);

function yearRange2(start2, end2) {
  var years2 = "";

  for (var year2 = start2; year2 <= end2; year2++) {
    years2 += "<option value='" + year2 + "'>" + year2 + "</option>";
  }

  return years2;
}

var createYear2 = yearRange2(1970, 2050);
selectYear2.innerHTML = createYear2;

function next2() {
  currentYear2 = currentMonth2 === 11 ? currentYear2 + 1 : currentYear2;
  currentMonth2 = (currentMonth2 + 1) % 12;
  showCalendar2(currentMonth2, currentYear2);
}

function previous2() {
  currentYear2 = currentMonth2 === 0 ? currentYear2 - 1 : currentYear2;
  currentMonth2 = currentMonth2 === 0 ? 11 : currentMonth2 - 1;
  showCalendar2(currentMonth2, currentYear2);
}

function jump2() {
  currentYear2 = parseInt(selectYear2.value);
  currentMonth2 = parseInt(selectMonth2.value);
  showCalendar2(currentMonth2, currentYear2);
}

function showCalendar2(month2, year2) {
  var firstDay2 = new Date(year2, month2).getDay();
  var monthString2 = monthsArr2[month2];

  table2 = document.getElementById("calendar-body--2");
  table2.innerHTML = "";
  monthHeader2.innerHTML = monthString2.substring(0, 3);
  yearHeader2.innerHTML = year2;
  selectYear2.value = year2;
  selectMonth2.value = month2;

  var date2 = 1;

  for (var i = 0; i < 6; i++) {
    var row2 = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay2) {
        cell2 = document.createElement("td");
        cellText2 = document.createTextNode("");
        cell2.appendChild(cellText2);
        row2.appendChild(cell2);
      } else if (date2 > daysInMonth2(month2, year2)) {
        break;
      } else {
        cell2 = document.createElement("td");
        cell2.setAttribute("data-date", date2);
        cell2.setAttribute("data-month", month2 + 1);
        cell2.setAttribute("data-year", year2);
        cell2.setAttribute("data-month-name", months2[month2]);
        cell2.className = "date-picker--2";
        cell2.innerHTML = "<span>" + date2 + "</span>";
        cell2.onclick = function (event) {
          var dates2 = document.querySelectorAll(".date-picker--2");
          var currentTarget2 = event.currentTarget;
          var date2 = currentTarget2.dataset.date2;
          var month2 = currentTarget2.dataset.month2 - 1;
          var year2 = currentTarget2.dataset.year2;

          for (var i = 0; i < dates2.length; i++) {
            dates2[i].classList.remove("selected--2");
          }

          currentTarget2.classList.add("selected--2");
          datePicked2.innerHTML =
            date2 + " " + monthsArr2[month2] + " " + year2;
        };

        if (
          date2 === today2.getDate() &&
          year2 === today2.getFullYear() &&
          month2 === today2.getMonth()
        ) {
          cell2.className = "date-picker--2 selected--2";
        }

        row2.appendChild(cell2);
        date2++;
      }
    }

    table2.appendChild(row2);
  }
}

function daysInMonth2(month2, year2) {
  return 32 - new Date(year2, month2, 32).getDate();
}

var popupContent = document.getElementById("popup__content");
var popup = document.getElementById("popup");

var throwbackBtn = document.getElementById("throwback__btn");

throwbackBtn.addEventListener("click", function () {
  popup.style.opacity = 1;
  popup.style.visibility = "visible";
});

window.addEventListener("click", function (e) {
  if (e.target.id !== "throwback__btn") {
    var parent = e.target.closest("#popup__content");
    if (!parent && popup.style.visibility === "visible") {
      popup.style.opacity = 0;
      popup.style.visibility = "hidden";
    }
  }
});
