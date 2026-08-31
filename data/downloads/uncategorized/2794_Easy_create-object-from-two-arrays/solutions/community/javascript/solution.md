# Straightforward | Easy | O(n)

**Author:** foolish-engineer
**Votes:** 2
**Link:** [https://leetcode.com/problems/create-object-from-two-arrays/solutions/3829338/](https://leetcode.com/problems/create-object-from-two-arrays/solutions/3829338/)

---

# Intuition
Explore inbuilt functions to find if a key exists or not 

# Approach
Iterete and assign key & value to the object. Skip if key already exists. Used inbuilt Javascript IN for that.

# Complexity
- Time complexity: O(n)


- Space complexity: O(1)


# Code
```
/**
 * @param {Array} keysArr
 * @param {Array} valuesArr
 * @return {Object}
 */
var createObject = function(keysArr, valuesArr) {
    const obj = {};
    for(const keyIndex in keysArr) {
        const key = keysArr[keyIndex];
        if(key in obj) {
            continue;
        }
        obj[key] = valuesArr[keyIndex];
    }
    return obj;
};
```