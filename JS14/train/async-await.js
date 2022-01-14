// CALLBACK 
// CALLBACK 2 VARIANT
// PROMISE 
// CALLBACK PRAVILNIY VARIANT
// ASYNC AWAIT
// EARLY RETURN PATTERN 
// PROMISEALL
// PROMISESETTLED 
// REDUCE

// -------------------------------------------------------------------------------------------------
// CALLBACK
// let money = 100;
// function goWork(isJobDone , callback) {
//     setTimeout(() => {
//         if(isJobDone){
//             money += 400;
//             console.log("Job done");
//             callback();
//         } else {
//             console.log("No mone no honey");
//         }
//     }, 1000);
// }

// function flyToEgypt(dollars) {
//     setTimeout(() => {
//         console.log(dollars,"$");
//         if(dollars > 400){
//             console.log("Hooray");
//         } else {
//             console.log("No Egypt");
//         }
//     }, 1000);
// }

// goWork(true , () => {
//     flyToEgypt(money)
// });

// -------------------------------------------------------------------------------------------------
// CALLBACK variant 2 raznica v konce i vnutri funkcii goWork pri vizove callbak
// function goWork(isJobDone , callback) {
//     setTimeout(() => {
//         if(isJobDone){
//             money += 400;
//             console.log("Job done");
//             callback(money);
//         } else {
//             console.log("No mone no honey");
//         }
//     }, 1000);
// }


// let money = 100;

// function flyToEgypt(dollars) {
//     setTimeout(() => {
//         console.log(dollars,"$");
//         if(dollars > 400){
//             console.log("Hooray");
//         } else {
//             console.log("No Egypt");
//         }
//     }, 1000);
// }

// goWork(true , flyToEgypt);

// -------------------------------------------------------------------------------------------------
// PROMISE 
// vnutri funkcii doljen bit return
// return doljen vozvrashat promise s callback funkciey vnutri
// callback funkciya doljna imet 2 parametra resolve i reject
// v resolve peredaem peremennuyu kotoraya doljna obrabotatsya
// resolve prinimaet tolko 1 parametr ( esli xocesh bolshe mojno poprobovat massiv ili obyekt)
// v reject oshibku (prichina polomki). rejecta mojet i ne bit

// po itoqu posle vizova pervoy funkcii mi return-aem v then tu funkciyu kotoruyu xotim chtob delalas dalshe po chainu
// kstati v perviy then kak arqument peredaetsya return ot pervoy funkcii i dalshe po cepochke

// let money = 100;

// function goWork(isJobDone) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             if(isJobDone){
//                 money += 400;
//                 console.log("Job done");
//                 resolve(money)
//             } else {
//                 console.log("No mone no honey");
//                 reject("Oops")
//             }
//         }, 1000);
//     })
// }

// function flyToEgypt(dollars) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(dollars,"$");
//             if(dollars > 400){
//                 console.log("Hooray");
//                 resolve("Drink beer");
//             } else {
//                 console.log("No Egypt");
//                 reject("Mdeee");
//             }
//         }, 3000);
//     })
// }

// function eat() {
//     return new Promise((resolve, reject) => {
//         if (1 < 0) {
//             resolve("Omnomnom");
//         } else {
//             reject("Om");
//         }
//     })
// }

// // payment vnizu eto resolve kotoriy v funkcii gowork
// goWork(true)
// .then(payment => {
//     return flyToEgypt(payment);
// })
// .then(result => {
//     console.log(result);
//     return eat();
// })
// .then(resultOfEat => {
//     console.log(resultOfEat);
// })
// .catch(error => console.error("Reject : " + error))
// .finally(()=>{
// console.log("FINAL");
// })
// v dannom sluchae esli catch dopustim poymaet error v goWork to posleduyushie then ne budut vipolnatsya 
// takje esli poymaet error koqda budet dopustim perviy then vtoroy then uje ne budet vipolnatsya
// a finally eto funkciya kotoraya vipolnayetsya v lubom sluchae ( est error ili eqo netu bez raznici)

// --------------------------------------------------------------------------------------------------------------
// CALLBACK PRAVILNIY (NO IF ELSE VNIZU NE XOROSHAYA PRAKTIKA)

// let money = 100;

// function goWork(isJobDone, callback) {
//     setTimeout(() => {
//         if(isJobDone){
//             money += 400;
//             console.log("Job done");
//             // error first data last (error = null) (data = money)
//             callback(null, money);
//         } else {
//             // error first data last (error = "No money no honey") (data = null)
//             callback("No money no honey", null)
//         }
//     }, 1000);
// }

// function flyToEgypt(dollars, callback) {
//     setTimeout(() => {
//         console.log(dollars,"$");
//         if(dollars > 400){
//             callback(null,"Hooray")
//         } else {
//             callback("flyToEgypt Error",null)
//         }
//     }, 3000);
// }

// goWork(false, (err, payment) => {
//     if (err) {
//         console.log(err);
//     } else {
//         flyToEgypt(payment, (err1, data) => {
//             if (err){
//                 console.error(err1)
//             } else {
//                 console.log(data);
//             }
//         })
//     }
// })

// --------------------------------------------------------------------------------------------------------------
// ASYNC AWAIT

// dla toqo chtobi asyn await rabotal nujen Promise obyazatelno
// let money = 100;

// function goWork(isJobDone) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             if(isJobDone){
//                 money += 400;
//                 console.log("Job done");
//                 resolve(money)
//             } else {
//                 console.log("No mone no honey");
//                 reject("Oops")
//             }
//         }, 1000);
//     })
// }

// function flyToEgypt(dollars) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(dollars,"$");
//             if(dollars > 400){
//                 console.log("Hooray");
//                 resolve("Drink beer");
//             } else {
//                 console.log("No Egypt");
//                 reject("Mdeee");
//             }
//         }, 3000);
//     })
// }

// async function holiday() {
//     const payment = await goWork(true);
//     const result = await flyToEgypt(payment);
//     console.log(payment, "payment");
//     console.log(result, "result");
// }
// chtob slovit oshibki delaem toje samoe tolko oborachivaem vse v try i catch
// async function holiday() {
//     try {
//         const payment = await goWork(true);
//         const result = await flyToEgypt(payment);
//         console.log(payment, "payment");
//         console.log(result, "result");
//     }catch(e){
//         console.info(e);
//     }
// }
// holiday();

// --------------------------------------------------------------------------------------------------------------
// Early return pattern
// function xxx(a,b){
//     if (a>b){
//         return "good"
//     }
//     return "bad"
// }
// let s = xxx(1,2);
// console.log(s);
// kak vidim else ne ispolzuetsya

// --------------------------------------------------------------------------------------------------------------
// PROMISE ALL
// raznica promise i promise all
// promise zapuskaet funkcii poocheredno
// promiseall zapuskaet funkcii odnovremenno (ispolzuetsya dla funkciy kotorie ne zavisyat druq ot druqa)
// promiseall po vremeni zanimaet stolko vremeni za skolko samaya dolqaya funkciya vipolnaetsya
// t.e. esli 1 funkciya delaetsya za 3 sek a 2 za 5 to promiseall zaymet 5 sek
// a promise v takom primere budet vipolnatsya 8 sekund tak kak on delaet ix poocheredno
// PROBLEMA RESOLVEALL v tom chto esli odin iz promisov rejectnetsya to vse promisi padayut
// const p1 = new Promise((resolve, reject) => {
//     if (2<1){
//         resolve(1);
//     } else reject("Err p1");
// })
// const p2 = new Promise((resolve, reject) => {
//     if (2>1){
//         resolve(2);
//     } else reject("Err p2");
// })

// Promise.all([p1,p2])
// .then(res => {
//     console.log(res)
// })
// .catch(e => {
//     console.log("ERRRRRR" , e);
// })

// primer kolxoza na promiseall poymat oshibki v arqumentax
// Promise.all([p1.catch(()=>{}),p2])
// .then(res => {
//     console.log(res)
// })
// .catch(e => {
//     console.log("ERRRRRR" , e);
// })


// --------------------------------------------------------------------------------------------------------------
// Xoroshaya alternativa dla PROMISEALL eto PROMISEALLSETTLED
// const p1 = new Promise((resolve, reject) => {
//     if (2<1){
//         resolve(1);
//     } else reject("Err p1");
// })
// const p2 = new Promise((resolve, reject) => {
//     if (2>1){
//         resolve(2);
//     } else reject("Err p2");
// })

// Promise.allSettled([p1,p2])
// .then(res => {
//     console.log(res)
// })

// --------------------------------------------------------------------------------------------------------------
// REDUCE 
// METOD REDUCE =>( MOJET ZAMENIT MAP I FILTER )

// let prices = [100,20,,5,1,200];
// accumulator eto previous value
// value eto current value
// 0 v konce eto initial value (v dannom sluchae mojno 0 ne pisat t.k. prices eto nomera)
// let number = prices.reduce((accumulator,value) => {
//     return accumulator + value;
// },0);

// console.log(number);



// ------------------------------------
// zadaacha vsem useram kotorim bolshe 18 dat mashinu i vernut v noviy massiv
// let users = [{
//     name: 'vasya',
//     age: 16,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 12,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 13,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 17,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];


// ------------------------------------
//  usersWithCar init val = [] ukazano v konce metoda
// let usersWithCar = users.reduce((acc,user)=>{
//     if(user.age>=18){
//         user.car = true;
//         acc.push(user)
//     }
//     // ne zabivaemvernut acc dla novoy iteracii
//     // akkumulyator (acc) eto sobirayushiysya massiv v zavisimosti ot if-a esli if srabativaet to acc rastet
//     return acc;
//     // esli ne vernem poluchim ne to chto xochem : cannot read properties of undefined
// },[]);
// console.log(usersWithCar);
// 
// dla prikola poprobuyu dobavit massiv bukv v odno edinoe slovo
// let massivBukv = ["c","a","h","a","n","g","i","r"];
// let slovo = massivBukv.reduce((sobravshiysya,bukva) => {
//     sobravshiysya += bukva;
//     return sobravshiysya;
// },"");
// console.log(slovo);




// DOMASHKA
// sdelat ot 6 do 9 asinxronniy funkciy kotraya opisivaet rosporadka dna
// sinxronizovat eto cherez callback/ promise/ asyn await


