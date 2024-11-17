// let a =[4,6,7,8,9,10]
// let b=0
// for(let i=0;i<a.length;i++){
//     b+=a[i];
// }
// console.log(b);

// let c=[1,2,3,4,5,]
// let d=0
// for(let i=0;i<c.length;i++){
//     d-=c[i]
// }    
// // console.log(d);
// let a=10
// let b=20
// let c=0
// c=a;
// a=b;
// b=c;
// console.log({a,b,c});

// let n=5
// let m=10
// let v=0
// v=n;
// n=m;
// m=v;`                                                               `
// console.log({v,n,m})

// let a=10;
// let b=20;
// [a,b]=[b,a]
// console.log({a,b})




// let arr =[1,200,90,4,5,10]
// function nandini(arr){
//     let max =+1;
//     for ( let i=0;i<arr.length;i++){
//         if(arr[i]<max){
//             max=arr[i]


//         }
//     }
//     return max
//     console.log[ nandini(arr)]
// }






// }
// findeOddEvenarr(arr);

// let arr=[1,2,3,4,5,6,8]

// function Reverse(arr) {
//     let rev =[]
//     for(let i=arr.length;i>=0;i--){
//         rev.push(arr[i]);
//     }
//     console.log(rev);
// }
// Reverse(arr);

// function TargetSum(arr) {let arr = [2, 3, 45, 50, 35, 100, 103, 60];

// function findeOddEvenarr(arr) {
//     let oddarr = [];
//     let evenarr = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenarr.push(arr[i]);
//         } else {
//             oddarr.push(arr[i]);
//         }
//         console.log(`This is odd arr: ${oddarr}, this is even arr: ${evenarr}`);
//     }

    // console.log(`This is odd arr: ${oddarr}, this is even arr: ${evenarr}`);
// }
// console.log(`This is odd arr: ${oddarr}, this is even arr: ${evenarr}`);
// findeOddEvenarr(arr);

//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==12){
//                 return true;
//             }
           
     
      
//         }
//     }
// }

// console.log(TargetSum(arr))
// let arr1=[9,8,7,4,5,67,32,14]
// function sortarray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + i]) {
//                 let temp = arr[j];
//                 arr[j + i] = temp;
//             }
//         }


//     }
//     return arr;

// }
// console.log(sortarray(arr1))

let array =[];
array.push (10);
array.push(20);
array.push(30);
array.push(40);
array.pop();
array.shift(50);
array.unshift(200);
console.log(array)

// function bubbleSort(array) {
//     for(let i=0; i<array.length;i++){
//         for ( let j=0; j<array.length;j++){
//             if( array[j]>array[j+1]){
//                 [array[j],array[j+1]]=[array[j+1],array[j]];
//             }
//         }
//         console.log("first itration",i,array);
//     }
//     return array
    
    
// }
// console.log(bubbleSort([8,7,6,5,4,3,2,1]))


// let arr =[8, 7, 6, 5, 4, 3, 2, 1]
// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++) {
//         let min_idx = i;
//       for(let j=i+1; j < arr.length; j++) {
//         if(arr[j]<arr[min_idx]){
//             min_idx = j;
//         }
//       }  
//       let temp=arr[i];
//       arr[i] =arr[min_idx];
//       arr[min_idx] = temp;
// }
//  return arr;
// }
// console.log(selectionSort(arr));console.log(bubbleSort([8, 7, 6, 5, 4, 3, 2, 1]))
// console.log(bubbleSort([8, 7, 6, 5, 4, 3, 2, 1]))

