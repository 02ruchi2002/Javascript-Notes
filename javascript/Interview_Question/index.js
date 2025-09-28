
1.   // create a function in javascript that accepts a function as input and a count and executes that
    //  input function once for a given count of calls. knows as sampling function


// const sampler = (fun,count) =>{
//     let counter = 0
//     return () => {
//        if(++counter !== count) return;

//        fun()
//        counter = 0
//     }
// }


// function message () {
//     console.log("helloooooo")
// }

// let result = sampler(message,4)

// result()
// result()
// result()
// result()
// result()
// result()
// result()
// result()



2.   // create a toggle function in javascript that accepts a list of arguments and toggle each of them
    //  when invoked in a cycle.



// const toggle = (...argu) => {
//   let current = -1
//   return () =>{                                                      // return() =>{   
//     if(++current >= argu.length){                                   //  current = [current + 1] % length;
//         current = 0                                                //  console.log(argu[current])
//     }                                                             //  }
//     console.log(argu[current])
//   }
// }

// let hello = toggle("hello")

// hello()
// hello()
// hello()


// let onOff = toggle("on","off")

// onOff()
// onOff()
// onOff()



3. // write a polyfill without usimg ES6 features to flatten an N depth array. 

    // Input [[[1,[1,1]],2,3],[4,5]]

   // Output [1,1,1,2,3,4,5]

// const flatten = (arr,result = []) =>{
//    for(let i=0;i<arr.length;i++){
//     let currItem = arr[i]
//     if(Array.isArray(currItem)){
//         flatten(currItem,result)
//     }else{
//         result.push(currItem)
//     }
//    }
//    return result
// }
   
// let answer = flatten([[[1,[1,1]],2,3],[4,5]])

// console.log(answer)