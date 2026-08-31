# [JavaScript] Hash Table or Set - Space Time Complexity Analysis

**Author:** kratosa
**Votes:** 50
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/791983/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/791983/)

---

# **Hash Table**
We could use a for  loop nested in a for loop to check for each element if there is a corresponding number that is its double.

But even though we would have a constant space complexity of O(1), we would have a quadratic time complexity of O(n\xB2) which is not good and should be avoided if possible.

Another possible solution is to use the Hash Table data structure that in JavaScript can be represented as an object. Its main advantage is that we can assume that it takes constant time of O(1) to retrieve each stored element, so it is fast.

It also allows us to solve this problem by traversing the array only once:

In each iteration of a for statement we check if the current value already exists as a key in our object.
* If so, a number and its double exist in the array, we must return true.
* If not, store key/value pairs where one pair has the current element divided by 2 as a key and the other pair has the current element multiplied by 2 as a key. Notice that the values we store with each key do not matter, since we only check the keys.

If the for loop ends without finding a match, it means that the array does not contain a number and its double, we must return false.

Since we created a Hash Table with a size that scales linearly according to the size of our input array, it has a linear space complexity of O(n).

This time we only traverse the array once, so it has a linear time complexity of O(n).

```
var checkIfExist = function(arr) {
    const hashTable = {};
    
    for(let i = 0; i < arr.length; i ++) {
      const currValue = arr[i];
      
      if(hashTable[currValue] !== undefined) {
        return true
      }
      hashTable[currValue / 2] = currValue;
      hashTable[currValue * 2] = currValue;
    }
  
  return false;
};
```
# **Map**
This Hash Table approach could also be implemented by using the JavaScript built in Map data collection.

The main difference in our use case would be that instead of storing each key in the Hash Table as a string, we would store each key in a Map as a number. An Object only supports string and symbol as a key, but a Map supports objects and any primitive type as keys.
# **Set**
The problem with using a Hash Table (object) or Map is that when we insert a key/value pair, the key is required but its value is not.
When we need a Hash Table data structure's properties to solve the problem, but we only need keys instead of key/value pairs it makes sense to use a Set data collection.
**NOTE**: Keep in mind that a JavaScript built in Set only stores unique values.

Similar to an object and a Map, we can assume that we can retrieve a value from a Set with a constant time complexity of O(1).

We created a Set with a size that scales linearly according to the size of our input array, it has a linear space complexity of O(n).

Just like our previous solution we only traverse the array once, so it has a linear time complexity of O(n).

```
var checkIfExist = function(arr) {
    const set = new Set();
    
    for(let i = 0; i < arr.length; i ++) {
      const currValue = arr[i];
      
      if(set.has(currValue)) {
        return true
      }
      set.add(currValue / 2);
      set.add(currValue * 2);
    }
  
  return false;
};
```