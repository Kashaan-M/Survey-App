const question1 = document.querySelector('.question-1');
const question2 = document.querySelector('.question-2');
const answers1 = document.querySelector('.answers-1');
const answers2 = document.querySelector('.answers-2');

function firstAnswer(e) {
  switch(e.target.dataset.option) {
    case "Ja":
      console.log("Yes");
      break;
    case "Kanske":
      question1.classList.add('hide');
      question2.classList.remove('hide');
      console.log("No");
      break;
    case "Nej":
    console.log("Maybe");
    break;
  }
}

answers1.childNodes.forEach(child => child.addEventListener('click',firstAnswer));

