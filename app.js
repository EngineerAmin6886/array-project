//array project
//1402-05-01
//gr:Amin
//description:array darim shaml number v string k mikhaim bozorg tarin, khochak tarin, jam v miyamghin ro bramon bghireh.

let margan = [10,20,60,70,50,100,30,40]
function khateri (vorodi=[]){
    let max = 0;
    for(let i = 0; i < vorodi.length; i++){
        if(vorodi[i] > max){
            max = vorodi[i]
        }
    }
    console.log(max)

}
khateri(margan)
// -------------------------------------[code bala bozorg tarin array ro nsan mideh].

// let marjan = [10,50,30,2,90]
// function khateri (vorodi=[]){
//     let min = vorodi[0];
//     for(let i = 0 ; i < vorodi.length;i++)
//     {
//         if(vorodi[i] < min){
//             min = vorodi[i]
//         }
//     }
//     console.log(min)
// }
// khateri(marjan)
// --------------------------------------[code bala chochik tarin ro nmaesh mideh].

// let marjan = [10, 20, "ali", 30, 10, 20];
// function khateri(vorodi = []) {
//   let sum = 0;
//   for (let i = 0; i < vorodi.length; i++) {
//     if (typeof vorodi[i] == "number") {
//       sum = sum + vorodi[i];
//     }
//   }
//   console.log(sum);
// }
// khateri(marjan);
//--------------------------------------[code bala jam adad ro hesab mikoneh.]

// let marjan = [10,9];
// function khateri (vorodi=[]){
//     let sum = 0;
//     let average = 0;
//     for(let i = 0; i < vorodi.length;i++ )
//     {
//         sum= sum + vorodi[i];
//         average = sum / vorodi.length;
//     }
//     console.log(sum , average);
// }
// khateri(marjan)
// -------------------------------------[code bala jam  v mianghin array ha ro nson mideh].
