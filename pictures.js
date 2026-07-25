Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


picturesData = [
    {
        img:"ryan-schroeder-Gg7uKdHFb_c-unsplash.jpg",
        credit:'Photo de <a href="https://unsplash.com/fr/@ryanschroeder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryan Schroeder</a> sur <a href="https://unsplash.com/fr/photos/photographie-de-paysage-chaine-de-montagnes-avec-de-la-neige-Gg7uKdHFb_c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        img:"eutah-mizushima-OWwK_0_EnxY-unsplash.jpg",
        credit:'Photo de <a href="https://unsplash.com/fr/@eutahm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eutah Mizushima</a> sur <a href="https://unsplash.com/fr/photos/riviere-entre-les-arbres-sous-le-ciel-bleu-OWwK_0_EnxY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        img:"silas-baisch-Wn4ulyzVoD4-unsplash.jpg",
        credit:'Photo de <a href="https://unsplash.com/fr/@silasbaisch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Silas Baisch</a> sur <a href="https://unsplash.com/fr/photos/photographie-aerienne-de-la-chaussee-Wn4ulyzVoD4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        img:"etienne-delorieux-U8FEzONZCsg-unsplash.jpg",
        credit:'Photo de <a href="https://unsplash.com/fr/@etiennedelorieux?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Etienne Delorieux</a> sur <a href="https://unsplash.com/fr/photos/champ-dherbe-verte-dans-la-montagne-U8FEzONZCsg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        img:"robert-murray-toCqTyxsT4Q-unsplash.jpg",
        credit:'Photo de <a href="https://unsplash.com/fr/@fastturtle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Robert Murray</a> sur <a href="https://unsplash.com/fr/photos/photographie-de-paysage-de-montagnes-toCqTyxsT4Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        img:"diego-jimenez-A-NVHPka9Rk-unsplash.jpg",
        credit:'Photo de <a href="https://unsplash.com/fr/@diegojimenez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Diego Jimenez</a> sur <a href="https://unsplash.com/fr/photos/une-route-solitaire-qui-va-vers-les-montagnes-A-NVHPka9Rk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        img:"toan-chu-YKN_G9L9nMA-unsplash.jpg",
        credit:'Photo de <a href="https://unsplash.com/fr/@toanchu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Toan Chu</a> sur <a href="https://unsplash.com/fr/photos/montagnes-vertes-et-brunes-sous-des-nuages-blancs-et-un-ciel-bleu-pendant-la-journee-YKN_G9L9nMA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        img:"petr-vysohlid-9fqwGqGLUxc-unsplash.jpg",
        credit:'Photo de <a href="https://unsplash.com/fr/@pvysohlid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Petr Vyšohlíd</a> sur <a href="https://unsplash.com/fr/photos/champ-dherbe-verte-9fqwGqGLUxc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        img:"nick-perez-duvq92-VCZ4-unsplash.jpg",
        credit:'Photo de <a href="https://unsplash.com/fr/@nipez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Perez</a> sur <a href="https://unsplash.com/fr/photos/photographie-aerienne-de-la-plage-duvq92-VCZ4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        img:"milada-vigerova-pQMM63GE7fo-unsplash.jpg",
        credit:'Photo de <a href="https://unsplash.com/fr/@milada_vigerova?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Milada Vigerova</a> sur <a href="https://unsplash.com/fr/photos/photo-de-paysage-de-chutes-deau-se-jetant-dans-la-riviere-pendant-la-journee-pQMM63GE7fo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    }
]

let imgToday = picturesData.random()
const img = document.getElementById("backgroundImage");
img.src = "./pictures/" + imgToday.img
document.getElementById('credit').innerHTML = imgToday.credit


setInterval(
    () => {
        lastImg = imgToday
        imgToday = picturesData.random()
        while (imgToday == lastImg){
            imgToday = picturesData.random()
        }
        img.style.opacity = 0;
        document.getElementById('credit').innerHTML = imgToday.credit
        setTimeout(() => {
          img.src = "./pictures/" + imgToday.img;
          img.style.opacity = 0.75;
        }, 300);
    }, 10000
)

function shuffle(list) {
  const arr = [...list]; 
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

traductAll("en")

async function traductAll(codeLang){
    const response = await fetch("./trad/trad_" + codeLang + ".json");
    const trad_file = await response.json();
    //all translation :
    const trad_el = document.querySelectorAll('*[trad-i18n]');
    trad_el.forEach(el => {
      el.innerText = trad_file[el.getAttribute('trad-i18n')]
    });
}