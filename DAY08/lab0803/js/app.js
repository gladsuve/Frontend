/**
 * 예외처리
 * try - catch finally throw new
 */
/**
 * try {
 * 예외발생코드
 * } catch(exception){
 *  예외발생시 처리부분
 * } finally {
 *  try-catch가 다 실행된 후에 무조건 실행되는 부분
 * }
------------------------------------------------
여러개의 예외가 발생했을 때 처리방법
 * try {
 * 예외발생코드
 * } catch(exception){
 *      if(e instanceof TypeError){
 *          // TypeError 발생시 처리할 내용 작성
 *      }else if(e instnaceof ReferencError){
 *          // ReferencError 발생시 처리할 내용 작성    
 *      }else {
 *          // 그 외 예외처리
 *      }  
 * 
 * } finally {
 *  try-catch가 다 실행된 후에 무조건 실행되는 부분
 * }
 */


// function permutation(a){
//     try{
//     if(! (a instanceof Array)){
//         throw new Error(a + "in not an array");
//         }
//     } catch (e) {
//         console.log("배열 타입이 아닙니다." + e);
//     } finally {
//         console.log("여기는 반드시 실행되는 곳")
//     }
// }

// permutation("ABC");


// function permutation1(a){
//     if(! (a instanceof Array)){
//         throw new Error(a + "in not an array");
//         }
// }

// function showPrint(){
//     try {
//         permutation1("ABC");
//     } catch (e) {
//         console.log("배열이 아닙니다." + e);
//     }
// }

// showPrint();

/**
 * es6에서 추가된 String 관련 메소드
 */
// let str = "hello world~!^";
// let matchStr = "hello";

// // 시작이  matchStr와 같은 문자열이 있는가?
// console.log(str.startsWith(matchStr));
// // 끝이  matchStr와 같은 문자열이 있는가?
// console.log(str.endsWith(matchStr));
// // '^' 문자열이 포함되어 있는가?
// console.log("include set", str.includes("^"));

// early return, early exit
// function updateCheck(user){
//     // 게임을 사용하는 유저의 프로그램 버전이 3보다 작으면, 빠져나가게 한다.
//     if (user.version < 3) {
//         return;
//     }
//     return;
// }


/**
 * async await
 * async 함수는 es8에서 도입
 * async 함수는 함수 내부에 있는 await 구문과 함께 비동기 작업을 제어
 * await 키워드는 반드시 async 함수 내에서만 유효
 * 
 * async 함수 동작방식
 * - 처음 async 함수가 호출되어 await 키워드가 없는 비동기 작업이 실행되면
 * - 해당 비동기 함수는 이벤트 루프를 통해 비동기로 작업을 처리한다.
 * - 그동안 async 함수는 이러한 비동기 작업이 완료될 때까지 일시 중지상태로 해결을 기다린다.
 * - 이 작업이 완료되면 async 함수가 다시 실행되고 결과를 반환한다.
 * 
 *  async 함수를 선언하는 방법
 * - async 함수 선언문과 표현식이 있다.
 * - 이 선언문과 표현식은 함수에서 사용하는 것과 동일한다.
 * - 단 함수 앞에 async이 붙는다.
 */

// 비동기함수
// function doJob(name, person){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(person.stamina > 50){
//                 resolve({
//                     result: `${name} success`
//                 });
//             }else{
//                 reject(new Error(`${name} failed`))
//             }
//         }, 1000)
//     })
// }
// doJob("손흥민",{stamina:70});
// const jh = {stamina : 100}
// const execute = async function(){
//     let v = await doJob("work", {stamina:51});
//     console.log(v.result);
//     v= await doJob("study", jh);
//     console.log(v.result);
//     v= await doJob("work", jh);
//     console.log(v.result);
//     v= await doJob("study", jh);
//     console.log(v.result);
 
// }
// execute();