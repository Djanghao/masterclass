# Inverting Keys and Values in an Object JavaScript

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/inversion-of-object/solutions/5681620/](https://leetcode.com/problems/inversion-of-object/solutions/5681620/)

---

# Intuition
The problem requires inverting the keys and values of an object or array. If multiple keys have the same value, these keys should be grouped together in the resulting object. This implies the need to handle scenarios where multiple keys share the same value by storing those keys in an array.


# Approach
1. Initialize an empty object `invertedObj` to store the inverted key-value pairs.
2. Iterate over each key-value pair in the input `obj`.
3. For each key, check if the value is already present as a key in `invertedObj`.
    - If the value already exists in `invertedObj`, check if it is associated with an array.
      - If it is an array, add the current key to that array.
      - If it is not an array, convert it into an array containing both the previous and current keys.
    - If the value is not present in `invertedObj`, add it with the current key as the corresponding value.
4. Return the `invertedObj` as the result.

# Complexity
- Time complexity:
The time complexity is $$O(N)$$ where $$N$$ is the number of key-value pairs in the input object. This is because we need to iterate through each key-value pair once.

- Space complexity:
The space complexity is $$O(N)$$ since we are storing the inverted key-value pairs in a new object, and in the worst case, all keys and values are unique, requiring storage proportional to the number of key-value pairs.

# Code
```javascript []
/**
 * @param {Object|Array} obj
 * @return {Object}
 */
var invertObject = function(obj) {
    const invertedObj = {};

    // Loop through each key in the given object or array
    for (let key in obj) {
        // Get the value associated with the current key
        let value = obj[key];

        // Check if the value already exists as a key in invertedObj
        if (invertedObj[value]) {
            // If the value already exists and is an array, push the current key to it
            // If the value exists but isn't an array, convert it to an array
            // and add the current key to the array
            Array.isArray(invertedObj[value]) ? invertedObj[value].push(key) : invertedObj[value] = [invertedObj[value], key];
        } else {
            // If the value doesn't exist in invertedObj, add it with the current key as the value
            invertedObj[value] = key;
        }
    }

    return invertedObj;
};
```