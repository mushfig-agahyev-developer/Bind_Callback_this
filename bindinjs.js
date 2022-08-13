const person = {
    name: 'Mushfig'
}

function _info() {
    console.log(`Name is ${
        this.name
    }`);
}

// _info.bind(person)(); // dayot sushnost funksiya ne vizivaetsya
// _info.bind(person)('Kamil');

if (true) {
    function user() {
        console.log(this.name);
    }
    const binding = _info.bind(person);
    _info.bind(person); // dayot sushnost funksiya ne vizivaetsya
    binding(); // function is called
    user.bind(person)(); // gives the essence of the function + is called
    console.log('---------------------------');
}
/**
 When working with bind(), keep in mind that functions do not always work with contexts.
 it can work with other parameters as well. for example:
 the _info function can take grays and other parameters.
 a function that has a context attached to it gives a parameter. => info.bind(persons)(Kamil);
 */

// _info.bind(person)('Aqil');

if (false) {

    function fullinfo(phone, email) {
        console.log(`Name: ${
            this.name
        } Phone: ${phone} Email: ${email}`);
    }
    fullinfo.bind(person)('055 555 55 55', 'mushu@gmail.com');
    // Name: Mushfig Phone: 055 555 55 55 Email: mushu@gmail.com
    fullinfo.bind(person, '055 888 77 77')();
    // Name: Mushfig Phone: 055 888 77 77 Email: undefined
    fullinfo.bind(person, '055 555 55 55')('mushu2021@gmail.com');
    // Name: Mushfig Phone: 055 555 55 55 Email: mushu2021@gmail.com}/**
    /**
   * Now we call the bind() method on the function itself. Because he is a prototype.
     bind() takes the function as the first parameter, which is the must binding
   */

}
if (false) {
    function fullinfo(phone, email) {
        console.log(`Name is ${
            this.name
        } Phoneis: ${phone} Email is ${email}`)
    }
}

if (false) {
    function bind(fn, context, ...rest) { // return function that we want call.
        return function () {
            const _uniqueID = Date.now.toString();
            context[_uniqueID] = fn;
            const _rusult = context[_uniqueID](...rest);
            delete context[_uniqueID];
            return _rusult;

            // return fn(context,...rest)
        }
    }
    /**
         * Name is Mushfig Phoneis: undefined Email is undefined
            bindinjs.js:50 Name is Mushfig Phoneis: 055 555 00 10 Email is undefined
            bindinjs.js:50 Name is Mushfig Phoneis: 055 555 00 10 Email is student@.com
         */
}

if (false) {
    function bind(fn, context, ...rest) { // return function kotoriy mi vizivaem
        return function (...args) {
            const _uniqueID = Date.now.toString();
            context[_uniqueID] = fn;
            const _rusult = context[_uniqueID](...rest.concat(args));
            delete context[_uniqueID];
            return _rusult;

            // return fn(context,...rest)
            /**
         * Name is Mushfig Phoneis: 055 555 00 10 Email is student@.com
            bindinjs.js:50 Name is Mushfig Phoneis: 055 555 00 10 Email is student@.com
            bindinjs.js:50 Name is Mushfig Phoneis: 055 555 00 10 Email is student@.com
         */
        }

    }
}


// console.log(person);
/**
 * function bind(fn,context)
{
    return fn.bind(context);
}
Name is Mushfig Phoneis: 055 555 00 10 Email is student@.com
Name is Mushfig Phoneis: student@.com Email is undefined
Name is Mushfig Phoneis: undefined Email is undefined
 */

// ..rest - existspread in ES5

// 3 way
if (false) {
    function bind(fn, context) {
        const rest = Array.prototype.slice.call(arguments, 2);
        return function () {
            const args = Array.prototype.slice.call(arguments)
            fn.apply(context, rest.concat(args));
        }
    }
    //     /**
    //      * Name is Mushfig Phoneis: 055 555 00 10 Email is student@.com
    // bindinjs.js:48 Name is Mushfig Phoneis: 055 555 00 10 Email is student@.com
    // bindinjs.js:48 Name is Mushfig Phoneis: 055 555 00 10 Email is student@.com
    //      */
    // }

    // 4 way ES6
    if (false) {
        function bind(fn, context, ...rest) {
            return function (...args) {
                return fn.apply(context, rest.concat(args))
                // ES6 es metod call
                // return fn.call(context, ...rest.concat(args))
            }
        }

        bind(fullinfo, person)('055 555 00 10', 'student@.com');
        bind(fullinfo, person, '055 555 00 10')('student@.com');
        bind(fullinfo, person, '055 555 00 10', 'student@.com')();
    }
}
