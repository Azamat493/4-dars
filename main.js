let son = Number(prompt("Sonni kiriting:"));

if (son > 0) {
    console.log("musbat");
} else if (son < 0) {
    console.log("manfiy");
} else {
    console.log("nol");
}



let yosh = Number(prompt("Yoshingizni kiriting:"));

if (yosh >= 21) {
    console.log("siz ulg’aygansiz");
} else {
    console.log("siz hali yoshsiz");
}




let raqam = Number(prompt("1-7 gacha raqam kiriting:"));
let hafta = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];

if (raqam >= 1 && raqam <= 7) {
    console.log(hafta[raqam - 1]);
} else {
    console.log("Noto'g'ri raqam");
}




let temp = Number(prompt("Temperaturani kiriting:"));

if (temp > 30) {
    console.log("issiq");
} else {
    console.log("sovuq");
}




let son1 = Number(prompt("Sonni kiriting:"));

if (son % 2 === 0) {
    console.log("Natija:", son * 3);
} else {
    console.log("Natija:", son * 2);
} 