const angleOne = 90;
const angleTwo = 100;
const angleThree = 110;

let sumOfAngles = angleOne + angleTwo + angleThree;

let allAnglesArePositives = angleOne > 0 && angleTwo > 0 && angleThree > 0;

if (allAnglesArePositives) {
    if (sumOfAngles === 180) {
      console.log(true);
    } else {
      console.log(false);
    };
  } else {
    console.log('Erro: ângulo inválido');
  }

  console.log(sumOfAngles);
  