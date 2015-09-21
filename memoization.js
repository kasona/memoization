/*
* Memoization -
*
* The purpose of memoization is to remember(cache) the results of functions so when it reccurs the function
* does not have to redo all of the functions it did before to get to the next point.
*/

var elementByID = (function() {
  var cache = {};

  function name(obj) {
    //find out if its already in the cache
    if(obj in cache) {
      console.log(obj, 'object  is in cache');
      return cache[obj];

    }else {
      //add to cache
      cache[obj] = document.getElementById(obj);
      console.log(obj, 'is not in the cache');
      return cache[obj];
    }
  }

  return name;
})() ;