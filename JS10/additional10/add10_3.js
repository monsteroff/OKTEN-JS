let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let newArr = [];
let newDiv = document.createElement("div");
//Zdes funkciya vipolnaet tolko filter
// document.forms.form1.onclick = () => {
//     newDiv.innerHTML = ``;
//     console.clear();
//     let newArr = usersWithAddress;
//     if(document.forms.form1.cb1_1.checked){
//         newArr = f1(newArr);
//     }            
//     if(document.forms.form1.cb1_2.checked){
//         newArr = f2(newArr);
//     }            
//     if(document.forms.form1.cb1_3.checked){
//         newArr = f3(newArr);
//     }
//     function f1(arr){
//         return arr.filter(a => !a.status);
//     }
//     function f2(arr){
//         return arr.filter(a => a.age>=29);
//     }
//     function f3(arr){
//         return arr.filter(a => a.address.city === "Kyiv");
//     }
//     console.log(newArr);
//     newArr.sort((a,b) => a.id - b.id).forEach(a => {
//         newDiv.innerHTML += `<h6>${JSON.stringify(a)}</h6>`;
//     })
//     document.body.insertBefore(newDiv,document.body.getElementsByTagName("script")[0]);
// }


// a zdes on dobavlaet vse v noviy array no udalaet to chto uje bilo v novom arraye
document.forms.form1.onclick = () => {
    newDiv.innerHTML = ``;
    console.clear();
    let newArr = [];
    if(document.forms.form1.cb1_1.checked){
        f1(usersWithAddress).forEach(element => {
            newArr.push(element);
            if(newArr.indexOf(element) !== newArr.length-1){
                newArr.pop();
            }
        });
    }            
    if(document.forms.form1.cb1_2.checked){
        f2(usersWithAddress).forEach(element => {
            newArr.push(element);
            if(newArr.indexOf(element) !== newArr.length-1){
                newArr.pop();
            }
        });
    }            
    if(document.forms.form1.cb1_3.checked){
        f3(usersWithAddress).forEach(element => {
            newArr.push(element);
            if(newArr.indexOf(element) !== newArr.length-1){
                newArr.pop();
            }
        });
    }
    function f1(arr){
        return arr.filter(a => !a.status);
    }
    function f2(arr){
        return arr.filter(a => a.age>=29);
    }
    function f3(arr){
        return arr.filter(a => a.address.city === "Kyiv");
    }
    console.log(newArr);
    newArr.sort((a,b) => a.id - b.id).forEach(a => {
        newDiv.innerHTML += `<h3>${JSON.stringify(a)}</h3>`;
    })
    document.body.insertBefore(newDiv,document.body.getElementsByTagName("script")[0]);
}
