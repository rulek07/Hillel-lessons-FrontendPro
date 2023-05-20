
alert('Давай познакомимся по-ближе.');
let currentYear = 2023;
let usersYear = Number(prompt('Напиши свой год рождения.',''));
let usersCity = prompt('А в каком годе ты живешь?');
let usersSport = prompt('А каким видом спорта ты занимаешься?')
let usersAge = currentYear - usersYear;

    if (!usersYear){
        ageAnswer = 'Ты не захотел делиться с нами своим возрастом, наверное потому что или старый или совсем мелкий.';
    } else {
        ageAnswer = `Привет, тебе ${usersAge} годиков!`;
    };

    switch (usersCity){
        case 'Киев':
            cityAnswer = 'Ты живешь в столице Украины.';
            break;
        case 'Вашингтон':
            cityAnswer = 'Ты живешь в столице США.';
            break;
        case 'Лондон':
            cityAnswer = 'Ты живешь в столице Великобритании.';
            break;
        default:
            cityAnswer = `Ты живешь в городе - ${usersCity}.`;
            break;
    };

    if (!usersCity){
        cityAnswer = 'Ты не захотел делиться с нами своим местоположением, бомж чтоли?.';
    }

    switch (usersSport){
        case 'футбол':
            sportAnswer = 'Я думаю твой кумир - Криштиано Роналду';
            break;
        case 'шахматы':
            sportAnswer = 'Я думаю твой кумир - Гарри Каспаров';
            break;
        case 'квиддич':
            sportAnswer = 'Я думаю твой кумир - Гарри Поттер';
            break;
        default:
            sportAnswer = `Вид спорта, которым ты занимешься - ${usersSport}.`;
            break;
    };

    if (!usersSport){
        sportAnswer = 'Или ты толстый или не занимаешься никаким спортом.';
    }

alert(`Вот что нам про тебя известно - 
        \r\n ${ageAnswer}
        \r\n ${cityAnswer}
        \r\n ${sportAnswer}`);