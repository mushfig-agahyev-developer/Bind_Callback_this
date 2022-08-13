 /**
  * metod bind() 
  * This is a native method in javascript that allows you to bind context;
  */

 const person = { name:'Djeki', surname:'Li'}

 function info(phone,email)
 { 
    console.log(`Name ${this.name} phone: ${phone} email: ${email}`);
 }
info();

const _bound = info.bind(person);
_bound();
info.bind(person)('055 555 00 10','student@.com');
info.bind(person,'055 555 00 10','student@.com')()
info.bind(person,'055 555 00 10')('student@.com')

function bind(fn,context)
{
    return fn.bind(context);
}

bind(info,person)('055 555 00 10','student@.com');
bind(info,person,'055 555 00 10')('student@.com');
bind(info,person,'055 555 00 10','student@.com')();

// Name Djeki phone: 055 555 00 10 email: student@.com
// Name Djeki phone: student@.com email: undefined
// Name Djeki phone: undefined email: undefined
function bind(fn,context, ...rest)
{
    return fn.bind(context, ...rest);
}


// Name Djeki phone: 055 555 00 10 email: student@.com
// bind.js:10 Name Djeki phone: 055 555 00 10 email: student@.com
// bind.js:10 Name Djeki phone: 055 555 00 10 email: student@.com

//funksiya bind() should always return new funksiya to us
//2 sposob
function bind(fn,context, ...rest)
{
   return function(){
     const uniqueId = Date.now().toString();
     context[uniqueId] = fn;
     const result = context[uniqueId](...rest);
     delete context[uniqueId];
     return result;
   }
}
/**
Name Djeki phone: undefined email: undefined
Name Djeki phone: 055 555 00 10 email: undefined
Name Djeki phone: 055 555 00 10 email: student@.com */

function bind(fn,context, ...rest)
{
   return function(...args){
     const uniqueId = Date.now().toString();
     context[uniqueId] = fn;
     const result = context[uniqueId](...rest.concat(args));
     delete context[uniqueId];
     return result;
   }
}

// bind(info,person)('055 555 00 10','student@.com');
// bind(info,person,'055 555 00 10')('student@.com');
// bind(info,person,'055 555 00 10','student@.com')();
// console.log(person);