// function printDiamond(n) {
//     // Upper part of the diamond
//     for (let i = 0; i < n; i++) {
//         let stars = '*'.repeat(2 * i + 1);
//         let spaces = ' '.repeat(n - i - 1);
//         console.log(spaces + stars);
//     }

//     // Lower part of the diamond
//     for (let i = n - 2; i >= 0; i--) {
//         let stars = '*'.repeat(2 * i + 1);
//         let spaces = ' '.repeat(n - i - 1);
//         console.log(spaces + stars);
//     }
// }

// // Change the number to increase or decrease the size of the diamond
// printDiamond(5);


// function printPyramid(rows) {
//     for (let i = 1; i <= rows; i++) {

//         let spaces = ' '.repeat(rows - i);

//         let stars = '*'.repeat(2 * i - 1);

//         console.log(spaces + stars);
//     }
// }


// let hr = 5;
// printPyramid(height);

// function printPyramid(rows) {
//     for (let i = 1; i <= rows; i++) {

//         let spaces = ' '.repeat(rows - i);

//         let stars = '*'.repeat(2 * i - 1);

//         console.log(spaces + stars);
//     }
// }


let arr= [9,8,67,5,4,3,2 ]
   //   console.log(arr[2]);

   let b=0;
     for(let i=0;i<arr.length;i++){
        b+=arr[i];
     }
     console.log(b);


     