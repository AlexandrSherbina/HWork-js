'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();




let appData = {
    budjet: money,     
    expenses: {}, 
    optionalExpances: {}, 
    income: [], 
    timeData: time,
    savings: true
};
//1-й способ
function chooseExpanses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('“Введите обязательную статью расходов в этом месяце”', ''),
            b = prompt('“Во сколько обойдется?”', '');
 
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('bad result');
            i--;
        }
    }
}
chooseExpanses();
//2-й способ 
// let i = 0;
// while (i < 2) { 
//    let a = prompt('“Введите обязательную статью расходов в этом месяце”', ''),
//         b = prompt('“Во сколько обойдется?”', '');

//         if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             appData.expenses[a] = b;

//           }  else {
//                  console.log('bad result');
//                  i--;
//           }
//              i++;
// };
//3-й способ 
// let i = 0;
//     do { 
//         let a = prompt('“Введите обязательную статью расходов в этом месяце”', ''),
//             b = prompt('“Во сколько обойдется?”', '');

//         if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//                 && a != '' && b != '' && a.length < 50) {
//                     console.log('done');
//                     appData.expenses[a] = b;

//                   }  else {
//                       console.log('bad result');
//                       i--;
//                            }
//                      i++;
//         } while (i < 2);
function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert("Ежедневный бюджет:" +  appData.moneyPerDay);
}
detectDayBudget();

 
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка")
   } else if (appData.money > 100 &&  appData.moneyPerDay < 2000) {
       console.log("Средний уровень достатка");
   } else if (appData.moneyPerDay > 2000) {
       console.log("Высокий уровень достатка");
   } else {
       console.log("ПРоизошла ошибка");
   }
}




function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
    }
}
checkSavings();

function chooseOptExpences() {

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpances[i] = questionOptExpenses;
        console.log(appData.optionalExpances);
    }
}
