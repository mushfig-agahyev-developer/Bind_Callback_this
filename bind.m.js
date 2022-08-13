const person = {
    name: 'Musfig'
};

function info(phone, email) {
    console.log(`Name is ${
        person.name
    }, Phone is ${phone}, Email is ${email}`);
};
// console.log(person);
// Demo(Demonstration)

// info.bind(person)('055 555 00 10','student@.com');
// info.bind(person,'055 555 00 10')('student@.com')
// info.bind(person,'055 555 00 10','student@.com')()

if (false) { // 1 easy way
    function bind(fn, context, ...rest) {
        return fn.bind(context, ...rest);
    }

    // info.bind(person)('0555555156','mymail@mail.com');
    bind(info, person)('0555555156', 'mymail@mail.com');
    bind(info, person, '0555555156')('mymail@mail.com');
    bind(info, person, '0555555156', 'mymail@mail.com')();
}
