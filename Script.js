const currentTimeUTC = document.getElementById("currentTimeUTC");
const currentDayElement = document.getElementById("currentDay");

function updateTimeAndDay() {
  const date = new Date();
  currentTimeUTC.textContent = date.toLocaleString("en-US", { timeZone: "UTC" });

  const day = date.getDay(); // Get the day of the week (0-6)
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  currentDayElement.textContent = ` ${daysOfWeek[day]}, `;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);


