// Functionize Minecraft Fishing Start Code

// Lets
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let fishbin = document.getElementById("fishBin");

// Event Listener
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
document.getElementById("amtOfTimes").addEventListener("change", amountOfTimes);
document.getElementById("sortFish").addEventListener("click", sortFish);

// Fish count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

function fishBtnClicked() {
  let character = document.getElementById("character-select").value;
  // Determine Selected Character
  if (character === "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.7) {
      fishbin.innerHTML += '<img src="img/Raw-Cod.png"/>';
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
    } else if (randNum < 0.9) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      fishbin.innerHTML += '<img src="img/Raw-Salmon.png"/>';
      numSalmon++;
    } else if (randNum < 0.95) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      fishbin.innerHTML += '<img src="img/Tropical-Fish.png"/>';
      numTropical++;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      fishbin.innerHTML += '<img src="img/Pufferfish.png"/>';
      numPuffer++;
    }
    document.getElementById("num-cod").innerHTML = numCod;
    document.getElementById("num-salmon").innerHTML = numSalmon;
    document.getElementById("num-tropical").innerHTML = numTropical;
    document.getElementById("num-puffer").innerHTML = numPuffer;
  } else if (character === "alex") {
    // Alex Simulator
    let randNum = Math.random();
    if (randNum < 0.1) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      fishbin.innerHTML += '<img src="img/Raw-Cod.png"/>';
      numCod++;
    } else if (randNum < 0.2) {
      fishbin.innerHTML += '<img src="img/Raw-Salmon.png"/>';
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
    } else if (randNum < 0.5) {
      fishbin.innerHTML += '<img src="img/Tropical-Fish.png"/>';
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
    } else {
      fishbin.innerHTML += '<img src="img/Pufferfish.png"/>';
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
    }
    document.getElementById("num-cod").innerHTML = numCod;
    document.getElementById("num-salmon").innerHTML = numSalmon;
    document.getElementById("num-tropical").innerHTML = numTropical;
    document.getElementById("num-puffer").innerHTML = numPuffer;
  } else {
    // Villiager Simulator
    let randNum = Math.random();
    if (randNum < 0.25) {
      fishbin.innerHTML += '<img src="img/Raw-Cod.png"/>';
      numCod++;
    } else if (randNum < 0.5) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      fishbin.innerHTML += '<img src="img/Raw-Salmon.png"/>';
      numSalmon++;
    } else if (randNum < 0.75) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      fishbin.innerHTML += '<img src="img/Tropical-Fish.png"/>';
      numTropical++;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      fishbin.innerHTML += '<img src="img/Pufferfish.png"/>';
      numPuffer++;
    }
    document.getElementById("num-cod").innerHTML = numCod;
    document.getElementById("num-salmon").innerHTML = numSalmon;
    document.getElementById("num-tropical").innerHTML = numTropical;
    document.getElementById("num-puffer").innerHTML = numPuffer;
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
}

function amountOfTimes() {
  let numFish = numCod + numSalmon + numTropical + numPuffer;
  let amtAsked = Number(document.getElementById("amtOfTimes").value);
  let numTarget = numFish + amtAsked;
  while (numFish < numTarget) {
    fishBtnClicked();
    // NOT DONE
    numFish++;
  }
}

function sortFish() {
  // Clear out inv section
  fishbin.innerHTML = "";

  // let codPics = (fishbin.innerHTML = "<img src ='img/Raw-Cod.png'/>");

  let codAdded = 0;
  while (numCod != codAdded) {
    fishbin.innerHTML += "<img src ='img/Raw-Cod.png'/>";
    codAdded++;
  }

  let salmonAdded = 0;
  while (numSalmon != salmonAdded) {
    fishbin.innerHTML += "<img src ='img/Raw-Salmon.png'/>";
    salmonAdded++;
  }

  let tropicalAdded = 0;
  while (numTropical != tropicalAdded) {
    fishbin.innerHTML += "<img src ='img/Tropical-Fish.png'/>";
    tropicalAdded++;
  }

  let pufferAdded = 0;
  while (numPuffer != pufferAdded) {
    fishbin.innerHTML += "<img src ='img/Pufferfish.png'/>";
    pufferAdded++;
  }
}
