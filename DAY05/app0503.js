/* 
명명법
- 관습적으로 쓰기로 약속하였기 때문
- 회사, 프로젝트마다 상이할 수 있지만 일반적으로는 밑의 형식을 따름.

카멜(camel) : 소 - 대 - 소 ex) let coffeeType, makeCoffee(){}
                함수, 변수, 메소드
파스칼(pascal) : 대 - 대 - 소 ex) class UserInfo{}, function Person(){}
                생성자, 클래스
lower(전체소문자) : 전체를 소문자로 ex) let, const 예약어, 키워드
upper(전체대문자) : 전체를 대문자로 ex> const PI = 3.14; const PI = Math.PI;

*/


/* 
데이터 타입 분류

1) 기본타입(primitive type) : byte, short, int, float, long, double, char, String, boolean, null, undefined
2) 참조타입(reference type) : Object, primitive type이 아닌 것(객체 타입이라고도 함)

pass by value
assign by value
immutable

pass by reference
assign by reference
mutable
*/

// 기본타입 pass by value
// let a = 10;
// let b = a;
// b = 20;
// console.log(a, b);

// let list = [1, 2, 3, 4, 5];
// let list2 = list;
// console.log("list = ", list, "list2 = ", list2);
// list2[2] = 100;
// console.log("list = ", list, " list2 = ", list2); 

/* 
undefined 값이 나오는 경우

- 값을 아직 할당받지 못한 변수의 값
- 없는 객체의 프로퍼티를 읽으려고 시도했을 때의 값
- 없는 배열이 요소를 읽으려고 시도했을 때의 값
- 아무것도 반환하지 않는 함수가 반환하는 값
- 함수를 호출했을 때 전달받지 못한 인수의 값

*/

/* 
리터럴 객체의 프로퍼티 
*/

const coffee = {
    type : "아아",
    price : 4500
};

// console.log(coffee.type);
// console.log(coffee.syrup); //없는 속성값 undefined
// coffee.syrup = "설탕2개";
// console.log(coffee);
// console.log(coffee.syrup);

// delete coffee.price; // 프로퍼티 삭제
console.log(coffee);
// 해당 객체에 프로퍼티가 있는지 확인하는 연산자
console.log("price" in coffee);
console.log("type" in coffee);
// coffee 객체에는 없는 속성
// js 최상위 객체인 Object에 있는 속성도 사용가능하기 때문에 true를 반환
// js의 모든 객체는 Object를 상속받는다.
console.log("toString" in coffee);

// 템플릿 리터럴
//  ``(역따옴표)로 묶은 문자열을 말한다.
let strTemlplate = `오늘도 3시간 남았다`;
console.log(strTemlplate);
// 줄바꿈 표시
let strTemplate2 = `오늘도\n3시간 남았다`;
console.log(strTemplate2);

// 문자열 리터럴
let str = String.raw`오늘은 집에가면 잠을 잘 자겠죠?`;
// 문자열 인식이라 띄어쓰기 X
let str1 = String.raw`test test\ntest`;
console.log(str1);

// 보간 표현식
/* 
템플릿 리터럴 안에 플레이스홀더를 넣을 수 있다.
플레이스홀더는 ${...}로 표시가 된다.
플레이스홀더 : 실제 값을 나중에 넣기 위해 확보한 장소
${}를 활용하여 문자열 안에 변수나 표현식의 결과값을 삽입할 수 있다. 
*/

let a = 2, b = 3;
console.log(`${a} + ${b} = ${a + b}`);
console.log(a + " + " + b + " = " +(a+b));

let now = new Date();
console.log(`오늘은 ${now.getMonth() + 1}월 ${now.getDate()}일 입니다.`);

// const 사용방법
const people = {
    userName : "손흥민",
    age : 30
}
people.userName = "IU";
// const로 선언했는데 값이 바뀌는 이유는
// 다시 할당은 되지 않지만, 내용 수정은 가능

// 같은이름으로 할당하면 에러
// const people = {
//     userName2 : "블랙핑크",
//     age2 : 22
// }
console.log(people);


const list = [1, 2, 3, 4, 5]
console.log(list);
list[2] = 100;
console.log(list);