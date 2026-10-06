
function throttlingFn(fn,delay){
  let timerId;
 return function throtttInner(){
    if(timerId) return;
    timerId = setTimeout(() => {
        fn();
        timerId = undefined;
    }, delay);
  }
 
}

function searchData(event){
    console.log("fetched data")
    console.log(event)
}

let result = throttlingFn(searchData,3000)

result()
result()
result()