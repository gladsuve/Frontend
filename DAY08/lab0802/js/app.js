/**
 * 생성자 생성
 */

// const card = {};
// card.suit = "스페이드";
// card.rank = "A";
// console.log(card);

// function Card2(suit, rank){
//     this.suit = suit;
//     this.rank = rank;
// }
// const card2 = new Card2("다이아몬드", "A")
// console.log(card2);

// class Card3{
//     constructor(suit, rank){
//         this.suit = suit;
//         this.rank = rank;
//     }
// }
// const card3 = new Card3("클로버", "A");
// console.log(card3);

/**
 * typeof 연산자
 * -타입을 확인해서 데이터 타이을 텍스트형태로 알려줌
 * 객체 : object
 * string, number, boolean, fuction
 * symbol, undefined
//  */
// let s = "졸려,,,";
// console.log(typeof s);
// let s2 = new Array();
// console.log(typeof s2);
// let s3 = new Date();
// console.log(typeof s3);
// let s4 = 20;
// console.log(typeof s4);

/**
 * instanceof 연산자
 * instanceof 연산자는 지정한 객체의 프로토타입 체인에
 * 지정한 생성자의 프로토타입의 객체가 포함되어 있는지 확인
 * 
 */
// function Func(){};
// const obj = new Func();
// console.log(obj instanceof Func);
// console.log(obj instanceof Object);
// console.log(obj instanceof Date );
