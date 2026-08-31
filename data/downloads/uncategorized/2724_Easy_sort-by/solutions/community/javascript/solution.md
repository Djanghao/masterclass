# 🍞🍞🍞 1 LINE | Full thorough explanation | ✅ bread

**Author:** TheGElCOgecko
**Votes:** 97
**Link:** [https://leetcode.com/problems/sort-by/solutions/3624653/](https://leetcode.com/problems/sort-by/solutions/3624653/)

---

# Approach
For an array ```arr```, if we call ```arr.sort()```, it will automatically sort the array. However, JavaScript won't automatically sort correctly, since how we want the array to be sorted is not solely based on the value of each element, but rather the result of each element being inputted into a function. However, we can create a custom sort, where the parameter is the function we use to sort.

We create a custom sort in this format:
```
arr.sort((a, b) => [expression])
```
The ```sort``` function will constantly swap values based on our custom sort function. If the function's return value is negative, ```a``` should go to the *left* of ```b```. If the return value is positive, ```a``` should go to the *right* of ```b```. The custom sort function we want is simple and is as follows:
```
(a, b) => fn(a) - fn(b)
```
If ```fn(a)``` is less than ```fn(b)```, then the function will return a negative value and ```a``` will go before ```b```. If ```fn(a)``` is greater than ```fn(b)```, the function will return a positive value, and ```a``` will go after ```b```.

# Code
```
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};
```
UPVOTE if this was helpful \uD83C\uDF5E\uD83C\uDF5E\uD83C\uDF5E