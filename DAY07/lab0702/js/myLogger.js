// log 함수를 다른 곳에서도 사용하기 위해 export사용

export function log(data){
    console.log(data);
}

export const getTime = () => {
    return Date.now();
}

export const getCurrentHour = () => {
    return (new Date).getHours();
}

// class
export class myLogger2{
    constructor(props){
        this.lectures = ["jsp", "html5", "css3"]
    }
    getLectures(){
        return this.lectures;
    }
    getTime(){
        return Date.now();
    }
}