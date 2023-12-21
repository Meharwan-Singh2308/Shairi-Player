let shairi = document.querySelector(".shairi");

let Quotes = [
  {
    shairi: [
      "yeh aansu yeh ghumm hrr pll nahi hon gy...",
      "yeh yaadain yeh lamhay yeh kmm nahi hon gy..",
      "baat krr liya kro kuch pll ham'se..",
      "qasam sy bht yaad kro gy tum gb hum nahi hon gy...",
    ],
  },
  {
    shairi: [
      "akaile nahi shamil iss jurm-e-muhabbat mein hum",
      "nazrain gbb bhi milti thii muskraya tumm bhi krty thyy",
    ],
  },
  {
    shairi: [
      "panay sy khony ka maza or hai...",
      "band aankhon mein rony ka maza or hai...",
      "aansu bany lafz or lafz bany gazal...",
      "or iss gazal mein tery honay ka maza or hai...",
    ],
  },
  {
    shairi: [
      "kisi ke nafrat ka bahana bnn gya hun..",
      "kisi ke hassi ka sahara bnn gya hun..",
      "tootny pr unn ke khwahish ho ge puri..",
      "sai kehty hain mein sitara bnn gya hun..",
    ],
  },
  {
    shairi: [
      "muskrahat dykh kr unn ke hum hosh gwa baithyy",
      "muskrahat dykh kr unn ke hum hosh gwa baithyy...",
      "hum hosh mein ayay to woh...",
      "phirr sy muskra baithyy....",
    ],
  },
  {
    shairi: [
      "aik tamanna thii jo aaj aarzu bnn gye..",
      "kabhi dosti thii aaj muhabbat bnn gye..",
      "kuch iss trah huay life mein woh shamill..",
      "k aap ko sochty rehna humari aadat bnn gye..",
    ],
  },
  {
    shairi: [
      "behti nadii se thii woh, ruka hua hon mein....",
      "woh mukamill se thii, tuta hua hun mein..",
      "uss k aagy mera koi wajood he nai..",
      "khazany se hai woh or luta hua hun mein...",
    ],
  },
  {
    shairi: [
      "imtihaan mein aya tha mazmoon bewafa",
      "wazaht jo hum ny teri ke hum top kr gye",
    ],
  },
  {
    shairi: [
      "yeh rishton k silsly itny ajeeb q hain..",
      "jo naseeb mein nai woh dil k qareeb q hain...",
      "na jany kysay mill jati hai logoun ko unn ke chahtt...",
      "aakhirr kiss sy poochain hum itny budnaseeb q hain..",
    ],
  },
  {
    shairi: [
      "bht udaas hai dill tery chupp ho jany sy",
      "hoo sky to baat kr kise bhany sy",
      "too laakh khffa hai mgrr intehaa to dykhh",
      "koi toot chuka hai tery chupp ho jany sy",
    ],
  },
  {
    shairi: [
      "na sakoon sy din guzra",
      " na chainn sy raat hue",
      " mein khud sy bichrr gya ",
      "gb uss shakss sy mulakaat hue",
    ],
  },
];

let currentIndex = 0;

function shairiPlayer() {
  shairi.innerHTML = "";
  Quotes[currentIndex].shairi.forEach((elem) => {
    let shair = document.createElement("div");
    shair.className = "shair";
    shair.innerHTML = elem;
    shairi.appendChild(shair);
  });

  // currentIndex = (currentIndex + 1) % Quotes.length;
  currentIndex = Math.floor(Math.random() * Quotes.length);
}

setInterval(shairiPlayer, 17000);
setTimeout(shairiPlayer,7000)
