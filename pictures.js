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

let data = [
    { label: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",   word: "China"      },
    { label: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",  word: "South Africa"    },
    { label: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",     word: "Canada" },
    { label: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg",  word: "USA"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",   word: "India"       },
    { label: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",   word: "Indonesia"      },
    { label: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",     word: "Japan"   },
    { label: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg", word: "Nepal"        },
    { label: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",   word: "Sri Lanka"    },
    { label: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",   word: "Germany"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",       word: "Austria"    },
    { label: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg",   word: "Belgium"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",   word: "Denmark"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",   word: "Spain"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",   word: "France"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",   word: "Greece"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",   word: "Ireland"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",   word: "Italy"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",   word: "Norway"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",   word: "Poland"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",   word: "United Kingdom"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",   word: "Switzerland"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",   word: "Australia"     },
    { label: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",   word: "New Zealand"     }
  ];

  data = shuffle(data)

  const inner = document.getElementById('scrollInner');
  const counter = document.getElementById('counterNum');

  data.forEach((d) => {
    const div = document.createElement('div');
    div.className = 'scroll-item';
    div.innerHTML = `
      <span class="item-label"><img style="height: 60px; width: auto;" src="${d.label}"></img></span>
      <span class="item-word">${d.word}</span>
    `;
    inner.appendChild(div);
  });

  inner.addEventListener('scroll', () => {
    const itemH = inner.clientHeight;
    const index = Math.round(inner.scrollTop / itemH);
    counter.textContent = index + 1;
  });


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