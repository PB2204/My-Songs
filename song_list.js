//song list
let All_song = [
   {
     name: "Rise Through Melodies",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "Pabitra Banerjee"
   },
   {
     name: "Rupam Islam",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Pabitra Banerjee"
   },
   {
     name: "Igniting Affection",
     path: "music/3.wav",
     img: "images/3.jpg",
     singer: "Pabitra Banerjee"
   },
   {
    name: "Harmony Of The Cosmos",
    path: "music/4.wav",
    img: "images/4.jpg",
    singer: "Pabitra Banerjee"
  },
   {
     name: "Celestial Dawn",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Pabitra Banerjee"
   },
   {
    name: "Starry Breeze",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Pabitra Banerjee"
   },
   {
    name: "Soul Soaring",
    path: "music/7.mp3",
    img: "images/7.jpg",
    singer: "Pabitra Banerjee"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/