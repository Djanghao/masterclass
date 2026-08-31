# groupBy | Detailed Explanation | Easy

**Author:** sourasb
**Votes:** 68
**Link:** [https://leetcode.com/problems/group-by/solutions/3568048/](https://leetcode.com/problems/group-by/solutions/3568048/)

---

# Approach:
1. We define groupBy method by extending the Array `prototype` to add a `groupBy` method. This allows any array to call this method.

2. To group the elements, we need to iterate over each item in the array. One way to achieve this is by using the `reduce` function. The `reduce` function allows us to iterate over the array while accumulating a result.

3. In order to group the elements, we need a way to identify which elements belong to the same group. This is where the provided function `fn` comes into play. The function takes an element as input and returns a value that will serve as the grouping key.

4. While iterating over each element, we need to check if a group already exists for the current key. If not, we create an empty array to hold the elements for that group. Then, we push the current element into the corresponding group array.

5. After all elements have been processed, we return the object that contains the grouped elements. Each key in the object represents a group, and the associated value is an array containing the elements belonging to that group.

# Code Explanation:
1. `Array.prototype.groupBy = function(fn):` This line adds a new method called `groupBy` to the Array `prototype`. This means that any array object in JavaScript can now call this method.

2. The `groupBy` function takes a single argument `fn`, which represents the function to be used for grouping the array elements.

3. `this.reduce((grouped, item) => { ... })`: The `reduce` function is used to iterate over each element in the array and accumulate a final result. The initial value for the accumulator is an empty object `{}`.

4. Inside the reduce function, we have an arrow function with two parameters: `grouped` and `item`. `grouped` represents the object that stores the grouped elements, and `item` represents the current element being processed.

5. `const key = fn(item);`: This line calls the provided function `fn` with the current element item as an argument to determine the grouping `key`. The returned value is stored in the `key` variable.

6. `if (!grouped[key]) { grouped[key] = []; }`: This code block checks if the `key` already exists as a `property` in the `grouped object`. If not, it creates a new property with the key name and assigns an empty array `[]` as its value.

7. `grouped[key].push(item);`: This line adds the current item to the `array` corresponding to its `key` in the `grouped` object. This effectively groups the elements based on their key values.

8. Finally, return `grouped`; is used to return the updated grouped object after all the elements have been processed.

# Code
```
/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  // Reduce the array into a single object
  return this.reduce((grouped, item) => {
    // Apply the provided callback function to get the key
    const key = fn(item);
    
    // If the key doesn't exist in the grouped object, create a new array for it
    if (!grouped[key]) {
      grouped[key] = [];
    }
    
    // Push the current item to the array associated with the key
    grouped[key].push(item);
    
    // Return the updated grouped object for the next iteration
    return grouped;
  }, {});
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
```