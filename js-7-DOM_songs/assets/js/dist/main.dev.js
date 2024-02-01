"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var playList = [{
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  }, {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  }, {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  }, {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  }, {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  }, {
    author: "AC/DC",
    song: "BACK IN BLACK"
  }, {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  }, {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }];
  var listContainer = document.createElement("div");
  listContainer.classList.add("playlist");
  var listTitle = document.createElement("h2");
  listTitle.textContent = "Playlist";
  var olElement = document.createElement("ol");
  playList.forEach(function (item) {
    var liElement = document.createElement("li");
    var strongElement = document.createElement("strong");
    strongElement.textContent = item.author;
    liElement.appendChild(strongElement);
    var emElement = document.createElement("em");
    emElement.textContent = " - ".concat(item.song);
    liElement.appendChild(emElement);
    olElement.appendChild(liElement);
  });
  listContainer.appendChild(listTitle);
  listContainer.appendChild(olElement);
  document.body.appendChild(listContainer);
});