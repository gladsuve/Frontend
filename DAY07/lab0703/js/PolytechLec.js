// class
export default class PolytechLec{
    constructor(props){
        this.lectures = ["jsp", "html5", "css3"]
    }
    getLectures(){
        return this.lectures;
    }
    getTime(){
        return Date.now();
    }
    getCurrentHour(){
        return (new Date).getHours();
    }
}