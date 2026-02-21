// _____________________________________________  Print all the duplicate characters in a string __________________________________

// Input: s = "geeksforgeeks"
// Output: ['e', 4], ['g', 2], ['k', 2], ['s', 2]           // in desending order


// let s = "geeksforgeeks"

// let freq = {}

// for(let c of s){
//   if(freq[c]){
//     freq[c]++
//   }else{
//     freq[c] = 1
//   }
// }

// console.log(freq)

// for(let [key,value] in freq){
//     if (freq[key] > 1) {
//             console.log(["" + key, freq[key]]);
//         }
// }