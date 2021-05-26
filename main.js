let length = 0;
let sumbitedButton = false;
function sumbit(id) {
  length = document.getElementById(`${id}`).value;
  if (length > 25) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Number is to much Big",
    });
  } else {
    if (sumbitedButton) displayBoxes(1);
    else displayBoxes(0);
    sumbitedButton = true;
  }
}

function createBoxes(array) {
  for (let i = 0; i < array.length; i++) {
    document.getElementById("display").innerHTML += "<br>";
    for (let j = 0; j < array[i].length; j++) {
      document.getElementById(`display`).innerHTML += `
      <div id=${array[i][j]}> </div>
      `;
    }
  }
}

function displayBoxes(option) {
  let array = logic(length);
  if (option == 1) {
    document.getElementById("display").innerHTML = "";
    createBoxes(array);
    coloring(length);
  } else {
    createBoxes(array);
    coloring(length);
  }
}

function logic(n) {
  let length = n;
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push([]);
  }
  let counter = 1;
  let startRow = 0;
  let endRow = length - 1;
  let startColumn = 0;
  let endColumn = length - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    //top
    for (let i = startColumn; i <= endColumn; i++) {
      array[startRow][i] = counter;
      counter++;
    }
    startRow++;

    //rigth
    for (let i = startRow; i <= endRow; i++) {
      array[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    //bottom
    for (let i = endColumn; i >= startColumn; i--) {
      array[endRow][i] = counter;
      counter++;
    }
    endRow--;
    //left
    for (let i = endRow; i >= startRow; i--) {
      array[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return array;
}

function fillArrayWithRandomColor(count) {
  let array = [];
  let x = 0;
  let counter = 0;
  for (let i = 0; i <= count; i++) {
    if (counter == 0) {
      x = i * 5;
      if (x > 355) {
        counter = 1;
        x = 0;
      }
      array.push(`hsl(${x},50%,50%)`);
    }
    if (counter == 1) {
      x = i * 5;
      array.push(`hsl(${x},75%,75%)`);
    }
  }
  return array;
}

function coloring(length) {
  let colorsArray = fillArrayWithRandomColor(length * length);
  for (let i = 1; i <= length * length; i++) {
    document.getElementById(`${i}`).style.backgroundColor = `${colorsArray[i]}`;
  }
}
