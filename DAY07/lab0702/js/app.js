import {log,getTime,getCurrentHour, myLogger2} from './myLogger.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello world</p>`;
log("내가 만든 데이터");

log(getTime());
log(getCurrentHour());
log(` getTime is ${getTime()}`);
log(`current hour ${getCurrentHour()}`);

const logger = new myLogger2();
log(`lecture of Poly are ${logger.getLectures()}`);