/*для замены фото
const change = document.querySelector('.change-box__newPhoto-flowers');
const newText = document.querySelector('.text-box_greeting');

change.addEventListener('click', function loop(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const change = document.querySelector('.change-box__newPhoto-flowers img');
    change.style.cursor = "pointer";
    newText.style.display = "none";
    //newText.style.left = "3p";
     //newText.style.bottom = "198px";
  if (change !== null) { // если элемент найден
    change.setAttribute('src', 'images/gift-box-black-gold-bow-8dJE7d1-600.jpg');
    return true;
  } else { // иначе он не найден
    return false;
  }
});
change.addEventListener('mousemove', function loop(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const change = document.querySelector('#box-flowers img');
    change.style.cursor = "pointer";
    change.style.width = "100px";
    change.style.height = "100px";
    newText.innerHTML = "Поздравляю с рождением сына !";
    newText.style.position = "absolute";
    newText.style.width = "500px";
    newText.style.fontSize = "85px";
    newText.style.color = "#8be726";
    newText.style.right = "231px";
    newText.style.bottom = "284px";
    //newText.style.margin = "0";
  if (change !== null) { // если элемент найден
    change.setAttribute('src', 'images/58c63938e36c615ac64f8664.png');
    return true;
  } else { // иначе он не найден
    return false;
  }  
  });*/

const cardAdd = document.querySelector('.cardAdd_flowers');
const newText = document.querySelector('.textAdd_text-box_greeting');

cardAdd.addEventListener('click', (event) => {/*нажимаем на шишку, чтобы  выключить Деда Мороза */
  event.stopPropagation();//чтоб событие не всплывало 
  const photoOff = document.querySelector('.photoOff_filter-flowers');
    newText.innerHTML = "Поздравляю с рождением сына !";
  if (photoOff.style.display == "block") { // если элемент найден // 
    photoOff.style.display = "none";
    return true;
  } else { // иначе он не найден
    photoOff.style.display = "block";
    return false;
  }
  //alert("hi");
});

cardAdd.addEventListener('click', (event) => {/*нажимаем на шишку, чтобы  выключить Деда Мороза */
  event.stopPropagation();//чтоб событие не всплывало 
  const photoOff = document.querySelector('.textAdd_text-box_greeting');
    //newText.innerHTML = "Поздравляю с рождением сына !";
    /*newText.style.position = "absolute";
    newText.style.width = "500px";
    newText.style.fontSize = "85px";
    newText.style.color = "#8be726";
    newText.style.right = "231px";
    newText.style.bottom = "284px";
    //newText.style.margin = "0";*/
  if (photoOff.style.display == "block") { // если элемент найден // 
    photoOff.style.display = "none";
    return true;
  } else { // иначе он не найден
    photoOff.style.display = "block";
    return false;
  }
});

let colorNames = ["blue", "cyan", "red", "gold", "green", "yellow", "orange", "violet", "#7fff00", "#ff7f50"];

// функция поиска random-числа
const random = (min, max) => {
  max = colorNames.length - 1;
  const rand = min + Math.round(Math.random() * (max - min));
  return rand;
};

// найти элементы для изменения свойств
let paragraphs = document.getElementsByClassName("textAdd_text-box_greeting");/**/

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = colorNames[random(0)];
  }
}, 2000);
console.log(colorNames);
