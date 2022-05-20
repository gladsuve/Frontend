// log 함수를 다른 곳에서도 사용하기 위해 export사용
// const와 export default를 동시에 사용하면 오류 발생
// const util = {}; 만든 후에
// 맨 마지막에 export default를 해준다.

const util = {
    log(data){
        console.log(data);
    }
}

export default util;