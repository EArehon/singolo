//slider
let items = document.querySelectorAll('.slider .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem (n){
    currentItem = (n + items.length) % items.length;
}





//scroll navigation
const navScroll = (event) => {
    if(event.target.tagName === 'A'){
        event.preventDefault();

        let y = event.target.getAttribute('href');
        let yy = document.querySelector(y).offsetTop;

        window.scrollTo(0, yy-document.querySelector('header').offsetHeight);

        document.querySelectorAll('a.active').forEach(a => a.classList.remove('active'));
        event.target.classList.add('active');
    }
}

document.querySelector('nav ul').addEventListener('click', navScroll);

//portfolio backlight
const showOutline = (event) => {
    if (event.target.tagName === 'IMG'){
        if(event.target.classList.contains('active')){
            event.target.classList.remove('active');
        }
        else{
            document.querySelectorAll('img.active').forEach(a => a.classList.remove('active'));
            event.target.classList.add('active');
        }
    }
}

document.querySelector('div.grid').addEventListener('click', showOutline);



//переключение тегов портфолио
const portfolioSwitch = (event) =>{
    if (event.target.tagName === 'LI'){
        document.querySelectorAll('ul.portfolioSwitch li.active').forEach(a => a.classList.remove('active'));
        event.target.classList.add('active');

        let portfolioArr = Array.from(document.querySelectorAll('.portfolio img'));
        let containerPortfolio = document.querySelector('div.portfolio div.grid');
        shuffle(portfolioArr);
        containerPortfolio.innerHTML = "";
        for(let i = 0; i < portfolioArr.length; i++){
            containerPortfolio.appendChild(portfolioArr[i]);
        }
    }
}

document.querySelector('ul.portfolioSwitch').addEventListener('click', portfolioSwitch);





//обработка формы
let form = document.getElementById('formQuote');

const formSub = (event) => {
    event.preventDefault();

    let subject = document.getElementById('subjectQuote').value;
    subject = (subject == "") ? "No subject" : "Subject: " + subject;
    let description = document.getElementById('descriptionQuote').value;
    description = (description == "") ? "No description" : "Description: " + description;

    document.querySelector('.modalText').innerHTML = 'The letter was sent' + '<br>' + subject + '<br>' + description;
    document.querySelector('.modal').style.display = "flex";
}

form.addEventListener('submit', formSub);


//закрытие модального окна и очистка формы
document.querySelector('.confirmBtn').addEventListener('click', (event) => {
    form.reset();
    document.querySelector('.modal').style.display = "none";
})








//перемешивание массива
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}



/*
const navList = document.querySelectorAll('nav A');
navList.forEach((element) => {
    element = element.getAttribute('href');
});


console.log(document.querySelector(navList[0].getAttribute('href')).offsetTop);
console.log(document.querySelector(navList[1].getAttribute('href')).offsetTop);



window.addEventListener('scroll', function() {
    if(pageYOffset < document.querySelector(navList[1].getAttribute('href')).offsetTop-document.querySelector('header').offsetHeight){
        document.querySelectorAll('a.active').forEach(a => a.classList.remove('active'));
        document.getElementById('sliderNav').classList.add('active');
    }
    else if(pageYOffset >= document.querySelector(navList[1].getAttribute('href')).offsetTop-document.querySelector('header').offsetHeight && pageYOffset < document.querySelector(navList[2].getAttribute('href')).offsetTop-document.querySelector('header').offsetHeight){
        document.querySelectorAll('a.active').forEach(a => a.classList.remove('active'));
        document.getElementById('servicesNav').classList.add('active');
    }
    //else if(pageYOffset > document.querySelector(navList[1].getAttribute('href')).offsetTop){
    //    document.querySelectorAll('a.active').forEach(a => a.classList.remove('active'));
    //    document.getElementById('servicesNav').classList.add('active');
    //    }
    console.log(pageYOffset + 'px');
  });
*/
