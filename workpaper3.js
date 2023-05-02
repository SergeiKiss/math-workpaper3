// import _ from 'lodash';

console.log('Вариант 5');
console.log('Вариационный ряд');
const arr = [16, 18, 25, 17, 16, 15, 18, 14, 30, 22, 14, 17, 15, 12, 1,
  18, 27, 7, 17, 15, 13, 16, 22, 8, 17, 12, 10, 17, 25, 10];
const { length } = arr;
console.log(arr);
console.log('Длина:', length);

// 1.Отсортировать вариационный ряд по возрастанию
console.log('\n1.Отсортировать вариационный ряд по возрастанию');
const sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);

// 2.Изобразить вариационный ряд и в виде таблицы с указанием значения
// переменной и частотой возникновения этого значения
console.log('\n2.Изобразить вариационный ряд и в виде таблицы с указанием значения переменной и частотой возникновения этого значения');

const freqObj = sortedArr.reduce((acc, num) => {
  acc[num] = acc[num] ? acc[num] + 1 : 1;
  return acc;
}, {});

console.log('Первый столбец - значение');
console.log('Второй столбец - частота');

console.log('------');
Object.entries(freqObj).forEach(([num, freq]) => {
  let resultStr = '|';
  if (num < 10) resultStr += ' ';
  resultStr += `${num}|${freq}|`;
  console.log(resultStr);
});
console.log('------');

// 3.Изобразить графически данные пункта 2 (ОХ- переменные, ОУ-частота
// возникновения переменных)

console.log('\n3. Изобразить графически данные пункта 2 в виде гистограммы');

const freqArr = Object.values(freqObj);
const maxFreq = Math.max(...freqArr);


for (let i = maxFreq; i > 0; i--) {
  let resultStr = ' ';
  freqArr.forEach((freq) => {
    if (freq >= i) {
      resultStr += '* ';
    } else {
      resultStr += '  ';
    }
  });
  resultStr += '';
  console.log(resultStr);
}
console.log('------------------------------');


// 4.Определить среднее значение выборки (мат.ожидание)
console.log('\n4.Определить среднее значение выборки (мат.ожидание)');
const expValue = sortedArr.reduce((acc, num) => acc + num, 0) / length;
console.log('Мат.ожидание:', expValue);

// 5.Определить дисперсию
console.log('\n5.Определить дисперсию');
const disp = sortedArr.reduce((acc, item) => (item - expValue) ** 2, 0) / length;
console.log('Дисперсия:', disp);

// 6.Определить стандартное отклонение (среднее квадратичное
// отклонение)
console.log('\n6.Определить стандартное отклонение (среднее квадратичное отклонение)');
const stdDeviation = Math.sqrt(disp);
console.log('Среднее квадратичное отклонение:', stdDeviation);

// 7.Определить медиану
console.log('\n7.Определить медиану');
let median;
const mid = Math.floor(length / 2);
if (length % 2 === 0) {
  median = (sortedArr[mid - 1] + sortedArr[mid]) / 2;
} else {
  median = sortedArr[mid];
}
console.log('Медиана:', median);

// 8.Определить моду
console.log('\n8.Определить моду');
const mode = Object.entries(sortedArr
  .reduce((acc, num) => {
    const newAcc = { ...acc };
    if (newAcc[num]) newAcc[num] += 1;
    else newAcc[num] = 1;
    return newAcc;
  }, {}))
  .sort(([, v1], [, v2]) => v1 - v2);
console.log('Мода:', mode[mode.length - 1][0]);
