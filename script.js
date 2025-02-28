document.addEventListener("DOMContentLoaded", () => {
  const savedTrack = localStorage.getItem("currentTrack");
  if (savedTrack) {
    const track = JSON.parse(savedTrack);
    playSong(track);
    localStorage.removeItem("currentTrack"); // Remove to prevent replay
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
    event.preventDefault();
  }
});

document.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

// WebViewString Communication with MIT App Inventor
function updateAppInventorState(state) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(state);
  }
}
  fetch("https://script.google.com/macros/s/AKfycbwRTuXI4PMjGI9lIqwK4Pih00i0kHsLw2pudIFLs13ESrXbfFGjIpFWP3qn8qCkiLbI8A/exec")
    .then(response => response.text())
    .then(count => {
      document.getElementById("visit-count").textContent = count;
    })
    .catch(error => console.error("Error fetching visit count:", error));

// Function to send a message to MIT App Inventor about Media Session status
function updateAppInventorWithMediaSessionStatus(status) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString("MediaSessionStatus: " + status);
  }
}

// Media Session API Integration
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler("play", playSong);
    navigator.mediaSession.setActionHandler("pause", pauseSong);
    navigator.mediaSession.setActionHandler("nexttrack", playNextSong);
    navigator.mediaSession.setActionHandler("previoustrack", playPrevSong);

    // Inform App Inventor that the Media Session is enabled
    updateAppInventorWithMediaSessionStatus("Media Session Enabled");
  } else {
    // Inform App Inventor that the Media Session is not supported
    updateAppInventorWithMediaSessionStatus("Media Session Not Supported");
  }
}

// Existing code remains the same
const SONGS = [
  // 1 list
  {
    title: "Aaacha-Paatcha",
    artist: "Ilaiyaraaja",
    url: "Aaacha-Paatcha-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Aadidu Peyygaley",
    artist: "Ilaiyaraaja",
    url: "Aadidu Peyygaley.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Aalolam-Paadi",
    artist: "Ilaiyaraaja",
    url: "Aalolam-Paadi-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Aan-Pillai-Endralum",
    artist: "Ilaiyaraaja",
    url: "Aan-Pillai-Endralum-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Aattu-Kutti-Muttai-Ittu",
    artist: "Ilaiyaraaja",
    url: "Aattu-Kutti-Muttai-Ittu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ada Nanachu Neeyachu",
    artist: "Ilaiyaraaja",
    url: "Ada Nanachu Neeyachu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Adukku-Malli",
    artist: "Ilaiyaraaja",
    url: "Adukku-Malli-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Andharangam",
    artist: "Ilaiyaraaja",
    url: "Andharangam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Annai Thaalaattu Paada",
    artist: "Ilaiyaraaja",
    url: "Annai Thaalaattu Paada.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Anne Anne",
    artist: "Ilaiyaraaja",
    url: "Anne Anne.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Antha-Nilavathan",
    artist: "Ilaiyaraaja",
    url: "Antha-Nilavathan-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Arul-Kann-Paarvai",
    artist: "Ilaiyaraaja",
    url: "Arul-Kann-Paarvai-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Athu-Maathiram",
    artist: "Ilaiyaraaja",
    url: "Athu-Maathiram-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Chinna-Ponnu-Selai",
    artist: "Ilaiyaraaja",
    url: "Chinna-Ponnu-Selai-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Chinnamani Kuyile",
    artist: "Ilaiyaraaja",
    url: "Chinnamani Kuyile.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Chinnanjiru Kannu Rendum",
    artist: "Ilaiyaraaja",
    url: "Chinnanjiru Kannu Rendum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Cholam-Vethakkayile",
    artist: "Ilaiyaraaja",
    url: "Cholam-Vethakkayile.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Das-Das-Chinnappadas",
    artist: "Ilaiyaraaja",
    url: "Das-Das-Chinnappadas-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Desamuthu",
    artist: "Ilaiyaraaja",
    url: "Desamuthu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Devathai Ilam",
    artist: "Ilaiyaraaja",
    url: "Devathai Ilam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Dharman Endru",
    artist: "Ilaiyaraaja",
    url: "Dharman Endru.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Dheivam Thanda",
    artist: "Ilaiyaraaja",
    url: "Dheivam Thanda.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Eley-Matchi",
    artist: "Ilaiyaraaja",
    url: "Eley-Matchi-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ellorum-Porandhome",
    artist: "Ilaiyaraaja",
    url: "Ellorum-Porandhome-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Endha-Poovilum",
    artist: "Ilaiyaraaja",
    url: "Endha-Poovilum-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Enna Paada (Sad)",
    artist: "Ilaiyaraaja",
    url: "Enna Paada (Sad).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Enna Paada",
    artist: "Ilaiyaraaja",
    url: "Enna Paada.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Enna Paada",
    artist: "Ilaiyaraaja",
    url: "Enna Paada.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ennaal Mudiyathu",
    artist: "Ilaiyaraaja",
    url: "Ennaal Mudiyathu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ennaiya",
    artist: "Ilaiyaraaja",
    url: "Ennaiya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ennakku Unnaicha",
    artist: "Ilaiyaraaja",
    url: "Ennakku Unnaicha.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ennenna Paada",
    artist: "Ilaiyaraaja",
    url: "Ennenna Paada.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Eppadi Thorkin",
    artist: "Ilaiyaraaja",
    url: "Eppadi Thorkin.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ethana Raathiri",
    artist: "Ilaiyaraaja",
    url: "Ethana Raathiri.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Gangai Aatril",
    artist: "Ilaiyaraaja",
    url: "Gangai Aatril.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Idhayame",
    artist: "Ilaiyaraaja",
    url: "Idhayame.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Indha-Vazhkai",
    artist: "Ilaiyaraaja",
    url: "Indha-Vazhkai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Indira Puthirana",
    artist: "Ilaiyaraaja",
    url: "Indira Puthirana.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Iraivanai-Thedi",
    artist: "Ilaiyaraaja",
    url: "Iraivanai-Thedi-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ithazh Inikka",
    artist: "Ilaiyaraaja",
    url: "Ithazh Inikka.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ithu Ilamai",
    artist: "Ilaiyaraaja",
    url: "Ithu Ilamai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kaathodu-Poovurasa",
    artist: "Ilaiyaraaja",
    url: "Kaathodu-Poovurasa-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kada Veedhi",
    artist: "Ilaiyaraaja",
    url: "Kada Veedhi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kadaloram-Kadaloram",
    artist: "Ilaiyaraaja",
    url: "Kadaloram-Kadaloram-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kadavul-Padaippil",
    artist: "Ilaiyaraaja",
    url: "Kadavul-Padaippil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kadhal Kasakkuthaiya",
    artist: "Ilaiyaraaja",
    url: "Kadhal Kasakkuthaiya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kadhal-Oviyam",
    artist: "Ilaiyaraaja",
    url: "Kadhal-Oviyam-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kalai Nera (Duet)",
    artist: "Ilaiyaraaja",
    url: "Kalai Nera (Duet).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kalai Nera (Male)",
    artist: "Ilaiyaraaja",
    url: "Kalai Nera (Male).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kalloori Manavaraa",
    artist: "Ilaiyaraaja",
    url: "Kalloori Manavaraa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kalyaana Chelai",
    artist: "Ilaiyaraaja",
    url: "Kalyaana Chelai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kanavugal",
    artist: "Ilaiyaraaja",
    url: "Kanavugal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kanavugale-Kanavugale",
    artist: "Ilaiyaraaja",
    url: "Kanavugale-Kanavugale-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kanindhu Varum",
    artist: "Ilaiyaraaja",
    url: "Kanindhu Varum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kanmaniyae",
    artist: "Ilaiyaraaja",
    url: "Kanmaniyae-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kanne-Ithu",
    artist: "Ilaiyaraaja",
    url: "Kanne-Ithu-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kanni Ilam",
    artist: "Ilaiyaraaja",
    url: "Kanni Ilam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kanni Thaene",
    artist: "Ilaiyaraaja",
    url: "Kanni Thaene.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kattiloru-Singakkuttiyam",
    artist: "Ilaiyaraaja",
    url: "Kattiloru-Singakkuttiyam-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kaveriye Kavikuyiley",
    artist: "Ilaiyaraaja",
    url: "Kaveriye Kavikuyiley.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kichu-Kichu",
    artist: "Ilaiyaraaja",
    url: "Kichu-Kichu-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kodikatti Parakkura Raaja",
    artist: "Ilaiyaraaja",
    url: "Kodikatti Parakkura Raaja.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Konjum-Purave",
    artist: "Ilaiyaraaja",
    url: "Konjum-Purave-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kulikkum Pothile",
    artist: "Ilaiyaraaja",
    url: "Kulikkum Pothile.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Kuyile Kuyile Poonguyile",
    artist: "Ilaiyaraaja",
    url: "Kuyile Kuyile Poonguyile.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Maalai-Nera-Kaatre",
    artist: "Ilaiyaraaja",
    url: "Maalai-Nera-Kaatre-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Maamaa Maalai",
    artist: "Ilaiyaraaja",
    url: "Maamaa Maalai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Maanguyelum-Kizhiyum",
    artist: "Ilaiyaraaja",
    url: "Maanguyelum-Kizhiyum-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Machan Maattikittan",
    artist: "Ilaiyaraaja",
    url: "Machan Maattikittan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Machanukku",
    artist: "Ilaiyaraaja",
    url: "Machanukku.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Madhavin-Kovilil",
    artist: "Ilaiyaraaja",
    url: "Madhavin-Kovilil-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Maduran Oyilattam",
    artist: "Ilaiyaraaja",
    url: "Maduran Oyilattam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Maharani-Unnaithedi",
    artist: "Ilaiyaraaja",
    url: "Maharani-Unnaithedi-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Malarthiruchi",
    artist: "Ilaiyaraaja",
    url: "Malarthiruchi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Mama Mama",
    artist: "Ilaiyaraaja",
    url: "Mama Mama.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Mandhiram-Idhu",
    artist: "Ilaiyaraaja",
    url: "Mandhiram-Idhu-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Maniye-Manikuyile",
    artist: "Ilaiyaraaja",
    url: "Maniye-Manikuyile-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Manjakkulichi",
    artist: "Ilaiyaraaja",
    url: "Manjakkulichi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Maths-Tough",
    artist: "Ilaiyaraaja",
    url: "Maths-Tough.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Mega Deepam",
    artist: "Ilaiyaraaja",
    url: "Mega Deepam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Megam-Karukkudhu",
    artist: "Ilaiyaraaja",
    url: "Megam-Karukkudhu-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Munnae-Po",
    artist: "Ilaiyaraaja",
    url: "Munnae-Po-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Muthu Mani",
    artist: "Ilaiyaraaja",
    url: "Muthu Mani.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Muthumani Ther Irukku",
    artist: "Ilaiyaraaja",
    url: "Muthumani Ther Irukku.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Naalum-Naalum",
    artist: "Ilaiyaraaja",
    url: "Naalum-Naalum-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Naan Sonnal (Happy)",
    artist: "Ilaiyaraaja",
    url: "Naan Sonnal (Happy).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Naan-Azhaikiren",
    artist: "Ilaiyaraaja",
    url: "Naan-Azhaikiren-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Naan Sonnal (Male)",
    artist: "Ilaiyaraaja",
    url: "Naan Sonnal (Male).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Naan-Thedum-Sevvanthi-Poovithu",
    artist: "Ilaiyaraaja",
    url: "Naan-Thedum-Sevvanthi-Poovithu-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Nadhi-Odum-Karaiyoram",
    artist: "Ilaiyaraaja",
    url: "Nadhi-Odum-Karaiyoram-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Nammava Thappu Pannina",
    artist: "Ilaiyaraaja",
    url: "Nammava Thappu Pannina.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Nee-Kannil-Vaazhum",
    artist: "Ilaiyaraaja",
    url: "Nee-Kannil-Vaazhum-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Neeya Azhaithadhu",
    artist: "Ilaiyaraaja",
    url: "Neeya Azhaithadhu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Nethu-Oruthara-Oruthara",
    artist: "Ilaiyaraaja",
    url: "Nethu-Oruthara-Oruthara-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Nillatha-Vennila",
    artist: "Ilaiyaraaja",
    url: "Nillatha-Vennila-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ninnukori Varanam",
    artist: "Ilaiyaraaja",
    url: "Ninnukori Varanam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Nooru Vayasu Vaazhaveandum",
    artist: "Ilaiyaraaja",
    url: "Nooru Vayasu Vaazhaveandum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Oh Vennilave",
    artist: "Ilaiyaraaja",
    url: "Oh Vennilave.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ohm Kousalya",
    artist: "Ilaiyaraaja",
    url: "Ohm Kousalya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Onedrodu-Onedranaom",
    artist: "Ilaiyaraaja",
    url: "Onedrodu-Onedranaom-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ooty Kuliru",
    artist: "Ilaiyaraaja",
    url: "Ooty Kuliru.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Orey Raagam",
    artist: "Ilaiyaraaja",
    url: "Orey Raagam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Oru Kili",
    artist: "Ilaiyaraaja",
    url: "Oru Kili.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Oru Koottin Kiligaldhaan",
    artist: "Ilaiyaraaja",
    url: "Oru Koottin Kiligaldhaan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Oru Moonu Mudichaaley",
    artist: "Ilaiyaraaja",
    url: "Oru Moonu Mudichaaley.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Oru Pakkam Oru Nyaayam",
    artist: "Ilaiyaraaja",
    url: "Oru Pakkam Oru Nyaayam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Oru Poonga Vanam",
    artist: "Ilaiyaraaja",
    url: "Oru Poonga Vanam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Oru-Ganam-Oru-Yugamaga",
    artist: "Ilaiyaraaja",
    url: "Oru-Ganam-Oru-Yugamaga-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Oru-Jeevan-Azhaithathu",
    artist: "Ilaiyaraaja",
    url: "Oru-Jeevan-Azhaithathu-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Oru-Raagam-",
    artist: "Ilaiyaraaja",
    url: "Oru-Raagam-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Otti Vandha Singa Kutty",
    artist: "Ilaiyaraaja",
    url: "Otti Vandha Singa Kutty.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Paakkurathum Muraikirathum",
    artist: "Ilaiyaraaja",
    url: "Paakkurathum Muraikirathum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Paarthen Pon Manam",
    artist: "Ilaiyaraaja",
    url: "Paarthen Pon Manam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Pazhutha-Pazham",
    artist: "Ilaiyaraaja",
    url: "Pazhutha-Pazham-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Ponmaaney Ponmaaney",
    artist: "Ilaiyaraaja",
    url: "Ponmaaney Ponmaaney.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Poo-Choodum-",
    artist: "Ilaiyaraaja",
    url: "Poo-Choodum-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Poojaiketha-Poovithu",
    artist: "Ilaiyaraaja",
    url: "Poojaiketha-Poovithu-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Poombarai-Vazhbavane",
    artist: "Ilaiyaraaja",
    url: "Poombarai-Vazhbavane-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Poongum Aagaya Gangai",
    artist: "Ilaiyaraaja",
    url: "Poongum Aagaya Gangai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Poove Eduthu",
    artist: "Ilaiyaraaja",
    url: "Poove Eduthu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Poradada",
    artist: "Ilaiyaraaja",
    url: "Poradada.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Raaja Raajathi",
    artist: "Ilaiyaraaja",
    url: "Raaja Raajathi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Raathiri Neram",
    artist: "Ilaiyaraaja",
    url: "Raathiri Neram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Roja Ponthottam",
    artist: "Ilaiyaraaja",
    url: "Roja Ponthottam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Roja Poo Adivanthathu",
    artist: "Ilaiyaraaja",
    url: "Roja Poo Adivanthathu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Sa-Jinjini",
    artist: "Ilaiyaraaja",
    url: "Sa-Jinjini-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Sami-Kitte-Solli",
    artist: "Ilaiyaraaja",
    url: "Sami-Kitte-Solli-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Senthoora-Poove",
    artist: "Ilaiyaraaja",
    url: "Senthoora-Poove.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Sevanthi-Poo",
    artist: "Ilaiyaraaja",
    url: "Sevanthi-Poo.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Siruvani-Thanni-Kudichi-",
    artist: "Ilaiyaraaja",
    url: "Siruvani-Thanni-Kudichi-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Sollivedu Velli Nilave",
    artist: "Ilaiyaraaja",
    url: "Sollivedu Velli Nilave.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Sondhangale",
    artist: "Ilaiyaraaja",
    url: "Sondhangale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Sonna Paecha Kelu",
    artist: "Ilaiyaraaja",
    url: "Sonna Paecha Kelu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thaalaattu",
    artist: "Ilaiyaraaja",
    url: "Thaalaattu-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thaen Aruviyil",
    artist: "Ilaiyaraaja",
    url: "Thaen Aruviyil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thakadhom Thakadhom",
    artist: "Ilaiyaraaja",
    url: "Thakadhom Thakadhom.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thamaraikodi Thamaraikodi",
    artist: "Ilaiyaraaja",
    url: "Thamaraikodi Thamaraikodi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thappu Thappu",
    artist: "Ilaiyaraaja",
    url: "Thappu Thappu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thathedutha (Happy)",
    artist: "Ilaiyaraaja",
    url: "Thathedutha (Happy).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thathedutha (Sad)",
    artist: "Ilaiyaraaja",
    url: "Thathedutha (Sad).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thedi-Thedi",
    artist: "Ilaiyaraaja",
    url: "Thedi-Thedi-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thendral Kaatrea",
    artist: "Ilaiyaraaja",
    url: "Thendral Kaatrea.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thillumullu Ulagatha",
    artist: "Ilaiyaraaja",
    url: "Thillumullu Ulagatha.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thindaathuthey",
    artist: "Ilaiyaraaja",
    url: "Thindaathuthey.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Thoongatha Vizhigal",
    artist: "Ilaiyaraaja",
    url: "Thoongatha Vizhigal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Un Paarvayil (Duet)",
    artist: "Ilaiyaraaja",
    url: "Un Paarvayil (Duet).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Unakkum-Enakkum",
    artist: "Ilaiyaraaja",
    url: "Unakkum-Enakkum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Un Paarvayil (Male)",
    artist: "Ilaiyaraaja",
    url: "Un Paarvayil (Male).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Unnaiyum Ennaiyum",
    artist: "Ilaiyaraaja",
    url: "Unnaiyum Ennaiyum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Unthan Rajiyathil",
    artist: "Ilaiyaraaja",
    url: "Unthan Rajiyathil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Va Va Mysooru",
    artist: "Ilaiyaraaja",
    url: "Va Va Mysooru.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Vaa Raja",
    artist: "Ilaiyaraaja",
    url: "Vaa Raja.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Vaa Vaa Anbe Anbe",
    artist: "Ilaiyaraaja",
    url: "Vaa Vaa Anbe Anbe.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Vaakkapattu Valavi Pottu",
    artist: "Ilaiyaraaja",
    url: "Vaakkapattu Valavi Pottu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Vaazhkayae-",
    artist: "Ilaiyaraaja",
    url: "Vaazhkayae-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Vambukaara Paatti",
    artist: "Ilaiyaraaja",
    url: "Vambukaara Paatti.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Vasamulla",
    artist: "Ilaiyaraaja",
    url: "Vasamulla.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Vatti-Edutha",
    artist: "Ilaiyaraaja",
    url: "Vatti-Edutha-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Vayalooru-Mayilaattam",
    artist: "Ilaiyaraaja",
    url: "Vayalooru-Mayilaattam-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Veetukku-Veetukku-Vasapadi",
    artist: "Ilaiyaraaja",
    url: "Veetukku-Veetukku-Vasapadi-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Velli Nila",
    artist: "Ilaiyaraaja",
    url: "Velli Nila.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Vethalai Vethalai",
    artist: "Ilaiyaraaja",
    url: "Vethalai Vethalai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Yaaradi-Naan-Thedum",
    artist: "Ilaiyaraaja",
    url: "Yaaradi-Naan-Thedum-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
  {
    title: "Yethivecha",
    artist: "Ilaiyaraaja",
    url: "Yethivecha.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yetho-Ninaivugal",
    artist: "Ilaiyaraaja",
    url: "Yetho-Ninaivugal-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
 
];

let currentSongIndex = 0;
let isPlaying = false;
let userPaused = false;
let isSearchActive = false;
let searchResults = [];
const audio = new Audio();
const trackList = document.getElementById('trackList');
const searchInput = document.getElementById('search');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Function to send media control events to MIT App Inventor
function sendMediaControlEvent(event) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(`MediaControl:${event}`);
  }
}

// Function to send metadata updates to MIT App Inventor
function sendMetadataUpdate(song) {
  if (window.AppInventor) {
    const metadata = {
      title: song.title,
      artist: song.artist,
      coverUrl: song.coverUrl || "default-cover.jpg",
    };
    window.AppInventor.setWebViewString(`MetadataUpdate:${JSON.stringify(metadata)}`);
  }
}

const loadSong = (index) => {
  const song = SONGS[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.url;
  progress.value = 0;
  currentTimeDisplay.textContent = "0:00";
  durationDisplay.textContent = "0:00";
  updateMediaSession(song);
  cover.src = song.coverUrl || "default-cover.jpg";
  // Try to extract cover image from MP3 metadata
  fetch(song.url)
    .then(response => response.blob())
    .then(blob => {
      jsmediatags.read(blob, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            const base64 = btoa(base64String);
            cover.src = `data:${picture.format};base64,${base64}`;
          } else {
            cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
          }
        },
        onError: function (error) {
          console.error("Error reading cover art:", error);
          cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
        }
      });
    })
    .catch(error => {
      console.error("Error fetching MP3 file:", error);
      cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
    });
};

// Play the current song
const playSong = () => {
  userPaused = false;
  isPlaying = true;
  audio.play().catch(error => {
    console.error("Playback failed:", error);
  });
  playPauseButton.textContent = '⏸';
  updateAppInventorState(`Playing: ${SONGS[currentSongIndex].title}`)
  sendMediaControlEvent('play');
};

// Pause the current song (only when user explicitly pauses)
const pauseSong = () => {
  userPaused = true;
  isPlaying = false;
  audio.pause();
  playPauseButton.textContent = '▶️';
  updateAppInventorState(`Paused: ${SONGS[currentSongIndex].title}`);
  sendMediaControlEvent('pause');
};

// Toggle play/pause
const togglePlayPause = () => {
  isPlaying ? pauseSong() : playSong();
};

// Play the next song
const playNextSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex + 1) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex + 1) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('next');
};

// Play the previous song
const playPrevSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex - 1 + searchResults.length) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('previous');
};

// Update the progress bar and time display
const updateProgress = () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100 || 0;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
};

// Format time for display
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Handle seeking through the progress bar
const handleSeek = (e) => {
  const seekTime = (e.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
};

// Update WebViewString to prevent App Inventor from stopping
updateAppInventorState("Playing: " + SONGS[currentSongIndex].title + " - " + Math.floor(audio.currentTime) + "s");

// Debounce function to limit the rate of execution
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Filter the song list based on the search input
const filterSongs = debounce(() => {
  const query = searchInput.value.toLowerCase();
  searchResults = SONGS.filter((song) => song.title.toLowerCase().includes(query));
  isSearchActive = query.length > 0;
  renderSongList(searchResults);
}, 300);

const renderSongList = (songs) => {
  trackList.innerHTML = ''; // Clear the existing list
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('track');

    // Create an image element for the cover
    const img = document.createElement('img');
    img.src = "default-cover.jpg"; // Set default initially
    img.alt = song.title;
    img.classList.add('track-cover'); // Add CSS class for styling

    // Array of random cover images (URLs or Base64 data)
    const defaultCovers = [
      "ilaiyaraja-cover-1.png",
      "ilayaraja-cover-2.png",
      "ilayaraja-cover-3.png",
      "ilayaraja-cover-4.png",
      "ilayaraja-cover-5.png"
     

    ];

    // Function to get a random cover image
    function getRandomCover() {
      return defaultCovers[Math.floor(Math.random() * defaultCovers.length)];
    }

    // Set a random cover icon immediately
    img.src = getRandomCover();

    // Create a div for track info
    const trackInfo = document.createElement('div');
    trackInfo.classList.add('track-info');

    // Create a div for the title
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = song.title;
    trackInfo.appendChild(trackTitle);

    li.appendChild(img);
    li.appendChild(trackInfo);

    li.addEventListener('click', () => {
      if (isSearchActive) {
        currentSongIndex = SONGS.indexOf(song);
      } else {
        currentSongIndex = index;
      }
      loadSong(currentSongIndex);
      playSong();
    });

    trackList.appendChild(li);
  });
};

// Function to update media session metadata and send status to App Inventor
const updateMediaSession = (song) => {
  if ('mediaSession' in navigator) {
    // Default to provided coverUrl or a fallback image
    let artworkUrl = song.coverUrl || "default-cover.jpg";

    // Try extracting embedded cover art from MP3 metadata
    fetch(song.url)
      .then(response => response.blob())
      .then(blob => {
        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            const picture = tag.tags.picture;
            if (picture) {
              let base64String = "";
              for (let i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
              }
              artworkUrl = `data:${picture.format};base64,${btoa(base64String)}`;
            }

            // Update media session with extracted or fallback artwork
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            // Send update to App Inventor
            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title}`);
          },
          onError: (error) => {
            console.error("Error extracting metadata:", error);

            // Use fallback cover if metadata extraction fails
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (No Cover Found)`);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching MP3 file:", error);

        // Use fallback cover if fetching fails
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.title,
          artist: song.artist,
          album: song.album || "Unknown Album",
          artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
        });

        updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (Failed to Fetch)`);
      });
  }
};

  // Notification functions
  function showNotification() {
    console.log("Showing notification...");
    // Add your notification UI logic here
  }

  function hideNotification() {
    console.log("Hiding notification...");
    // Add your notification UI logic here
  }

// Ensure playback continues when app is in the background
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    showNotification();
  } else {
    hideNotification();
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Resume after visibility change failed:", error);
      });
    }
  }
});


// Handle system-triggered pauses (e.g., app backgrounded)
audio.addEventListener('pause', (event) => {
  if (!userPaused && isPlaying) {
    // Automatically resume playback if paused by the system (not user)
    setTimeout(() => {
      audio.play().catch(error => {
        console.error("Auto-resume failed:", error);
      });
    }, 100);
  }
});

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    isSearchActive = false;
    searchResults = [];
    renderSongList(SONGS);
  } else {
    filterSongs();
  }
});

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', filterSongs);
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Initial setup
loadSong(currentSongIndex);
renderSongList(SONGS);
setupMediaSession();
