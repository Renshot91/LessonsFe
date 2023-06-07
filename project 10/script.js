// const names =[ "Alexandr", "Yulia", "Arsen"]
// console.log(names[1]) 


// const number = [10, 15, 0, 100, 21]
// console.log(number [2])
// const arr = ["Hello", 100, true, ["Hello", "Hello World"]]

// const countries = ["Germany", "France", "UK"]
// console.log(countries.length)

// countries.push("Spain")
// console.log(countries.length)

// countries[countries.length -1]


// const names =[ "Alexandr", "Yulia", "Arsen"]
// const name = prompt("Ведите имя")
// const name1 = prompt("Ведите имя")
// names.push(name, name1)
// console.log(names)


// for (let i = 0; i < 10; i++) {
//     console.log("Hello")
// }
// for(let i = 0; i < 50; i++) {
//     console.log("Hello")
// }


// for(let i = 0; i < 100; i++) {
//     console.log(i + 1)
// }

// for(let i = 0; i < 100; i++) { /*четные числа*/
// if(i % 2 == 0) {  /* заместь 0 ставим 1 и будет нечетные числа */
//     console.log(i)
// }
// }


// const names = ["Arsen", "Sergey", "Bogdan"]
// console.log(names[0])

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }


// const numbers = [10, 20, 5, 11, 6, 4] 

//     for(let i = 0; i < numbers.lenght; i++) {
//      console.log(numbers[i] ** 2)
//     }



// const countries = ["Germanny", "France", "Spain", "Chech"]
// for(let i = 0; i < countries.length; i++)
// console.log(countries[i].toUpperCase())

for (let i = 0; i < 10; i++) {
    if (i === 5) {
      console.log('continue')
      continue
    }
    console.log(i)
  }
  
// цикл for

//     for(инициализация; условие; шаг) {
//         тело цикла
//     }

//         1. инициализация - создаем счетчик. let i - iteration, итерация - повторение
//         2. условие - момент до которого наш счетчик должен выполняться
//         3. шаг - после каждого действия, увеличиваем шаг счетчика до момента завершения
//             i++ - увеличение переменной на 1

//         Алгоритм работы цикла:
//             1. Выполняется начало - let i = 0
//             2. Выполняется условие - i < 10
//                 Если условие true - выполняется действие в теле цикла - console.log("Hello")
               
//             3. Выполняется шаг - увеличение переменной i на 1, Опять переходим к пункту 2

//              Если false - выход из цикла

//         let i = 0
//         i = i + 1 // 1
//         i+= 1
//         i++ - инкремент

//         i = i + 2
//         i += 2 -