import PolytechLec from './PolytechLec.js';
import util from './utility.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello world</p>`;
// log("내가 만든 데이터");

// log(getTime());
// log(getCurrentHour());
// log(` getTime is ${getTime()}`);
// log(`current hour ${getCurrentHour()}`);

// const logger = new myLogger2();
// log(`lecture of Poly are ${logger.getLectures()}`);

const pt = new PolytechLec();
util.log(`current hour is ${pt.getCurrentHour()}`)
util.log(`lectures of Polytech are ${pt.getLectures()}`)
util.log(`Time is ${pt.getTime()}`)