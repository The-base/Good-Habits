today = new Date();
currentYear = today.getFullYear();
currentMonth = today.getMonth();
const habit = ["Drink Water", "clean the dishes"]



months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
habits = document.getElementById("habit")
monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear, "calendar-body");
showCalendar(currentMonth = 1, currentYear, "calendar-body1");
showCalendar(currentMonth = 2, currentYear, "calendar-body2");
showCalendar(currentMonth = 3, currentYear, "calendar-body3");
showCalendar(currentMonth = 4, currentYear, "calendar-body4");
showCalendar(currentMonth = 5, currentYear, "calendar-body5");
showCalendar(currentMonth = 6, currentYear, "calendar-body6");
showCalendar(currentMonth = 7, currentYear, "calendar-body7");
showCalendar(currentMonth = 8, currentYear, "calendar-body8");
showCalendar(currentMonth = 9, currentYear, "calendar-body9");
showCalendar(currentMonth = 10, currentYear, "calendar-body10");
showCalendar(currentMonth = 11, currentYear, "calendar-body11");



function myFunction() {
    this.style.backgroundColor = "yellow"
}


function showCalendar(month, year, location) {

    let firstDay = (new Date(year, month)).getDay();
    let newDate = new Date();

    let getMonth = newDate.getMonth();
    tbl = document.getElementById(`${location}`); // body of the calendar


    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = `${months[getMonth]}` + " " + year;
    habits.innerHTML = habit[0];

    currentYear = year;
    currentMonth = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 33; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 1; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createElement("button")
                cellText.innerHTML = 'click me';

                cellText.addEventListener("click", myFunction);

                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cellText = document.createElement("button")
                cellText.innerHTML = 'click me';
                cellText.addEventListener("click", myFunction);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}


// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
    cell.classList.add("bg-info");
} // color today's date