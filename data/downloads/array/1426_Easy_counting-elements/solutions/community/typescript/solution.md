# Counting Elements

**Author:** SergiusDu
**Votes:** 1
**Link:** [https://leetcode.com/problems/counting-elements/solutions/4410124/](https://leetcode.com/problems/counting-elements/solutions/4410124/)

---

# Intuition
To solve this problem, the first thought is to check for each element in the array whether there's a consecutive element (i.e., element + 1). The challenge is to do this efficiently, considering potential duplicates in the array.

# Approach
The approach is to use a Set to store all elements of the array. Sets in JavaScript are collections of unique values. By iterating through the array and checking for each element if the Set contains its consecutive element (element + 1), we can count how many elements meet this condition. This approach ensures that even if there are duplicates in the array, they are counted separately, as required.

# Complexity
- Time complexity: The time complexity is $$O(n)$$, where n is the length of the array. This is because we iterate through the array once, and Set operations (like `has`) are generally O(1).

- Space complexity: The space complexity is also $$O(n)$$ due to the storage of elements in the Set.

# Code
```
/**
 * Counts elements in the array such that each element x, has an element x + 1 also in the array.
 * 
 * @param {number[]} arr - The array of integers to analyze.
 * @returns {number} The count of elements meeting the criteria.
 * 
 * Example:
 * countElements([1,2,3]) returns 2, because 1 and 2 have 2 and 3, respectively, in the array.
 * countElements([1,1,3,3,5,5,7,7]) returns 0, because there are no consecutive elements.
 */
function countElements(arr: number[]): number {
    // Create a Set from the array. 
    // A Set automatically removes duplicates and allows efficient existence checks.
    const numsSet = new Set(arr);

    // Initialize a counter to keep track of elements satisfying the condition.
    let counter = 0;

    // Iterate through each number in the original array.
    for (const num of arr) {
        // Check if the Set contains the consecutive number (num + 1).
        // If it does, increment the counter.
        if (numsSet.has(num + 1)) counter++;
    }

    // Return the final count of elements that satisfy the condition.
    return counter;
};

```