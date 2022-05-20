/**
 * closure(클로저)
 * -함수가 정의될 때의 렉시컬 함수를 기억하는 함수
 * -
 * 
 */

// function createCounterClosure(){
//     let count = 0;
//     return {
//         increase: function() {
//             count++
//         },
//         getCount: function() {
//             return count;
//         }
//     }
// }
// const count1 = createCounterClosure();
// const count2 = createCounterClosure();

// count1.increase();
// count1.increase();
// console.log("counter1의 값 : " + count1.getCount()); 
// count2.increase();
// console.log("counter2의 값 : " + count2.getCount()); 

// function generalFunc(){
// let count = 0;
// return count++;
// }

// console.log(generalFunc());
// console.log(generalFunc());

/**
 * Promise
 * -ES2015(es6)에서 비동기 처리를 위해 Promise 객체 소개
 * -Promise는 객체로서 언젠가 완료될 일을 나타낸다.
 * -완료되면 하나의 값을 결과로 반환
 * -성공값을 반환할 수도 있고(resolve), 실패한 값을 반환할 수도 있다(reject)
 * 
 * Promis 객체는 다음과 같은 3가지 상태를 가진다.
 * 1) 대기중(pendding) : 결과가 없는 상태, 약속을 했지만 약속에 대한 결과가 나오지 않은 상태
 * 2) 이행됨(fulfilled) : 비동기 처리가 성공적으로 안료되어 약속을 이행한 상태. 이 때 결과로 하나의 값이 전달
 * 3) 거부됨(rejected) : 비도기 처리가 실패한 상태. 약속이 거부되고 그 겨로가로 거절된 이유 전달
 */

/**
 * Promise 객체는 2가지 메소드를 가진다.
 * 1) then(onFulFilled, onReject)
 *  - 약속이 완료됐을 때 호출될 함수를 정의
 *  - 이 때 첫 번째인자로 전달되는 함수는 약속이 성공적으로 이행되었을 때 호출
 *  - 두 번째 인자로 전달된 함수는 거부됐을 때 호출
 *  - 두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달
 * 2) catch(onReject)
 *  - 약속이 거부됐을 때 호출될 함수를 등록!
 * 
 */

// function promiseForHomework(mustDo) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("doing homework!");
//             if(mustDo){
//                 resolve({
//                     result: "homework-result"
//                 });
//             } else {
//                 reject(new Error("Too lazy"));
//             }
//         }, 3000);
//     });
// }
// const promiseA = promiseForHomework(true);
// console.log("promiseA 출력완료!")

// const promiseB = promiseForHomework();
// console.log("promiseB 출력완료!")

// promiseA.then(v => console.log(v));

// promiseB
//     .then(v => console.log(v))
//     .catch(e => console.error(e));


const getHen = () => new Promise((resolve, reject) => {
    setTimeout(()=>resolve("암탉"), 1000);
});

// const getEgg = (hen) => new Promise((resolve, reject) => {
//     setTimeout(()=>resolve(`${hen} => 달걀`), 1000);
// });
const getEgg = (hen) => new Promise((resolve, reject) => {
    setTimeout(()=>reject(new Error (`${hen} => 달걀`)), 1000);
});

const cook = (egg) => new Promise((resolve,reject)=> {
    setTimeout(()=> resolve(`${egg} => 계란후라이`), 1000);
});

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));

// getHen()
//     .then(getEgg)
//     .then(cook)
//     .then(console.log);

getHen()
    .then(getEgg)
    .catch(error =>{
        return "빵";
    })
    .then(cook)
    .then(console.log)