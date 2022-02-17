import {UI} from './ui.js';
import {getTime} from './helper.js';

UI.btn.addEventListener("click", sendMessage);
UI.newMessage.addEventListener("keydown", e => {
  if (e.code === "Enter") sendMessage();
});

function sendMessage() {

  let message = UI.newMessage.value;
  const txt = UI.tmpl.content.querySelector('span');
  const time = UI.tmpl.content.querySelector('.time');

  txt.textContent = (`Ich: ${message}`);
  time.textContent = getTime();
  let elem = UI.tmpl.content.cloneNode(true);
  UI.field.append(elem);
};



