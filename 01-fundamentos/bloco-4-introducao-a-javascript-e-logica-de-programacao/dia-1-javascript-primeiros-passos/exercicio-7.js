const note = 120;

if (note < 0 || note > 100) {
    console.log('Erro, nota inválida!');
} else if (note >= 90) {
    console.log('A');
} else if (note >= 80) {
    console.log('B');
} else if (note >= 70) {
    console.log('C');
} else if (note >= 60) {
    console.log('D');
} else if (note >= 50) {
    console.log('E');
} else {
    console.log('F');
}
