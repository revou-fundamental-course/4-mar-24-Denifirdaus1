// Deklarasi variabel untuk elemen HTML
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const ageInput = document.getElementById('age');
const calculateButton = document.getElementById('calculate');
const resetButton = document.getElementById('reset');
const bmiResult = document.getElementById('bmi-result');
const interpretasi = document.getElementById('interpretasi');
const sexInput = document.getElementById('sex-man');

// Menambahkan event listener untuk tombol "Hitung BMI"
calculateButton.addEventListener('click', calculateBMI);

// Menambahkan event listener untuk tombol "Reset"
resetButton.addEventListener('click', resetForm);

// Fungsi untuk menghitung BMI dan menampilkan hasilnya
function calculateBMI() {
  // Mendapatkan nilai berat badan, tinggi badan, dan usia dari input
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;
  const age = parseFloat(ageInput.value);

  // Menghitung BMI
  const bmi = weight / (height * height);

  // Menampilkan hasil BMI dengan dua angka desimal
  bmiResult.textContent = bmi.toFixed(2);

  // Menentukan interpretasi hasil BMI
  let interpretation = '';
  if (bmi < 18.5) {
    interpretation = 'Kekurangan berat badan';
  } else if (bmi >= 18.5 && bmi <= 24.99) {
    interpretation = 'Normal';
  } else if (bmi >= 25.0 && bmi <= 29.99) {
    interpretation = 'Kelebihan berat badan';
  } else if (bmi >= 30.0) {
    interpretation = 'Kegemukan';
  }

  // Menampilkan interpretasi hasil BMI
  interpretasi.textContent = interpretation;
}

// Fungsi untuk mereset formulir BMI
function resetForm() {
  // Mengosongkan nilai input dan hasil BMI
  weightInput.value = '';
  heightInput.value = '';
  ageInput.value = '';
  bmiResult.textContent = '';
  interpretasi.textContent = '';
  sexInput.checked = false;

  // Menghapus kelas dari elemen hasil BMI dan interpretasi
  bmiResult.classList.remove('bmi-result');
  interpretasi.classList.remove('interpretasi');
}


