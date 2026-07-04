const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const chineseWeekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

const beijingDateFormatter = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  hourCycle: "h23"
});

function getPart(parts, type) {
  return parts.find((part) => part.type === type)?.value || "";
}

function renderBalloonTime(timeText) {
  timeElement.innerHTML = "";

  Array.from(timeText).forEach((character, index) => {
    const span = document.createElement("span");
    span.className = character === ":" ? "char colon" : "char";
    span.style.setProperty("--i", index);
    span.textContent = character;
    timeElement.appendChild(span);
  });
}

function updateClock() {
  const now = new Date();
  const parts = beijingDateFormatter.formatToParts(now);

  const year = getPart(parts, "year");
  const month = getPart(parts, "month");
  const day = getPart(parts, "day");
  const weekdayPart = getPart(parts, "weekday");
  const hour = getPart(parts, "hour").padStart(2, "0");
  const minute = getPart(parts, "minute").padStart(2, "0");
  const second = getPart(parts, "second").padStart(2, "0");

  const weekday = chineseWeekdays[new Date(now.toLocaleString("en-US", { timeZone: "Asia/Shanghai" })).getDay()] || weekdayPart;
  const timeText = `${hour}:${minute}:${second}`;

  renderBalloonTime(timeText);
  dateElement.textContent = `${year}年${month}月${day}日 ${weekday}`;
}

updateClock();
window.setInterval(updateClock, 1000);
