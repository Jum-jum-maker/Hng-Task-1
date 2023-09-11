const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeekIndex = currentDate.getDay();
const currentDayOfWeek = daysOfWeek[dayOfWeekIndex];
const currentTime = currentDate.toLocaleTimeString();
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfWeek;
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentTime;



