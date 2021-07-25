// Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let textFromP = document.getElementById('content');
console.log(textFromP);

// -- отримує текст з блоку з id "rules"

let textFromRules = document.getElementById('rules');
console.log(textFromRules);

// -- замініть текст параграфа з id 'content' на будь-який інший

textFromP.innerHTML = 'Illusion, a misrepresentation of a “real” sensory stimulus—that is, an interpretation that contradicts objective “reality” as defined by general agreement.'


// -- замініть текст параграфа з id 'rules' на будь-який інший

textFromRules.innerHTML = 'An optical illusion is something that tricks your eyes so that what you think you see is different from what is really there. Sloping walls on the bulk of the building create an optical illusion.'

// -- змініть кожному елементу колір фону на червоний

let color = document.getElementById('main_color');
color.style.backgroundColor = 'lightcoral';

textFromRules.style.backgroundColor = 'lightcoral';

textFromP.style.backgroundColor = 'lightcoral';

// document.body.style.backgroundColor = 'red';


// -- змініть кожному елементу колір тексту на синій


color.style.color = 'lightblue';

textFromRules.style.color = 'lightblue';

textFromP.style.color = 'lightblue';


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let divRules = document.getElementsByClassName('fc bp');
console.log(divRules);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інший довільний текст

//
// color.onclick = function () {
//     console.log('Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.')
// }
//
// color.onclick = function () {
//     console.log('Hello world!')
// }

const liEl1 = document.getElementsByClassName('fc_rules rule1');
for (const liElement of liEl1) {
    liElement.onclick = function () {
        console.log('Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.')
    }

    liElement.onclick = function () {
        console.log('hello')
    }
}




// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const liElements = document.getElementsByClassName('fc_rules');
for (const liEl of liElements) {
    liEl.style.color = 'darkred'
}
