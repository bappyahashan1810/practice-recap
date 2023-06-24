const Object = {
    name: 'Ahashan Habib bappy',
    play: false,
    money: 20000,
    teachingMethod() {
        return this.money;
    },
    subject: ['networking', 'java', 'c++'],
    likefood: {
        homeIteam: 'biriyani',
        resturantIteam: 'pizza',
        drinks: 'coke'
    }

}

console.log(Object.teachingMethod());
console.log(Object.subject[2]);
console.log(Object.likefood.resturantIteam);

const buyitem = (number) => (number / 17).toFixed(2);
const results = buyitem(25);
console.log(results);

const twoperameter = (one, two) => (one + 5 + two + 7) % 2 === 0 ? true : false;
const getvalue = twoperameter(20, 11);
console.log(getvalue);



const squareValue = (arrayvalue) => {
    const getSquare = arrayvalue.reduce((previous, current) => previous + current, 0);
    return Math.pow(getSquare, 2);
}
const arrayvalue = [20, 12, 10, 7, 45];
const getSquareValue = squareValue(arrayvalue);
console.log(getSquareValue);

const arrayrsult = arrayvalue.map(x => x / 7);
console.log(arrayrsult);

delete Object.play;
console.log(Object);

