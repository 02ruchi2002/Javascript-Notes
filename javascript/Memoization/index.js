
// ------------------------------------       FIRST WAY TO DO              -------------------------------

const cache = new Map();

function cachedSum(...arg){
   let key = JSON.stringify(arg)

   if(cache.has(key)){
     console.log("from cache")
     return cache.get(key)
   }

   const result = arg.reduce((acc,curr)=>acc + curr,0)
   cache.set(key,result)
   console.log("calculating....")
   return result;
}

console.log(cachedSum([3,2,1]))
console.log(cachedSum([3,2,1]))
console.log(cachedSum([3,8,1]))
console.log(cachedSum([3,8,1]))




// ------------------------------------       SECOND WAY TO DO              -------------------------------


