let myArr = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  divOfBlocks = "",
  section = document.querySelector("section"),
  button = document.createElement("button"),
  table = document.createElement("table");

let isPlay = true;
for (let i = 0; i < myArr.length; i++) {
  divOfBlocks += `
     <tr>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     </tr>`;
}

button.innerHTML = "START!";
innerHTML = table.innerHTML = divOfBlocks;
section.appendChild(table);
section.appendChild(button);

const arrCount = 23;

let blocks = document.getElementsByTagName("td");

function randomNumGen() {
  for (let i = 0; i < 3; i++) {
    let randomNum = Math.floor(Math.random() * arrCount);
    let isSilver =
      myArr[0][randomNum] == 1 ||
      myArr[1][randomNum] == 1 ||
      myArr[2][randomNum] == 1 ||
      myArr[3][randomNum] == 1 ||
      myArr[4][randomNum] == 1;
    if (isSilver) {
      i = --i;
      continue;
    }
    if (randomNum < 5) {
      myArr[0][randomNum] = 1;
    } else if (randomNum >= 5 && randomNum < 10) {
      randomNum -= 5;
      myArr[1][randomNum] = 1;
    } else if (randomNum >= 10 && randomNum < 15) {
      randomNum -= 10;
      myArr[2][randomNum] = 1;
    } else if (randomNum >= 15 && randomNum < 20) {
      randomNum -= 15;
      myArr[3][randomNum] = 1;
    } else {
      randomNum -= 20;
      myArr[4][randomNum] = 1;
    }
  }
  silverBlocks();

  button.removeEventListener("click", randomNumGen);
}
button.addEventListener("click", randomNumGen);
let countGreen = 0;
function silverBlocks() {
  let myNum = 0;
  let randommedNumbersArray = [];
  for (let i = 0; i < myArr.length; i++) {
    for (let a = 0; a < myArr[i].length; a++) {
      if (myArr[i][a] == 1) {
        randommedNumbersArray.push(myNum);
        blocks[myNum].style.backgroundColor = "silver";
      }
      blocks[myNum].addEventListener("click", function changeColor() {
        if (myArr[i][a] == 1) {
          this.style.backgroundColor = "green";
          countGreen++;
          if (countGreen == 3) {
            setTimeout(function () {
              alert("Next level!!!");
            }, 200);

            randomNumGen();
          }
        } else {
          this.style.backgroundColor = "red";
          setTimeout(function () {
            alert("you lose");
          }, 200);

          randommedNumbersArray.forEach((value, index) => {
            blocks[value].style.backgroundColor = "silver";
          });
        }
      });
      myNum++;
    }
  }
  myNum = 0;

  setTimeout(() => {
    for (let i = 0; i < myArr.length; i++) {
      for (let a = 0; a < myArr[i].length; a++) {
        if (myArr[i][a] === 1) {
          blocks[myNum].style.backgroundColor = "white";
        }
        myNum++;
      }
    }
  }, "1000");
}
