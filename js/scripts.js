window.onload = function () {
  function determineTriangleType(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      return "NOT a triangle";
    } else if (a === b && b === c) {
      return "Equilateral";
    } else if (a === b || b === c || a === c) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  }
  document.getElementById('triangle-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const side1 = Number(document.getElementById('side1').value);
    const side2 = Number(document.getElementById('side2').value);
    const side3 = Number(document.getElementById('side3').value);

    const result = determineTriangleType(side1, side2, side3);

    document.getElementById("result").textContent = "This is a " + result + " triangle.";
  });
}