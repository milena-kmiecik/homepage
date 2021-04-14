const firstName = `Milena`;
const age = 29;
console.log(`Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
);
const heading = document.querySelector('.main-heading--js');
heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`;
const emptyParagraph = document.querySelector('.article__descripion--js');
emptyParagraph.innerHTML = `Nawet uzupełniłam treść za pomocą javascriptu!`
let myNumber = 5
function calculate (myNumber) {
    console.log(`Dostałam ${myNumber}`);
    return myNumber*7;
}
const myResult = calculate (1);
console.log(myResult);
const myResult2 = calculate (5);
console.log(myResult2);
function greet(age,firstName){
    console.log(
        `Witaj drogi Odwiedzający, jestem ${firstName} i mam ${age} lat! Miło mi Cię gościć na mojej stronie`
    );
}
greet(age,firstName)

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent)
    element.innerHTML = content;
}
createContent('.article__descripion--js', 'Witaj świecie!');

function helloWorld() {
    console.log('Witaj świecie!')
}
helloWorld();
createContent('.article__title--js', 'Podmieniony tytuł!');
