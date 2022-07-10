// TODO znaleść następujące elementy:
//  -inputy z czasem
//  -h3 z dany w czasie
// -p.last

// TŁumaczenia:
// -current obecnie
// -previous poprzednio
const time_input_daily = document.getElementById("daily");
const time_input_weekly = document.getElementById("weekly");
const time_input_monthly = document.getElementById("monthly");
console.log(time_input_monthly);
let mydata = [];
let work_current,
  play_current,
  study_current,
  exerice_current,
  social_current,
  care_current;
let work_previous,
  play_previous,
  stud_previousy,
  exerice_previous,
  social_previous,
  care_previous;
const ButtonOperationDaily = () => {
  for (let index = 0; index != mydata.length; index++) {
    let elements = mydata[index];
    console.log();
    if (elements.title == "Work") {
      let times = elements.timeframes.daily;
      work_current = times.current;
      work_previous = times.previous;
    } else if (elements.title == "Play") {
      let times = elements.timeframes.daily;
      play_current = times.current;
      play_previous = times.previous;
    } else if (elements.title == "Study") {
      let times = elements.timeframes.daily;
      study_current = times.current;
      study_previous = times.previous;
    } else if (elements.title == "Exercise") {
      let times = elements.timeframes.daily;
      exerice_current = times.current;
      exerice_previous = times.previous;
    } else if (elements.title == "Social") {
      let times = elements.timeframes.daily;
      social_current = times.current;
      social_previous = times.previous;
    } else if (elements.title == "Self Care") {
      let times = elements.timeframes.daily;
      care_current = times.current;
      care_previous = times.previous;
    }
  }
  render("day");
};
const ButtonOperationWeekly = () => {
  console.log("weekly");
};
const ButtonOperationMonthly = () => {
  console.log("onthly");
};
const readJSON = (namefile) => {
  fetch(namefile)
    .then((res) => res.json())
    .then((resultat) => saveToObj(resultat))
    .catch((error) => console.log(error));
};

const saveToObj = (res) => {
  for (let index = 0; index != res.length; index++) {
    mydata.push(res[index]);
  }
};

const render = (name) => {
  const timerwork = document.getElementsByClassName("timer_work")[0];
  const lastwork = document.getElementsByClassName("last_work")[0];
  const timerplay = document.getElementsByClassName("timer_play")[0];
  const lastplay = document.getElementsByClassName("last_play")[0];

  const timerstudy = document.getElementsByClassName("timer_study")[0];
  const laststudy = document.getElementsByClassName("last_study")[0];

  const timersocial = document.getElementsByClassName("timer_social")[0];
  const lastsocial = document.getElementsByClassName("last_social")[0];
  const timercare = document.getElementsByClassName("timer_care")[0];
  const lastcare = document.getElementsByClassName("last_care")[0];

  const timerexeriec = document.getElementsByClassName("timer_exericce")[0];
  const lastexeriec = document.getElementsByClassName("last_exericce")[0];

  timerwork.innerHTML = `${work_current}hrs`
  lastwork.innerHTML = `Last ${name} - ${work_previous}hrs`
  
  timerexeriec.innerHTML = `${exerice_current}hrs`
  lastexeriec.innerHTML = `Last ${name} - ${exerice_previous}hrs`

  timerplay.innerHTML = `${play_current}hrs`
  lastplay.innerHTML = `Last ${name} - ${play_previous}hrs`

  timerstudy.innerHTML = `${study_current}hrs`
  laststudy.innerHTML = `Last ${name} - ${study_previous}hrs`

  timersocial.innerHTML = `${social_current}hrs`
  lastsocial.innerHTML = `Last ${name} - ${social_previous}hrs`

  timercare.innerHTML = `${care_current}hrs`
  lastcare.innerHTML = `Last ${name} - ${care_previous}hrs`

};

readJSON("./data.json");
time_input_daily.addEventListener("click", ButtonOperationDaily);
time_input_weekly.addEventListener("click", ButtonOperationWeekly);
time_input_monthly.addEventListener("click", ButtonOperationMonthly);

// FIXME npawić coś z tym plikiem
