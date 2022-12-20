let allEmail = ['mail12@mail.ru', 'mail67@mail.ru','mail97@mail.ru', 'mail11@mail.ru', 'mail22@mail.ru', 'mail33@mail.ru', 'mail44@mail.ru'];
let blackListMail = ['mail67@mail.ru', 'mail22@mail.ru', 'mail44@mail.ru'];

function fliter(allEmail, blackListMail) {
  let clearMail = [];

   for (let item of allEmail) {
    if (!blackListMail.includes(item)) {
       clearMail.push(item);
    }
   }

  return clearMail;
}

const clearMail = fliter(allEmail, blackListMail);
console.log(clearMail);

