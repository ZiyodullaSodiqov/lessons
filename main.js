// const katta_radius = 10;
// const kichik_radius = 5;

//     const kavadratTopish = (r) => Math.Pi = Math.pow(r,2)

//     var S1 = kavadratTopish(katta_radius)
//     var S2 = kavadratTopish(kichik_radius)

//     var S3 = S1 - S2;

//     // toFixed Math.float() 2.00 =2.0
    
//     console.log(`S1 (R1 radiusi katta bo'lgan aylanasi krugi): ${S1.toFixed(2)}`);
//     console.log(`S2 (R2 radiusi katta bo'lgan aylanasi krugi): ${S2.toFixed(2)}`);
//     console.log(`S3 (yuzasi): ${S3.toFixed(2)}`);
// funksiyalar

    // function name(a,b) {
    //     // 1 - turdagi funksiya
    // }

    // var S1 = name(5,4)

    // const oop = () =>{
    //     // 2- turdagi funksiya
    // }

    // export default function name(){
    //     // 3- turdagisi shu
    // } 

    // birinchi bo`lib hozirgi yilni olib olamiz 2023 foydalanuvchi kiritgan yilini ayiramiz 2023 dan 

        
        // const yoshniAniqlash = () => {
        //     const dateN = new Date();
        //     var year =  dateN.getFullYear();
        //     var yearHe = parseInt(prompt("yilingiz: "))

        //     var t = year - yearHe;

        //     if(t >= 18 ){
        //         console.log("Siz 18 yoshdan yuqorisiz");
        //     } else{
        //         console.log("Siz 18 yoshdan yuqori emassiz");
        //     }

        //     console.log(t)
        // }

        // yoshniAniqlash()

        // var ball = 79

        // const deegre = () => {
        //     if(ball >= 90){
        //         console.log("A+");
        //     } else if(ball >= 80){
        //         console.log("B+");
        //     } else if (ball >= 70) {
        //         console.log("C yaxshi oqish kerede eee" );
        //     } else{
        //         console.log("Ish toporing uje");
        //     }
        // }

        // deegre()

        // function masofa(x1,x2){
        //     return Math.abs(x2 - x1)
        // }

        // var nuqta1 = 18;
        // var nuqta2= 5;

        // const masofaniTopamiz = masofa(nuqta1,nuqta2);

        // console.log(`Nuqta1: ${nuqta1}`);
        // console.log(`Nuqta1: ${nuqta2}`);
        // console.log(`Masofa ${masofaniTopamiz}`);
// a=1
// b=4
// c=3
// 3-1 =2 =AC
// 3 -4 = 1=BC
// AC+BC = 3

        // function boylat(A,B,C){
        //     const AC = Math.abs(C-A);
        //     const BC = Math.abs(C-B);
        //     const jami= AC + BC;

        //     return {
        //         AC:AC,
        //         BC:BC,
        //         jami:jami
        //     }
        // }

        // const A = 3;
        // const B = 4;
        // const C = 7;

        // const natija = boylat(A,B,C)

        // console.log(`AC uzunligi: ${natija.AC}`);
        // console.log(`BC uzunligi: ${natija.BC}`);
        // console.log(`Jami ${natija.jami}`);


        function uzunligi(A,B,C) {
            const ac = Math.abs(C-A);
            const ab = Math.abs(B-C);

            const natija = ac * ab;

            return natija;
        }

        
        const oop = uzunligi(8,9,4);

        console.log(oop)