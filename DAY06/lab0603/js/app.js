// arrow function(화살표 함수)
// Browser에서 테스트 할 수 있는 API이다. 
// setTimeout(function(){
//     console.log("화살표 함수입니다.");
// }, 2000);

// 이렇게 작성을하면 function을 만들어야 하기 때문에 간단히 작성해보자
// setTimeout(()=>{
//     console.log("화살표");
// },1000);

// const simpleFunc = function(){
//     console.log('simple function');
// }
// simpleFunc();

// const simpleFunc2 = () => console.log("simple2");
// simpleFunc2();

// 화살표 함수는 anonymous 함수
// arguement가 없는 화살표 함수
// const simpleFunc2 = () => console.log("simple2")
// simpleFunc2();

// arguement가 있는 화살표 함수
// const add = (a, b) => a + b;
// console.log(add(1, 2));
// const add1 = function(a,b){
// return a+b;
// }

// default paramete(디폴트 파라미터)
// es6추가
// function showMessage(message, )

// es6이전코드
// function showMessage2(message, )






// IF문
/**
 * if(조건식){
 *      조건식이 참일경우 실행되는 부분
 * }
 * 조건식이 거짓일경우 실행되는 부분
 * 
 * if(조건식){
 *      조건식이 참일경우 실행되는 부분
 * }else{
 *      조건식이 거짓일경우 실행되는 부분
 * 
 * if(조건식){
 *      조건식A가 참일경우 실행되는 부분
 * }else if{
 *      조건식B가 거짓일경우 실행되는 부분
 * } else {
 *      조건식A,B 둘다 거짓일경우 실행되는 부분
 * }
 */

// FOR문
/**
 * 기준값 존재, 일정한 증감값이 있을 경우
 * for(let j=length;j>0;j--) {}
 * 
 */






// function printArr(...args){
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
        
//     }
// }
// printArr('jsp','java','css');
function printArr(...args){
    for (const arg of args) {
        console.log(arg);
        
    }
}
printArr('jsp','java','css');