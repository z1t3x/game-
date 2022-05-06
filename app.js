const rand = (from, to) => Math.floor((Math.random() * (to - from + 1)) + from);
const randArr = arr => arr[rand(0, arr.length - 1)];

const people = ['Nick', 'Alex', 'Egor', 'Artem', 'Eliz'];
const races = ['Керри', 'Мидер', 'Тройка', 'Семи саппорт', 'Фулл саппорт', 'Лесник'];
const roles = ['Милишник', 'Хиллер', 'Танк', 'Ренжовик'];
const classes = {
    'Милишник' : ['Мечники', 'Животные', 'Друиды', 'Воины'],
    'Хиллер' : ['Маги', 'Друиды', 'Лекари'],
    'Танк' : ['Мечник', 'Силовик', 'Воины'],
    'Ренжовик' : ['Лучники', 'Маги', 'Друиды', 'Лекари']
}

const users = people.map(name => {
    const role = randArr(roles);
    return  {
        name    : name,
        race    : randArr(races),
        role,
        class   : randArr(classes[role])
    }
});

console.table(users);