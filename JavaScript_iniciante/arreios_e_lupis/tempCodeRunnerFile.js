var videoGames = ["PC", "PS4", "XBOX", "3DS"];

for (var item = 0; item < 4; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

videoGames.forEach(function (item) {
  console.log(item);
});