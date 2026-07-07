const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const datePanelElement = document.querySelector(".date-panel");

const weekdayNames = {
  short: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d"],
  long: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"]
};

const defaultSettings = {
  time: {
    showHour: true,
    showMinute: true,
    showSecond: false,
    separator: ":"
  },
  date: {
    showDate: true,
    showYear: false,
    showMonth: true,
    showDay: true,
    showWeekday: true,
    weekdayStyle: "short",
    separator: "\uff0c"
  }
};

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

function mergeSettings(base, custom) {
  return {
    time: { ...base.time, ...(custom?.time || {}) },
    date: { ...base.date, ...(custom?.date || {}) }
  };
}

async function loadSettings() {
  try {
    const response = await fetch("./setting.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("setting.json not found");
    }

    const customSettings = await response.json();
    return mergeSettings(defaultSettings, customSettings);
  } catch (error) {
    console.info("Using default clock settings.", error);
    return defaultSettings;
  }
}

function getPart(parts, type) {
  return parts.find((part) => part.type === type)?.value || "";
}

function getBeijingParts(now) {
  const parts = beijingDateFormatter.formatToParts(now);
  const beijingDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));

  return {
    year: getPart(parts, "year"),
    month: getPart(parts, "month"),
    day: getPart(parts, "day"),
    hour: getPart(parts, "hour").padStart(2, "0"),
    minute: getPart(parts, "minute").padStart(2, "0"),
    second: getPart(parts, "second").padStart(2, "0"),
    weekdayIndex: beijingDate.getDay()
  };
}

function buildTimeText(parts, settings) {
  const timeParts = [];

  if (settings.time.showHour) {
    timeParts.push(parts.hour);
  }

  if (settings.time.showMinute) {
    timeParts.push(parts.minute);
  }

  if (settings.time.showSecond) {
    timeParts.push(parts.second);
  }

  return timeParts.join(settings.time.separator || ":");
}

function buildDateText(parts, settings) {
  const datePieces = [];
  const dateTextParts = [];

  if (settings.date.showDate) {
    if (settings.date.showYear) {
      dateTextParts.push(`${parts.year}\u5e74`);
    }

    if (settings.date.showMonth) {
      dateTextParts.push(`${Number(parts.month)}\u6708`);
    }

    if (settings.date.showDay) {
      dateTextParts.push(`${Number(parts.day)}\u65e5`);
    }

    const dateText = dateTextParts.join("");
    if (dateText) {
      datePieces.push(dateText);
    }
  }

  if (settings.date.showWeekday) {
    const style = settings.date.weekdayStyle === "long" ? "long" : "short";
    datePieces.push(weekdayNames[style][parts.weekdayIndex]);
  }

  return datePieces.join(settings.date.separator || "\uff0c");
}

function initializeTimeCharacters(timeText) {
  const characters = Array.from(timeText);
  const existingCharacters = Array.from(timeElement.children);
  const isSeparator = (character) => !/^\d$/.test(character);
  const canReuseCharacters =
    existingCharacters.length === characters.length &&
    existingCharacters.every((span, index) => span.classList.contains("colon") === isSeparator(characters[index]));

  if (canReuseCharacters) {
    return;
  }

  timeElement.innerHTML = "";

  characters.forEach((character, index) => {
    const span = document.createElement("span");
    span.className = isSeparator(character) ? "char colon" : "char";
    span.style.setProperty("--i", index);
    span.textContent = character;
    timeElement.appendChild(span);
  });
}

function renderBalloonTime(timeText) {
  initializeTimeCharacters(timeText);

  Array.from(timeText).forEach((character, index) => {
    const span = timeElement.children[index];
    if (span && span.textContent !== character) {
      span.textContent = character;
    }
  });
}

function renderDate(dateText) {
  if (!dateText) {
    datePanelElement.classList.add("is-hidden");
    dateElement.textContent = "";
    return;
  }

  datePanelElement.classList.remove("is-hidden");
  dateElement.textContent = dateText;
}

function updateClock(settings) {
  const parts = getBeijingParts(new Date());
  const timeText = buildTimeText(parts, settings);
  const dateText = buildDateText(parts, settings);

  renderBalloonTime(timeText);
  renderDate(dateText);
}

async function startClock() {
  const settings = await loadSettings();

  updateClock(settings);
  window.setInterval(() => updateClock(settings), 1000);
}

startClock();
