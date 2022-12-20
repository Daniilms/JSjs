

function calculate(AllSum, count, promo = null) {
  if (promo === 'ДАРИМ300' && AllSum >= 300) {
    AllSum -= 300;
  } else if (AllSum <= 300 && promo === 'ДАРИМ300') { 
    AllSum = 0;
  }
  if (count >= 10) {
   AllSum = AllSum - AllSum * 0.05;
  }
  if (AllSum >= 50000) {
    AllSum = AllSum - AllSum * (1 / 5);
  }
  if (promo === 'СКИДКА15' && AllSum >= 20000) {
    AllSum = AllSum - AllSum * 0.15;
  }
  return AllSum;
}
console.log(calculate(300, 2));
console.log(calculate(1300, 4, 'ДАРИМ300'));
console.log(calculate(300, 2, 'ДАРИМ300'));
console.log(calculate(300, 2, 'ДАРИМ300'));