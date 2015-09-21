/*
* Memoization -
*
* The purpose of memoization is to remember(cache) the results of functions so when it reccurs the function
* does not have to redo all of the functions it did before to get to the next point.
*/

//Add this to the function you want to keep a cache to
FunctionNameToAddCache.prototype.memoize = function() {
  // cache will store the results that have already been processed
  // recFunctionAnswer is the result that you are looking for
  var recFunctionAnswer = this, cache = {}; // cache stores in objects, if want to store strings will need to convert objects into string
  //return a function, this will look for cache or return the last knowing cache so the function can start from there.
  return function( arg ) {
      // look to see if the arg is already stored into the cache
      if (arg in cache) {
        // if it finds it then return the result
        return cache[arg];
      } else {
        // if the result is not stored in the cache then it will run the function again from the last stored cache result
        // and add the result, self (arg), to the cache for future reference.
        return cache[arg] = recFunctionAnswer( arg );
      }
    };
};