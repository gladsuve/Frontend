/**
 * 
 * People
 * this.name 프로퍼티를 갖게 된다.
 * this.age 프로퍼티를 갖게 된다.
 * this 상황에따라 가리키는 범위가 달라진다.
 * 지금 현재 실행되는 영역의 바로 바깥을 가리킨다.
 * 
 */
// class People{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     show(){
//         console.log(`${this.name}은 ${this.age}살 입니다.`);
//     }
// }

// const people = new People("박지훈", 30);
// people.show();

// 간단한 객체 생성
// const name = "IU";
// const age = 30;

// 간단하게 객체를 생성하면 값을 설정할 수 있다.
// const obj = {
//     name:name,
//     age:age
// }

// function getObj(){
//     const name2="손흥민";
//     const getName2 = function(){
//         return name2;
//     }
//     const setName = function(newName){
//         name2 = newName;
//     }
//     const printName = function(){
//         console,log(name2);
//     }
//     return {
//         getName2,
//         setName
//     }
// }
// let obj2 = getObj();
// console.log(obj2);

// console.log();
// console.log(obj2.getName2());

// const obj3 = getObj();
// console.log(obj3);

type = "라떼";
price = 5000;

const obj = {
    type:type,
    price:price
}
console.log(obj.type);

class Coffee {
    constructor(_type, price){
        this.type = _type;
        this.price = price;
    }
    get type(){
        return this._type;
    }
    set type(value){
        this._type = value;
    }
}
const coffee = new Coffee("아아", 4500);
console.log(coffee);