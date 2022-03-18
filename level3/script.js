const view = document.querySelector(".calculator-view");
const result = document.querySelector(".calculator-result");
const backlogDom = document.getElementById("backlog-list");
const DOT = ".";
const C = "C";
const EQUAL = "=";
const ABS = "±";
const SQUARE = "√";
const KEY_STORAGE = "docs";

const operator = {
  plus: "+",
  percent: "%",
  sub: "-",
  mul: "x",
  div: "/",
};

let arg1 = "";
let arg2 = "";
let t = "";
let txtResult = "Ans = ";
let disabled = false;

function onClickKeyboard(value) {
  if (value === C) {
    handleClear();
    disabled = false;
    return;
  } else if (disabled) {
    return;
  } else if (value === EQUAL) {
    calculator();
    disabled = true;
    return;
  } else if (Object.values(operator).includes(value)) {
    t = value;
  } else if (arg1 && t) {
    if (isLimitDot(arg2, value)) {
      return;
    }

    if (value === SQUARE) {
      arg2 = handleSquare(arg2);
    } else if (value === ABS) {
      arg2 = handleAbs(arg2);
    } else {
      arg2 += value;
    }
  } else {
    if (isLimitDot(arg1, value)) {
      return;
    }

    if (value === SQUARE) {
      arg1 = handleSquare(arg1);
    } else if (value === ABS) {
      arg1 = handleAbs(arg1);
    } else {
      arg1 += value;
    }
  }

  view.innerHTML = `${arg1} ${t} ${arg2}`;
}

function handleClear() {
  view.innerHTML = "";
  result.innerHTML = "";
  arg1 = "";
  arg2 = "";
  t = "";
}

function calculator() {
  let temp = 0;
  let num1 = Number(arg1);
  let num2 = Number(arg2);
  if (t === operator.plus) {
    temp = num1 + num2;
  } else if (t === operator.sub) {
    temp = num1 - num2;
  } else if (t === operator.mul) {
    temp = num1 * num2;
  } else if (t === operator.div) {
    temp = num1 / num2;
  } else if (t === operator.percent) {
    temp = num1 % num2;
  }
  let maths = `${arg1} ${t} ${arg2}`;
  let output = txtResult + temp;
  result.innerHTML = output;
  saveBackLog(maths, output);
  createRecordBacklog({ maths, result: output });
}

function isLimitDot(original, value) {
  return String(original).includes(DOT) && value === DOT;
}

function handleSquare(value) {
  return Math.sqrt(value);
}

function handleAbs(value) {
  return Math.abs(value);
}

function saveBackLog(maths, result) {
  const backlogs = localStorage.getItem(KEY_STORAGE);
  if (backlogs) {
    const parseBacklogs = JSON.parse(backlogs);
    parseBacklogs.push({ maths, result });
    localStorage.setItem(KEY_STORAGE, JSON.stringify(parseBacklogs));
  } else {
    const init = [{ maths, result }];
    localStorage.setItem(KEY_STORAGE, JSON.stringify(init));
  }
}

function getBacklogs() {
  return JSON.parse(localStorage.getItem(KEY_STORAGE)) || [];
}

function loadFistBacklogToDom() {
  const backlogs = getBacklogs();
  backlogs.forEach((el) => {
    createRecordBacklog(el);
  });
}

function createRecordBacklog(el) {
  const li = document.createElement("li");
  const sp = document.createElement("span");
  const st = document.createElement("strong");
  sp.innerHTML = "Maths : " + el.maths;
  st.innerHTML = "Result : " + el.result;
  li.appendChild(sp);
  li.appendChild(st);

  backlogDom.appendChild(li);
}

loadFistBacklogToDom();

function resetBacklogs() {
  localStorage.removeItem(KEY_STORAGE);
  window.location.reload();
}
