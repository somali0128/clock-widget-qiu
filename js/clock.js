const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const chineseWeekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const timeCharacterCount = 5;

const beijingDateFormatter = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  month: "2-digit",
  day: "2-digit",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  hourCycle: "h23"
});

function getPart(parts, type) {
  return parts.find((part) => part.type === type)?.value || "";
}

function initializeTimeCharacters() {
  if (timeElement.children.length === timeCharacterCount) {
    return;
  }

  timeElement.innerHTML = "";

  for (let index = 0; index < timeCharacterCount; index += 1) {
    const span = document.createElement("span");
    span.className = index === 2 ? "char colon" : "char";
    span.style.setProperty("--i", index);
    span.textContent = index === 2 ? ":" : "0";
    timeElement.appendChild(span);
  }
}

function renderBalloonTime(timeText) {
  initializeTimeCharacters();

  Array.from(timeText).forEach((character, index) => {
    const span = timeElement.children[index];
    if (span && span.textContent !== character) {
      span.textContent = character;
    }
  });
}

function updateClock() {
  const now = new Date();
  const parts = beijingDateFormatter.formatToParts(now);

  const month = getPart(parts, "month");
  const day = getPart(parts, "day");
  const weekdayPart = getPart(parts, "weekday");
  const hour = getPart(parts, "hour").padStart(2, "0");
  const minute = getPart(parts, "minute").padStart(2, "0");

  const weekday = chineseWeekdays[new Date(now.toLocaleString("en-US", { timeZone: "Asia/Shanghai" })).getDay()] || weekdayPart;

  renderBalloonTime(`${hour}:${minute}`);
  dateElement.textContent = `${Number(month)}月${Number(day)}日，${weekday}`;
}

updateClock();
window.setInterval(updateClock, 1000);
