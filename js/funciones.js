function validarNota(input) {
  let nota = parseFloat(input.value);

  const valido = !isNaN(nota) && nota >= 1 && nota <= 10;

  if (nota < 1 || isNaN(nota)) {
      nota = 1;
  }

  if (nota > 10) {
      nota = 10;
  }

  input.value = nota;
  input.style.color = valido ? 'green' : 'red';
}

function calcularPromedio() {
  const matematica = parseFloat(document.getElementById('matematica').value);
  const lengua = parseFloat(document.getElementById('lengua').value);
  const efsi = parseFloat(document.getElementById('efsi').value);

  if (isNaN(matematica) || isNaN(lengua) || isNaN(efsi)) {
      alert('Debe completar todas las notas');
      return;
  }

  const promedio = (matematica + lengua + efsi) / 3;
  const resultadoDiv = document.getElementById('resultado');

  resultadoDiv.innerHTML = `El promedio del alumno es: ${promedio.toFixed(2)}`;
  resultadoDiv.style.color = promedio >= 6 ? 'green' : 'red';
}

function mostrarMateriaMaxima() {
  const matematica = parseFloat(document.getElementById('matematica').value);
  const lengua = parseFloat(document.getElementById('lengua').value);
  const efsi = parseFloat(document.getElementById('efsi').value);

  if (isNaN(matematica) || isNaN(lengua) || isNaN(efsi)) {
      alert('Debe completar todas las notas');
      return;
  }

  const notas = { 'Matemática': matematica, 'Lengua': lengua, 'EFSI': efsi };
  const maxNota = Math.max(...Object.values(notas));
  const materiasMaximas = Object.keys(notas).filter(materia => notas[materia] === maxNota);

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `La(s) materia(s) con mayor nota: ${materiasMaximas.join(', ')}`;
  resultadoDiv.style.color = 'blue';
}
