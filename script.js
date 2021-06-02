class Media {
    constructor(title){
        this._title=title;
        this._isCheckedOut=false;
        this._rating=[];
    }
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get rating(){
        return this._rating;
    }

    getAverageRating(){
        let sum=0;
        let average=0;
        let i=0;
        for(i=0;i<this._rating.length;i++) {
            sum =sum+  this._rating[i];
        }
        average=sum/(this._rating.length);
        return average;

    }
    toggleCheckedOutStatus(bullean){
        this._isCheckedOut = bullean ;
    }
    addRating(number){
        this._rating.push(number);
        
    }

}

class Book extends Media {
    constructor(title,author,pages){
        super(title);
        this._author=author;
        this._pages=pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title,director,runTime){
        super(title);
        this._director=director;
        this._runTime=runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title,artist,songs){
        super(title);
        this._artist=artist;
        this._songs=songs;
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
}



const abbcc = new CD('I love you','Micheal Jackson',['First','Second','Third']);
abbcc.addRating(4);
abbcc.addRating(9);
abbcc.addRating(6);
abbcc.addRating(8);
abbcc.addRating(5);
abbcc.toggleCheckedOutStatus(true);

console.log(abbcc)
console.log(abbcc.rating);
console.log(abbcc.getAverageRating());
console.log(abbcc.rating.length);
