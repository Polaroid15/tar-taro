"use strict";

/* ============ Колода: 22 старших аркана (шуточные) ============ */
const CARDS = [
  { name:"Шут", emoji:"🃏", up:"Новая жизнь начинается… опять. Но эта — точно последняя, честно-честно.", rev:"Прыгать в авантюру с головой не стоит: голова ещё пригодится для извинений.", yes:true },
  { name:"Маг", emoji:"🎩", up:"Все инструменты для успеха у тебя уже есть. Особенно сериалы и отговорки.", rev:"Фокус не удался. Кролик в шляпе оказался тобой.", yes:true },
  { name:"Жрица", emoji:"🌙", up:"Ответ внутри тебя. Тот самый, который ты не хочешь слышать. Ну, ты понял.", rev:"Интуиция ушла на обед. Решай монеткой — она хотя бы честная.", yes:true },
  { name:"Императрица", emoji:"👑", up:"Расцвет и изобилие. В основном в холодильнике, но и на работе повезёт.", rev:"Ты заглянул в холодильник без причины. Третий раз подряд. Это творческий поиск.", yes:true },
  { name:"Император", emoji:"🏰", up:"Всё под контролем. Даже список дел, который ты составил вместо самих дел.", rev:"Внутренний взрослый в отпуске. Внутренний ребёнок уже ест мороженое на завтрак.", yes:true },
  { name:"Иерофант", emoji:"📜", up:"Учись у мудрых. Или хотя бы загугли, прежде чем спрашивать в общем чате.", rev:"Уверенность — это хорошо, но Issues на GitHub существуют не просто так.", yes:true },
  { name:"Влюблённые", emoji:"💞", up:"Тебе предстоит важный выбор. Спойлер: выбрать всё равно не дадут.", rev:"Любовь приходит и уходит, а кушать хочется всегда. Даже когда не идёт.", yes:true },
  { name:"Колесница", emoji:"🛒", up:"Победа близко! Если это тележка — то уже у кассы. Держись.", rev:"Ты разогнался, но забыл, куда ехал. Классика.", yes:true },
  { name:"Сила", emoji:"🦁", up:"Настоящая сила — в мягкости. Коты владеют этим искусством тысячелетиями.", rev:"Сдерживаться уже не получается. Злиться на уведомления — это нормально.", yes:false },
  { name:"Отшельник", emoji:"🔦", up:"Одиночество — твоя суперсила. Люди подождут, сериал — нет.", rev:"Пора выйти к людям. Они, конечно, не просили, но вдруг.", yes:false },
  { name:"Колесо Фортуны", emoji:"🎡", up:"Всё меняется: погода, планы, настроение. Кроме зарплаты.", rev:"Колесо крутится не туда. Держись за что-нибудь тяжёлое. Например, за кота.", yes:true },
  { name:"Справедливость", emoji:"⚖️", up:"Всё по заслугам. Карма работает без выходных, но с перерывом на обед.", rev:"Ты был уверен, что прав. Карты вежливо сообщили: почти.", yes:false },
  { name:"Повешенный", emoji:"🙃", up:"Посмотри на ситуацию под другим углом. Желательно лёжа. Диван прилагается.", rev:"Висеть в неопределённости надоело? А кому сейчас легко.", yes:false },
  { name:"Смерть", emoji:"💀", up:"Не паникуй. Это просто конец… серии. Следующая — с новым сюжетом и бюджетом.", rev:"Старое не отпускает. Оно, кажется, уже и само не радо.", yes:true },
  { name:"Умеренность", emoji:"🍵", up:"Баланс во всём: между «ещё пять минуточек» и «опять опоздал».", rev:"Умеренность умерла. Забалансируйся хотя бы к четвергу.", yes:true },
  { name:"Дьявол", emoji:"🍩", up:"Соблазн рядом. Один из них прямо сейчас смотрит на тебя из холодильника.", rev:"Ты победил соблазн! А соблазн сделал вид, что так и было.", yes:false },
  { name:"Башня", emoji:"🏗️", up:"Планы рухнули. Зато освободилось место — строй новые. Или хотя бы смешнее.", rev:"Обрушение отменяется по техническим причинам. Всё ещё держится, вот чудеса.", yes:false },
  { name:"Звезда", emoji:"⭐", up:"Желание исполнится. Доставка как у маркетплейса: когда-нибудь и не совсем то.", rev:"Вера в лучшее слегка поцарапана, но на ходу.", yes:true },
  { name:"Луна", emoji:"🌕", up:"Всё не то, чем кажется. Особенно сообщения в три часа ночи.", rev:"Туман рассеивается. Оказалось, под ним был ещё туман.", yes:false },
  { name:"Солнце", emoji:"☀️", up:"Всё будет хорошо. Эта карта редко ошибается, а троллит только наполовину.", rev:"Солнце зашло за облако. Это не конец света, это просто погода.", yes:true },
  { name:"Суд", emoji:"📣", up:"Второй шанс! Вчерашний дедлайн вернулся. Но теперь-то ты мудрее.", rev:"Перезагрузка откладывается. Наслаждайся старой версией себя.", yes:true },
  { name:"Мир", emoji:"🌍", up:"Цикл завершён. Можно гордиться собой. Можно даже лёжа.", rev:"Финал слегка затянулся, как последний сезон любимого сериала.", yes:true },
];

/* ============ Расклады ============ */
const SPREADS = [
  {
    id:"daily",
    icon:"☀️",
    title:"Карта дня",
    desc:"Одна карта — и весь день объяснён.",
    count:1,
    positions:["Карта дня"],
  },
  {
    id:"classic",
    icon:"⏳",
    title:"Было — есть — будет",
    desc:"Классика жанра, но с последствиями.",
    count:3,
    positions:["Прошлое", "Настоящее", "Будущее"],
  },
  {
    id:"money",
    icon:"💸",
    title:"Финансовый прогноз",
    desc:"Без аналитики, зато с магией и кэшбэком.",
    count:3,
    positions:["Кошелёк", "Карма", "Кэшбэк"],
  },
  {
    id:"yesno",
    icon:"🎯",
    title:"Да или нет",
    desc:"Один вопрос — один вердикт. Без права на апелляцию.",
    count:1,
    positions:["Вердикт"],
    yesno:true,
  },
];

const VERDICTS = [
  "Вселенная подмигнула. Что это значит — уточнять не стала.",
  "Звёзды сошлись. Не в твою пользу, зато красиво.",
  "Судьба улыбается. Возможно, она просто вежливая.",
  "Карты в шоке, но в целом одобряют.",
  "Космос взял паузу подумать. Ответ — после рекламной паузы.",
  "Удача уже на подходе. Она в пробке, но мигает поворотником.",
  "Карта говорит «да», кошелёк говорит «посмотрим».",
  "Вселенная рекомендует не принимать всё близко к сердцу. Особенно это.",
];

const ZODIAC_EMOJI = {
  "Овен":"♈","Телец":"♉","Близнецы":"♊","Рак":"♋","Лев":"♌","Дева":"♍",
  "Весы":"♎","Скорпион":"♏","Стрелец":"♐","Козерог":"♑","Водолей":"♒","Рыбы":"♓",
};
const ZODIAC_ADVICE = {
  "Овен":"Овнам звёзды советуют считать до десяти. Хотя бы до пяти.",
  "Телец":"Тельцам сегодня везёт на вкусное. Проверь — вдруг счастье в холодильнике.",
  "Близнецы":"Близнецы могут всё. Главное — решить, которое из «я» этим займётся.",
  "Рак":"Ракам пора в панцирь: там уютно и Wi-Fi ловит.",
  "Лев":"Львам рекомендуют сиять. Побочный эффект — окружающие слепнут от зависти.",
  "Дева":"Девам звёзды шепчут: план неплох, но список дел уже смеётся.",
  "Весы":"Весам стоит выбрать что-то одно. Или ничего — это тоже вариант.",
  "Скорпион":"Скорпионам всё можно. Но не всем об этом рассказывай.",
  "Стрелец":"Стрельцам лучше целиться, а не разговаривать. Но кто ж удержится.",
  "Козерог":"Козерогам — терпения. Его у тебя и так склад, но запас не помешает.",
  "Водолей":"Водолеям зелёный свет. Идеи по спасению мира подождут до пятницы.",
  "Рыбы":"Рыбам — плыть по течению. Течение, как обычно, знает лучше.",
};
const ZODIAC_SIGNS = Object.keys(ZODIAC_ADVICE);

/* ============ localStorage ============ */
const K_NAME = "tarotjoke.name";
const K_ZODIAC = "tarotjoke.zodiac";
const K_HISTORY = "tarotjoke.history";
const HISTORY_LIMIT = 50;

const store = {
  get(key, fallback){
    try{
      const v = localStorage.getItem(key);
      return v === null ? fallback : JSON.parse(v);
    }catch{
      return fallback;
    }
  },
  set(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); }catch{}
  },
  del(key){
    try{ localStorage.removeItem(key); }catch{}
  },
};

/* ============ Утилиты ============ */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const rnd = arr => arr[Math.floor(Math.random() * arr.length)];

function shuffle(a){
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function fmtDate(ts){
  return new Intl.DateTimeFormat("ru-RU", { day:"numeric", month:"long", hour:"2-digit", minute:"2-digit" }).format(new Date(ts));
}
function plural(n, one, few, many){
  const m10 = n % 10, m100 = n % 100;
  if(m10 === 1 && m100 !== 11) return one;
  if(m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}
function getHistory(){
  const h = store.get(K_HISTORY, []);
  return Array.isArray(h) ? h : [];
}

let toastTimer = null;
function toast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ============ Состояние сеанса ============ */
let currentSpread = null;
let deck = [];
let picked = [];

/* ============ Экраны и навигация ============ */
function showScreen(id){
  $$(".screen").forEach(s => s.classList.toggle("active", s.id === "screen-" + id));
  $$(".nav-btn[data-nav]").forEach(b => b.classList.toggle("active", b.dataset.nav === id));
  if(id === "home") renderProfile();
  if(id === "history") renderHistory();
  window.scrollTo({ top:0, behavior:"smooth" });
}

/* ============ Профиль ============ */
function renderProfile(){
  const box = $("#profileBox");
  const name = store.get(K_NAME, "");
  const zodiac = store.get(K_ZODIAC, "");

  if(!name){
    box.innerHTML = `
      <form id="profileForm" class="profile-form">
        <input class="input" id="nameInput" maxlength="24" placeholder="Как тебя зовут, смертный?" required>
        <select class="input" id="zodiacSelect">
          <option value="">Знак зодиака (по желанию)</option>
          ${ZODIAC_SIGNS.map(z => `<option ${z === zodiac ? "selected" : ""}>${z}</option>`).join("")}
        </select>
        <button class="btn" type="submit">Запомнить</button>
      </form>
      <p class="muted small">Имя и знак сохранятся в этом браузере (localStorage). Серверу ничего не уйдёт — его тут нет.</p>`;
    $("#profileForm").addEventListener("submit", e => {
      e.preventDefault();
      const n = $("#nameInput").value.trim();
      store.set(K_NAME, n);
      store.set(K_ZODIAC, $("#zodiacSelect").value);
      renderProfile();
      toast(`Привет, ${n}! Карты уже хихикают.`);
    });
    return;
  }

  const hist = getHistory();
  box.innerHTML = `
    <div class="greeting">
      <p>Привет, <b>${esc(name)}</b>${zodiac ? ` · <span class="zodiac">${ZODIAC_EMOJI[zodiac] || ""} ${esc(zodiac)}</span>` : ""}!</p>
      <p class="muted small">Сеансов гадания: <b>${hist.length}</b> · <button class="link" id="btnRename">сменить</button></p>
    </div>`;
  $("#btnRename").addEventListener("click", () => {
    store.del(K_NAME);
    renderProfile();
  });
}

/* ============ Выбор расклада ============ */
function renderSpreads(){
  $("#spreadList").innerHTML = SPREADS.map(s => `
    <button class="spread-card" data-id="${s.id}">
      <span class="sc-icon">${s.icon}</span>
      <span class="sc-title">${s.title}</span>
      <span class="sc-desc">${s.desc}</span>
      <span class="sc-count">${s.count} ${plural(s.count, "карта", "карты", "карт")}</span>
    </button>`).join("");
  $$(".spread-card").forEach(c => c.addEventListener("click", () => openReading(c.dataset.id)));
}

/* ============ Сеанс гадания ============ */
function openReading(id){
  currentSpread = SPREADS.find(s => s.id === id);
  picked = [];
  deck = shuffle([...CARDS]);
  $("#rIcon").textContent = currentSpread.icon;
  $("#rTitle").textContent = currentSpread.title;
  $("#rDesc").textContent = currentSpread.desc;
  $("#question").value = "";
  $("#resultZone").classList.add("hidden");
  $("#resultZone").innerHTML = "";
  $("#pickZone").classList.remove("hidden");
  renderDeck();
  updatePickUI();
  showScreen("reading");
}

function renderDeck(){
  const el = $("#deck");
  el.innerHTML = deck.map((c, i) =>
    `<button class="deck-card" data-i="${i}" style="--r:${(Math.random() * 6 - 3).toFixed(1)}deg" aria-label="Закрытая карта ${i + 1}"><span>🔮</span></button>`
  ).join("");
  el.classList.add("shuffling");
  setTimeout(() => el.classList.remove("shuffling"), 700);
  el.querySelectorAll(".deck-card").forEach(b => b.addEventListener("click", () => togglePick(b)));
}

function togglePick(btn){
  const i = +btn.dataset.i;
  const at = picked.indexOf(i);
  if(at >= 0){
    picked.splice(at, 1);
    btn.classList.remove("selected");
  }else if(picked.length < currentSpread.count){
    picked.push(i);
    btn.classList.add("selected");
    if(picked.length === currentSpread.count) toast("Судьба выбрана. Раскрывай!");
  }else{
    toast(`Нужно карт: ${currentSpread.count}. Хватит жадничать.`);
  }
  updatePickUI();
}

function updatePickUI(){
  const need = currentSpread.count, have = picked.length;
  $("#pickStatus").textContent = `Выбрано ${have} из ${need} — ${have < need ? "щёлкай по закрытым картам" : "готово к раскрытию!"}`;
  $("#btnReveal").disabled = have !== need;
}

function reveal(){
  if(picked.length !== currentSpread.count) return;

  const question = $("#question").value.trim();
  const items = picked.map((deckIdx, k) => {
    const card = deck[deckIdx];
    const rev = Math.random() < 0.3;
    return {
      pos: currentSpread.positions[k],
      name: card.name,
      emoji: card.emoji,
      rev,
      text: rev ? card.rev : card.up,
    };
  });

  let verdict;
  if(currentSpread.yesno){
    const base = deck[picked[0]];
    const answerYes = items[0].rev ? !base.yes : base.yes;
    verdict = answerYes
      ? "ВЕРДИКТ: <b>ДА</b> ✅<br><span class=\"small\">Карты единогласны. Ну, почти.</span>"
      : "ВЕРДИКТ: <b>НЕТ</b> ⛔<br><span class=\"small\">Карты против. Но они сегодня не в духе, так что не принимай близко к сердцу.</span>";
  }else{
    verdict = rnd(VERDICTS);
  }

  const zodiac = store.get(K_ZODIAC, "");
  const zodiacLine = zodiac && ZODIAC_ADVICE[zodiac] ? `${ZODIAC_EMOJI[zodiac] || ""} ${zodiac}: ${ZODIAC_ADVICE[zodiac]}` : null;

  const reading = {
    id: Date.now() + "-" + Math.floor(Math.random() * 1e5),
    ts: Date.now(),
    spreadId: currentSpread.id,
    spreadTitle: currentSpread.title,
    icon: currentSpread.icon,
    question,
    yesno: !!currentSpread.yesno,
    items,
    verdict,
    zodiacLine,
  };

  const hist = getHistory();
  hist.unshift(reading);
  store.set(K_HISTORY, hist.slice(0, HISTORY_LIMIT));

  renderResult(reading);
  toast("Расклад сохранён в историю 📜");
}

function renderResult(reading){
  const zone = $("#resultZone");
  $("#pickZone").classList.add("hidden");
  zone.classList.remove("hidden");
  zone.innerHTML = `
    ${reading.question ? `<p class="question-line">❓ ${esc(reading.question)}</p>` : ""}
    <div class="result-grid">
      ${reading.items.map((it, k) => `
        <div class="result-card" style="--d:${k * 180}ms">
          <div class="pos">${k + 1}. ${it.pos}</div>
          <div class="emoji ${it.rev ? "flipped" : ""}">${it.emoji}</div>
          <div class="rname">${it.name}${it.rev ? '<span class="rev-badge">перевёрнута</span>' : ""}</div>
          <p class="rtext">${it.text}</p>
        </div>`).join("")}
    </div>
    <div class="verdict">
      <div class="v-title">${reading.yesno ? "🎯 Итог гадания" : "🪄 Итог расклада"}</div>
      <p>${reading.verdict}</p>
      ${reading.zodiacLine ? `<p class="zodiac-line">✨ ${esc(reading.zodiacLine)}</p>` : ""}
    </div>
    <div class="result-actions">
      <button class="btn" id="btnAgain">🔁 Ещё раз</button>
      <button class="btn btn-ghost" id="btnCopy">📋 Скопировать</button>
      <button class="btn btn-ghost" id="btnToHistory">📜 История</button>
    </div>`;
  $("#btnAgain").addEventListener("click", () => openReading(reading.spreadId));
  $("#btnCopy").addEventListener("click", () => copyReading(reading));
  $("#btnToHistory").addEventListener("click", () => showScreen("history"));
  zone.scrollIntoView({ behavior:"smooth", block:"start" });
}

function buildShareText(r){
  const lines = [];
  lines.push(`🔮 ТАР-ТАРО — ${r.spreadTitle}`);
  if(r.question) lines.push(`Вопрос: ${r.question}`);
  r.items.forEach((it, k) => lines.push(`${k + 1}. ${it.pos} — ${it.name}${it.rev ? " (перевёрнута)" : ""}: ${it.text}`));
  lines.push("Итог: " + r.verdict.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
  if(r.zodiacLine) lines.push(`✨ ${r.zodiacLine}`);
  return lines.join("\n");
}

async function copyReading(r){
  const text = buildShareText(r);
  try{
    await navigator.clipboard.writeText(text);
    toast("Скопировано в буфер 📋");
  }catch{
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try{
      document.execCommand("copy");
      toast("Скопировано в буфер 📋");
    }catch{
      toast("Не вышло скопировать — выдели текст вручную");
    }
    ta.remove();
  }
}

/* ============ История ============ */
function renderHistory(){
  const hist = getHistory();
  const list = $("#historyList");
  $("#historyStats").textContent = hist.length
    ? `Всего сеансов: ${hist.length}. Хранится максимум ${HISTORY_LIMIT} последних.`
    : "";
  if(!hist.length){
    list.innerHTML = `<div class="empty">Пока пусто. Карты скучают — самое время погадать 🎴</div>`;
    return;
  }
  list.innerHTML = hist.map(r => `
    <div class="history-item">
      <div class="hi-head">
        <span class="hi-icon">${r.icon}</span>
        <b>${esc(r.spreadTitle)}</b>
        <span class="hi-date">${fmtDate(r.ts)}</span>
        <button class="icon-btn del" data-id="${r.id}" title="Удалить">✕</button>
      </div>
      ${r.question ? `<div class="hi-q">❓ ${esc(r.question)}</div>` : ""}
      <div class="hi-cards">${r.items.map(it => `<span class="chip">${it.emoji} ${it.name}${it.rev ? " ⇅" : ""}</span>`).join("")}</div>
      <div class="hi-verdict">${r.verdict}</div>
      ${r.zodiacLine ? `<div class="zodiac-line">✨ ${esc(r.zodiacLine)}</div>` : ""}
    </div>`).join("");
  list.querySelectorAll(".del").forEach(b => b.addEventListener("click", () => {
    store.set(K_HISTORY, getHistory().filter(x => x.id !== b.dataset.id));
    renderHistory();
    renderProfile();
    toast("Удалено");
  }));
}

/* ============ Старт ============ */
function init(){
  renderProfile();
  renderSpreads();

  $$(".nav-btn[data-nav], button[data-nav]").forEach(b =>
    b.addEventListener("click", () => showScreen(b.dataset.nav)));

  $("#btnReveal").addEventListener("click", reveal);

  $("#btnEditProfile").addEventListener("click", () => {
    store.del(K_NAME);
    showScreen("home");
    toast("Введи новое имя — карты забудут старое");
  });

  $("#btnClearHistory").addEventListener("click", () => {
    if(!getHistory().length){ toast("История и так пуста"); return; }
    if(confirm("Удалить всю историю гаданий? Отменить будет нельзя.")){
      store.set(K_HISTORY, []);
      renderHistory();
      renderProfile();
      toast("История очищена");
    }
  });

  showScreen("home");
}

document.addEventListener("DOMContentLoaded", init);
