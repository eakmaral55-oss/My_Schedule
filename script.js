const schedule = {
    ПН: [["12:00", "Математические основы создания систем ИИ", "213", "ЛЕК", "Миркин Евгений Леонидович"], ["13:00", "Компьютерный английский язык", "Красный зал", "ЛЕК", "Сыргабаева Алина Маратовна"], ["14:00", "Компьютерный английский язык", "Красный зал", "ЛЕК", "Сыргабаева Алина Маратовна"], ["15:00", "Теория вероятности", "213", "ЛЕК", "Мусакулова Жылдыз Абдыманаповна"], ["16:00", "Основы теории управления", "213", "ЛЕК", "Миркин Евгений Леонидович"], ["17:00", "Основы теории управления", "213", "ЛЕК", "Миркин Евгений Леонидович"]],
    ВТ: [["12:00", "Компьютерная графика и дизайн", "213", "ЛЕК", "Юст Наталья Викторовна"], ["13:00", "База данных", "104", "ЛАБ", "Юст Наталья Викторовна"], ["14:00", "База данных", "104", "ЛАБ", "Юст Наталья Викторовна"], ["15:00", "Теория вероятности", "105", "ЛЕК", "Мусакулова Жылдыз Абдыманаповна"], ["16:00", "Электротехника, электроника и схематика", "105", "ЛЕК", "Айдралиев Акылбек Орузбаевич"], ["17:00", "Электротехника, электроника и схематика", "105", "ЛЕК", "Айдралиев Акылбек Орузбаевич"]],
    СР: [["12:00", "Математические основы создания систем ИИ", "213", "ЛЕК", "Миркин Евгений Леонидович"], ["13:00", "Основы теории управления", "105", "ЛАБ", "Миркин Евгений Леонидович"], ["14:00", "Основы теории управления", "105", "ЛАБ", "Миркин Евгений Леонидович"], ["15:00", "База данных", "213", "ЛЕК", "Юст Наталья Викторовна"]],
    ЧТ: [["13:00", "База данных", "213", "ЛЕК", "Юст Наталья Викторовна"], ["14:00", "Теория вероятности", "213", "ЛЕК", "Мусакулова Жылдыз Абдыманаповна"], ["15:00", "Компьютерная графика и дизайн", "404", "ЛАБ", "Юст Наталья Викторовна"]],
    ПТ: [["09:00", "Теория вероятности", "105", "ЛАБ", "Мусакулова Жылдыз Абдыманаповна"], ["10:00", "Компьютерная графика и дизайн", "107", "ЛАБ", "Юст Наталья Викторовна"], ["11:00", "Компьютерная графика и дизайн", "107", "ЛАБ", "Юст Наталья Викторовна"], ["12:00", "Электротехника, электроника и схематика", "213", "ЛЕК", "Айдралиев Акылбек Орузбаевич"], ["13:00", "Электротехника, электроника и схематика", "213", "ЛЕК", "Айдралиев Акылбек Орузбаевич"], ["14:00", "Программа личностного роста (Модуль 5)", "602", "ТРЕН.", "Матыева Айдай Айтбековна"], ["15:00", "Программа личностного роста (Модуль 5)", "602", "ТРЕН.", "Матыева Айдай Айтбековна"]],
    СБ: [["09:00", "Сеть и телекоммуникации", "104", "ЛЕК", "Каныбеков Карель Каныбекович"], ["10:00", "Сеть и телекоммуникации", "104", "ЛЕК", "Каныбеков Карель Каныбекович"], ["11:00", "Сеть и телекоммуникации", "104", "ЛАБ", "Каныбеков Карель Каныбекович"], ["12:00", "Математические основы создания систем ИИ", "105", "ЛАБ", "Жылкелдиев Данияр Эркинович"], ["13:00", "Математические основы создания систем ИИ", "105", "ЛАБ", "Жылкелдиев Данияр Эркинович"], ["14:00", "Математические основы создания систем ИИ", "105", "ЛАБ", "Жылкелдиев Данияр Эркинович"]]
};
const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"], names = { ПН: "Понедельник", ВТ: "Вторник", СР: "Среда", ЧТ: "Четверг", ПТ: "Пятница", СБ: "Суббота" };
const themes = [["dark", "Тёмная", "linear-gradient(135deg,#090d16,#355da8)"], ["pink", "Розовая", "linear-gradient(135deg,#40152c,#ff91ba)"], ["purple", "Фиолетовая", "linear-gradient(135deg,#211039,#ad8bff)"], ["blue", "Голубая", "linear-gradient(135deg,#0b2a42,#63baff)"], ["green", "Зелёная", "linear-gradient(135deg,#10311e,#75d99b)"], ["orange", "Персиковая", "linear-gradient(135deg,#4a220d,#ffb263)"], ["red", "Красная", "linear-gradient(135deg,#471218,#ff737d)"], ["cream", "Бежевая", "linear-gradient(135deg,#473522,#e9c88f)"], ["cyan", "Бирюзовая", "linear-gradient(135deg,#0b3338,#62e1dc)"], ["light", "Светлая", "linear-gradient(135deg,#dce5f0,#fff)"]];
const logos = [
    "logo1.jpeg",
    "icon_01.png",
    "icon_02.png",
    "icon_03.png",
    "icon_04.png",
    "icon_05.png",
    "icon_06.png",
    "icon_07.png",
    "icon_08.png",
    "icon_09.png",
    "icon_10.png",
    "icon_11.png",
    "icon_12.png"
];
let day = days[(new Date().getDay() + 6) % 7], theme = localStorage.theme || "dark", card = localStorage.card || "glass";

function $(id) { return document.getElementById(id) }
function apply() { document.body.dataset.theme = theme; document.body.dataset.card = card; localStorage.theme = theme; localStorage.card = card }
function renderDays() { $("dayStrip").innerHTML = days.map(d => `<button class="day ${d === day ? "active" : ""}" data-d="${d}">${d}</button>`).join(""); document.querySelectorAll(".day").forEach(x => x.onclick = () => { day = x.dataset.d; renderDays(); render() }) }
function render() { $("dayName").textContent = names[day]; $("lessons").innerHTML = (schedule[day] || []).map(x => `<article class="lesson glass" data-start="${x[0]}"><div class="time">${x[0]}</div><div><div class="subject">${x[1]}</div><div class="meta">${x[2]} · ${x[3]} · ${x[4]}</div></div></article>`).join("") || '<div class="glass lesson">Пар нет</div>'; timer() }
function m(t) { let [h, n] = t.split(":").map(Number); return h * 60 + n }
function timer() { let now = new Date(), cur = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60, a = schedule[day] || [], current = null, next = null; a.forEach((x, i) => { let s = m(x[0]); if (cur >= s && cur < s + 50) current = { x, s, i }; else if (s > cur && !next) next = { x, s, i } }); document.querySelectorAll(".lesson").forEach((e, i) => e.classList.toggle("current", current && i === current.i)); let item = current || next, remaining = 0, ratio = 0; if (current) { remaining = current.s + 50 - cur; ratio = remaining / 50; $("status").textContent = "Сейчас"; $("countLabel").textContent = "осталось" } else if (next) { remaining = next.s - cur; ratio = 1; $("status").textContent = "Следующая"; $("countLabel").textContent = "до начала" } else { $("status").textContent = "Сегодня"; $("countLabel").textContent = "нет пары" } $("nextName").textContent = item ? item.x[1] : "Пар больше нет"; $("nextInfo").textContent = item ? `${item.x[0]} · ${item.x[2]} · ${item.x[3]} · ${item.x[4]}` : ""; let mm = Math.floor(remaining), ss = Math.floor((remaining - mm) * 60); $("countdown").textContent = remaining ? `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}` : "--:--"; $("ring").style.strokeDashoffset = 314 - 314 * Math.max(0, Math.min(1, ratio)) }
function clock() { let n = new Date(); $("clock").textContent = n.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }); $("date").textContent = n.toLocaleDateString("ru-RU", { weekday: "long", day: "numeric", month: "long" }); timer() }
function modal(id, open = true) { $(id).classList.toggle("open", open) }
function showScreen(id) { document.querySelectorAll(".screen").forEach(x => x.classList.toggle("active", x.id === id)); document.querySelectorAll(".nav").forEach(x => x.classList.toggle("active", x.dataset.screen === id)) }
function buildTheme() { $("themes").innerHTML = themes.map(t => `<button class="theme ${t[0] === theme ? "selected" : ""}" data-t="${t[0]}" style="background:${t[2]}">${t[1]}</button>`).join(""); document.querySelectorAll(".theme").forEach(x => x.onclick = () => { theme = x.dataset.t; apply(); buildTheme() }); $("cards").innerHTML = [["normal", "Обычные"], ["soft", "Мягкие"], ["glass", "Стеклянные"]].map(x => `<button class="card-style ${card === x[0] ? "selected" : ""}" data-c="${x[0]}">${x[1]}</button>`).join(""); document.querySelectorAll(".card-style").forEach(x => x.onclick = () => { card = x.dataset.c; apply(); buildTheme() }) }
function buildIcons() { $("iconGrid").innerHTML = logos.map((x, i) => `<button class="icon-choice"><img src="icons/${x}"><small>Вариант ${i + 1}</small></button>`).join("") }
function buildWeek() { $("weekList").innerHTML = days.map(d => `<section class="week-day"><h3>${names[d]}</h3>${schedule[d].map(x => `<div class="week-item"><b>${x[0]}</b>${x[1]}<span> · ${x[2]} · ${x[3]}</span></div>`).join("")}</section>`).join("") }
document.querySelectorAll(".nav").forEach(x => x.onclick = () => showScreen(x.dataset.screen)); $("settingsBtn").onclick = () => showScreen("settings");
document.querySelectorAll("[data-open]").forEach(x => x.onclick = () => modal(x.dataset.open));
document.querySelectorAll(".close").forEach(x => x.onclick = () => modal(x.closest(".modal").id, false));
document.querySelectorAll(".modal").forEach(x => x.onclick = e => { if (e.target === x) modal(x.id, false) });
$("weekBtn").onclick = () => { buildWeek(); modal("weekModal") };
$("notesText").value = localStorage.notes || ""; $("notesText").oninput = e => localStorage.notes = e.target.value;
$("addTask").onclick = () => { let t = prompt("Название задания:"); if (t) { let a = JSON.parse(localStorage.tasks || "[]"); a.push(t); localStorage.tasks = JSON.stringify(a); renderTasks() } };
function renderTasks() { let a = JSON.parse(localStorage.tasks || "[]"); $("taskList").innerHTML = a.map((x, i) => `<div class="task glass">${x}</div>`).join("") } renderTasks();
async function notify() { if (!("Notification" in window)) { alert("Уведомления не поддерживаются."); return false } let p = await Notification.requestPermission(); if (p !== "granted") { alert("Разрешение на уведомления не дано."); return false } if ("serviceWorker" in navigator) { let r = await navigator.serviceWorker.ready; await r.showNotification("My Schedule", { body: "Тестовое уведомление работает.", icon: "icons/icon-192.svg", badge: "icons/icon-192.svg" }) } return true }
$("testNotif").onclick = notify; $("notif").checked = localStorage.notif === "1"; $("notif15").checked = localStorage.notif15 !== "0"; $("notif5").checked = localStorage.notif5 !== "0"; $("notif").onchange = async e => { if (e.target.checked) await notify(); localStorage.notif = e.target.checked ? "1" : "0" }; $("notif15").onchange = e => localStorage.notif15 = e.target.checked ? "1" : "0"; $("notif5").onchange = e => localStorage.notif5 = e.target.checked ? "1" : "0";
buildTheme(); buildIcons(); buildWeek(); apply(); renderDays(); render(); clock(); setInterval(clock, 1000);
if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(console.error);
