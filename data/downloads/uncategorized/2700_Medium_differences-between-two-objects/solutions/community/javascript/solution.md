# Recursion | Easy | Self Explanatory

**Author:** sourasb
**Votes:** 25
**Link:** [https://leetcode.com/problems/differences-between-two-objects/solutions/3557230/](https://leetcode.com/problems/differences-between-two-objects/solutions/3557230/)

---

### \u2705\u2705\u2B06\uFE0F\u2B06\uFE0FPlease UPVOTE if you find this useful.\u2B06\uFE0F\u2B06\uFE0F\u2705\u2705

# Intuition:
1. Base Cases:

    1. If obj1 and obj2 are equal (obj1 === obj2), return an empty object {}.
    1. If either obj1 or obj2 is null, return [obj1, obj2].
    1. If either obj1 or obj2 is not an object, return [obj1, obj2].
    1. If one is an array and the other is an object, return [obj1, obj2].
2. Comparing Comparable Objects:

    1. Iterate over the keys that exist in both obj1 and obj2.
    1. For each key, recursively calculate the difference between the corresponding child objects.
    1. If the difference is not an empty object {}, append it to the resulting object.
3. Filtering Empty Objects:

    1. Exclude empty objects from the resulting object using the condition Object.keys(obj).length === 0.

# Code
```
/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
const objDiff = (sourceObj, targetObj) => {
    // Special case: Objects are the same
    if (sourceObj === targetObj) return {};

    // Special cases: Null values or different types
    if (sourceObj === null || targetObj === null) return [sourceObj, targetObj];
    if (typeof sourceObj !== 'object' || typeof targetObj !== 'object') return [sourceObj, targetObj];
    if (Array.isArray(sourceObj) !== Array.isArray(targetObj)) return [sourceObj, targetObj];

    const diffObj = {}; // Object to store the differences

    // Iterate over the keys in sourceObj
    Object.keys(sourceObj).forEach(key => {
        if (key in targetObj) {
            const subDiff = objDiff(sourceObj[key], targetObj[key]); // Recursive call for nested objects

            // If there are differences, add them to the diffObj
            if (Object.keys(subDiff).length > 0) {
                diffObj[key] = subDiff;
            }
        }
    });

    return diffObj; // Return the object containing the differences
};
```

 ### \u2705\u2705\u2B06\uFE0F\u2B06\uFE0FPlease UPVOTE if you find this useful.\u2B06\uFE0F\u2B06\uFE0F\u2705\u2705