const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${this.position}-й в очереди.`
}

const messages = [];

for(let i=0; i<orders.length; i+= 1)
messages.push(composeMessage.call(orders[i], i+1));


