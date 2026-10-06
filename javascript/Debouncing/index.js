
function debouncFn(fn,delay){
  let timerId;
   function debounInner(){
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        fn();
    }, delay);
  }
  return debounInner;
}

function searchData(event){
    console.log("fetched data")
    console.log(event)
}

let debounceSearch = debouncFn(searchData,3000)


//   -------- if not using html
// debounceSearch()
// debounceSearch()
// debounceSearch()
