const portada = document.getElementById("portada");
const hoja = document.getElementById("hoja");

portada.addEventListener("mouseover", () => {
  hoja.style.display = "block";
});

portada.addEventListener("mouseout", () => {
  hoja.style.display = "none";
});

document.getElementById("open-letter-btn").addEventListener("click", function () {
  document.getElementById("letter-modal").style.display = "block";
});

document.getElementById("close-letter-btn").addEventListener("click", function () {
  document.getElementById("letter-modal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("letter-modal")) {
    document.getElementById("letter-modal").style.display = "none";
  }
});

const personajeContainer = document.getElementById('container-personaje');
const cartaContainer = document.getElementById('container-carta');
const fraseContainer = document.getElementById("container-frases");

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    personajeContainer.style.display = 'none';
    cartaContainer.style.display = 'none';
    fraseContainer.style.display = "block";
  });
});

const personajes = document.querySelectorAll('#tarjeta-personaje .box');

const messages = {
  'Hans': 'Hola Hans, espero que estés bien. Quería hacerte un regalo, no es gran cosa, ya que es una carta, pero te escribo esto para agradecerte y decirte que gracias por todo. Eres un gran amigo, un gran hermano y una persona excelente. También te agradezco por estar ahí cuando más lo necesitaba y por escucharme. Por todo, desearía darte un regalo personal, pero no tengo dinero, ¡jajaja! No, mentira, fuera de bromas, me aseguraré de darte algo para agradecerte por todo. Te quiero hermano.',
  'Marlon': 'Hola Marlon, sé que han sido días y meses difíciles, pero sé que todo mejorará. Quería darte algo para este día, no es gran cosa, pero igual, ya que has estado ahí también y sigues estando cuando te necesito. Quiero agradecerte por todo eso. Con gusto te llamaría mi hermano; no somos de la misma familia, pero sé que eres como un hermano para mí y estarás ahí cuando te necesite. Quiero que sepas que, aunque esté ocupado, estaré ahí para lo que necesites y te apoyaré en todo, sin importar que el mundo se te venga encima; seremos tú y yo contra el mundo, ¿ok? Gracias por todo hermano.',
  'Javier': 'Hola Javi, espero que estés bien. No hablamos mucho, pero igual quiero regalarte algo, ya que eres una persona excelente y se te quiere mucho. Además, eres un gran amigo y hermano. También, no es gran cosa porque es una carta, pero igual quería darte algo. Me aseguraré de darte algo, aunque tal vez me demore en pensar qué darte, o más bien qué darles, pero lo que sí sé es que les daré algo, ya que los quiero mucho y son unos grandes amigos. Además, quiero agradecerte por estar ahí cuando lo necesitaba, por sacarme una risa y por apoyarme en todo. Gracias hermano.',
  'Jhon': 'Hola bro, sé que no hablamos mucho, pero cuando lo hacemos, nos ponemos al día. Sé que no te dije nada el año pasado sobre lo que pasaba porque el problema era grave, pero cuando te lo dije, me apoyaste, aunque sea tarde. Igualmente, te lo agradezco, ya que eres una gran persona y hermano. Nos conocemos desde hace un chingo, y con gusto te llamo mi hermano, ya que estás ahí cuando te necesito. Y sabes que también, si me necesitas, estaré ahí, aunque esté ocupado. Te quiero mucho hermano.',
  'Alejo': 'Hola hermano, aunque sea una carta porque no hay dinero para un regalo físico, espero que te guste. No suelo escribir cartas, pero quiero agradecerte por estar ahí cuando más te necesitaba y sacarme una risa. También por motivarme a volver al ejercicio y mostrarme la calistenia, además de hacerme parte de tu familia. Te lo agradezco por todo y te deseo lo mejor en la vida. Espero que pases un bonito día. Además, me aseguraré de que recibas un regalo de mi parte, ya que te lo mereces. Sé que puedo tardar un poco, pero te lo daré. Por favor, ¡no lo destruyas esta vez, jajaja! Te quiero hermano',
  'Samuel': 'Hola Samuel, espero que estés bien. Quería darte algo para este San Valentín, aunque sé que vas a tardar en leer esto, pero da igual, quiero que sepas que eres una gran persona y hermano. También quiero agradecerte por enseñarme algunos trucos para el boxeo y por estar ahí cuando te necesitaba. Sabes que puedes contar conmigo para decirme cómo te sientes, siempre estaré ahí para apoyarte en todo. Además, gracias por las risas que me sacaste en mi peor momento y por darme consejos cuando los necesitaba. Te agradezco por todo hermano.',
  'Jose': 'Hola Jose espero qeu te encuentres super bien te queria escribir algo par aeste dia ya que te concideron un gran amigo y eres una exelente persona  y te mereces lo mejor , tambien que te queria agradecer por estar ahi cuando mas te necesitaba y apoyamer y sacarme una sonrisa y puede que leas esto tarde asi que igual no importa ya que es un regalo para ti y no es la gran cosa pero no hay prosupuesto para comprar jiji pero fuera bromas igual me asegurare de regalarles algo aunque tal vez me demore asi que para terminar te quiera decir que te pase cosas buenas . gracias por todo bro '
};

const cartas = {
  Hans: 'carta-hans',
  Marlon: 'carta-marlon',
  Javier: 'carta-javier',
  Jhon: 'carta-jhon',
  Alejo: 'carta-alejo',
  Samuel: 'carta-samuel',
  Jose: 'carta-jose'
};

const messageCodes = {
  Hans: 'Hans',
  Marlon: 'Marlon',
  Javier: 'Javier',
  Jhon: 'Jhon',
  Alejo: 'Alejo',
  Samuel: 'Samuel',
  Jose: 'Jose'
};

function mostrarCarta(codigoCarta) {
  const carta = document.getElementById(cartas[codigoCarta]);
  const letterModal = document.getElementById('letter-modal');
  const letterRecipient = document.getElementById('letter-recipient');
  const letterMessage = document.querySelector('#letter-modal .letter-body p');

  letterModal.style.display = 'none';
  letterRecipient.innerText = `Carta de ${codigoCarta}`;
  letterMessage.innerText = messages[codigoCarta];
}

document.getElementById('anterior').addEventListener('click', function () {
  document.getElementById('container-personaje').style.display = 'block';
  document.getElementById('container-frases').style.display = 'none';

  const boxes = document.querySelectorAll('#container-personaje .box');
  boxes.forEach(box => box.classList.add('visible'));
});

const users = [
  {
    nombre: "Hans",
    password: "hans123",
    messageCode: "Hans"
  },
  {
    nombre: "Marlon",
    password: "marlon456",
    messageCode: "Marlon"
  },
  {
    nombre: "Jhon",
    password: "jhon789",
    messageCode: "Jhon"
  },
  {
    nombre: "Samuel",
    password: "samuel012",
    messageCode: "Samuel"
  },
  {
    nombre: "Jose",
    password: "jose345",
    messageCode: "Jose"
  },
  {
    nombre: "Javier",
    password: "javier678",
    messageCode: "Javier"
  },
  {
    nombre: "Alejo",
    password: "alejo901",
    messageCode: "Alejo"
  }
];

function authenticateUser() {
  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;

  const user = users.find(
    (user) => user.nombre === username && user.password === password
  );

  if (user) {
    document.getElementById("container-auth").style.display = "none";
    document.getElementById("container-carta").style.display = "block";
    document.getElementById("container-frases").style.display = "none";
    mostrarCarta(user.messageCode);
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

document.getElementById("auth-button").addEventListener("click", authenticateUser);

