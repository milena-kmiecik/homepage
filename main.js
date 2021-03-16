const firstName = `Milena`;
const age = 29;
console.log(`Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
);
const heading = document.querySelector('.main-heading--js');
heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`;
const emptyParagraph = document.querySelector('.article__descripion--js');
emptyParagraph.innerHTML = `Nawet uzupełniłam treść za pomocą javascriptu!`