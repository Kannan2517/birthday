document.querySelector(".container").style.display = "none";
document.getElementById("kadoIn").onclick = function () {
  if (fungsiAwal == 0) {
    let audio = document.getElementById("linkmp3"); // Get the audio element
    audio.volume = 0.1; // Adjust the volume here (0.5 means 50% volume)
    audio.play(); // Play the audio

    fungsiAwal = 1;
    kadoIn.style = "transition:all .8s ease;transform:scale(10);opacity:0";
    wallpaper.style = "transform: scale(1.5);";
    ket.style = "display:none";
    setTimeout(mulainama, 2000);
  }
};
changeMessagesAutomatically();

async function mulainama() {
  kadoIn.style = "display:none";
  ket.style = "display:none";
  Content.style = "opacity:1;margin-top:2vh";
  bodyblur.style = "opacity:.7";
  wallpaper.style = "transform: scale(1);";
  fotostiker.style = "display:inline-flex;";
  setTimeout(ftmuncul, 200);
  setTimeout(kethalo, 500);
}

function ftmuncul() {
  if (ftganti == 0) {
    fotostiker.src = deffotostiker;
    fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
  }
  if (ftganti == 1) {
    fotostiker.src = fotostiker2.src;
    fotostiker.style =
      "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
  }
  if (ftganti == 2) {
    fotostiker.src = fotostiker3.src;
    fotostiker.style =
      "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
  }
  if (ftganti == 3) {
    fotostiker.src = fotostiker4.src;
    fotostiker.style =
      "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);box-shadow:none;background:none;border:0;width:150px;height:150px";
    setTimeout(jjfoto, 400);
  }
}
function fthilang() {
  fotostiker.style =
    "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}
function jjfoto() {
  fotostiker.style.animation = "rto .8s infinite alternate";
  setInterval(createHeart, 100);
}

function kethalo() {
  new TypeIt("#halo", {
    strings: ["" + vketikhalo],
    startDelay: 50,
    speed: 60,
    waitUntilVisible: true,
    afterComplete: function () {
      halo.innerHTML = vketikhalo;
      setTimeout(bqmuncul, 200);
    },
  }).go();
}
function kethalo2() {
  bqhilang();
  fthilang();
  ftganti = 1;
  setTimeout(ftmuncul, 400);
  halo.style = "display:none";
  new TypeIt("#halo2", {
    strings: ["" + vketikhalo2],
    startDelay: 50,
    speed: 60,
    waitUntilVisible: true,
    afterComplete: function () {
      bq.style = "";
      halo2.innerHTML = vketikhalo2;
      setTimeout(mulaiketikAkhir, 500);
    },
  }).go();
}
vketikhalo3 = halo3.innerHTML;
halo3.innerHTML = "";
function mulaiketikAkhir() {
  halo3.style = "position:relative !important";
  new TypeIt("#halo3", {
    strings: ["" + vketikhalo3],
    cursor: false,
    startDelay: 50,
    speed: 55,
    waitUntilVisible: true,
    afterComplete: function () {
      halo3.innerHTML = vketikhalo3;
      setTimeout(munculbwh, 800);
      setTimeout(fthilang, 600);
      ftganti = 2;
      setTimeout(ftmuncul, 1000);
      setInterval(createHeart, 400);
      setTimeout(tombol, 3000);
    },
  }).go();
}
defkalimatbawah = kalimatbawah.innerHTML;
function munculbwh() {
  kalimatbawah.innerHTML = defkalimatbawah;
  setTimeout(munculbwh2, 1500);
  otomatis();
}
function tombol() {
  Tombol.style = "opacity:1;transform: scale(1);";
  fungsi = 1;
}
function munculbwh2() {
  kalimatbawah.innerHTML = kalimatbawah2.innerHTML;
  setTimeout(munculbwh3, 1200);
  otomatis();
}
function munculbwh3() {
  kalimatbawah.innerHTML = kalimatbawah3.innerHTML;
  setTimeout(munculbwh, 1000);
  otomatis();
}
function otomatis() {
  kalimatbawah.style = "position:relative;opacity:0;transform:scale(.3);";
  setTimeout(anim, 300);
}
function anim() {
  kalimatbawah.style = "position:relative;opacity:1;transform:scale(1);";
}

function bqmuncul() {
  bq.style =
    "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";
  mulaiketik1();
  fungsi = 1;
}
function bqhilang() {
  wallpaper.style = "transform: scale(2);";
  bodyblur.style = "opacity:.5";
  bq.style = "position:relative;transition:all .7s ease;";
}

async function changeMessagesAutomatically() {
  let messages = [
    document.getElementById("kalimat").innerHTML,
    document.getElementById("kalimatb").innerHTML,
    document.getElementById("kalimatc").innerHTML,
    document.getElementById("kalimatd").innerHTML,
    document.getElementById("kalimatf").innerHTML,
  ];

  let index = 0;

  let intervalId = setInterval(function () {
    bq.style.opacity = "0"; // Fade out the blockquote
    setTimeout(
      function () {
        bq.innerHTML = "<p>" + messages[index] + "</p>"; // Change the message
        bq.style.opacity = "1";
        if (index === messages.length - 1) {
          clearInterval(intervalId);
          setTimeout(kethalo2, 2000);
        }
        index++;
      },
      index === 0 ? 1000 : 500
    );
  }, 3000);
}

vketik1 = kalimat.innerHTML;
kalimat.innerHTML = "";
function mulaiketik1() {
  new TypeIt("#kalimat", {
    strings: ["" + vketik1],
    startDelay: 400,
    speed: 40,
    deleteSpeed: 20,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function () {
      opsL.style.opacity = ".8";
      opsLcheck = 1;
      opsLclick = 1;
    },
  }).go();
}

vketik2 = kalimatb.innerHTML;
kalimatb.innerHTML = "";
function mulaiketik2() {
  kalimat.innerHTML = "";
  kalimat.style.display = "none";
  opsL.style.opacity = "0";
  new TypeIt("#kalimatb", {
    strings: ["" + vketik2],
    startDelay: 100,
    speed: 40,
    waitUntilVisible: true,
    afterComplete: function () {
      opsL.style.opacity = ".8";
      opsLcheck = 2;
      opsLclick = 1;
    },
  }).go();
}

vketik3 = kalimatc.innerHTML;
kalimatc.innerHTML = "";
function mulaiketik3() {
  kalimatb.innerHTML = "";
  kalimatb.style.display = "none";
  opsL.style.opacity = "0";
  new TypeIt("#kalimatc", {
    strings: ["" + vketik3],
    startDelay: 100,
    speed: 40,
    waitUntilVisible: true,
    afterComplete: function () {
      opsL.style.opacity = ".8";
      opsLcheck = 3;
      opsLclick = 1;
    },
  }).go();
}

vketik4 = kalimatd.innerHTML;
kalimatd.innerHTML = "";
function mulaiketik4() {
  kalimatc.innerHTML = "";
  kalimatc.style.display = "none";
  opsL.style.opacity = "0";
  new TypeIt("#kalimatd", {
    strings: ["" + vketik4, "" + vketik5],
    startDelay: 100,
    speed: 40,
    deleteSpeed: 10,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function () {
      opsL.style.opacity = ".8";
      opsLcheck = 4;
      opsLclick = 1;
    },
  }).go();
}

vketik6 = kalimatf.innerHTML;
kalimatf.innerHTML = "";
function mulaiketik5() {
  kalimatd.innerHTML = "";
  kalimatd.style.display = "none";
  opsL.style.opacity = "0";
  new TypeIt("#kalimatf", {
    strings: ["" + vketik6],
    startDelay: 100,
    speed: 40,
    deleteSpeed: 10,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function () {
      kalimatf.innerHTML = vketik6;
      opsLcheck = 5;
      opsLclick = 1;
    },
  }).go();
}

document.getElementById("Tombol").addEventListener("click", function (event) {
  event.preventDefault();

  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";

  var loaderContainer = document.querySelector(".container");
  loaderContainer.style.display = "block";

  var delayBeforeRedirect = 3000;

  setTimeout(function () {
    window.location.href = "carousel.html";

    overlay.style.display = "none";
    loaderContainer.style.display = "none";
  }, delayBeforeRedirect);
});
