# Beats ✅ 98.35%of users with JavaScript/TypeScript

**Author:** Sherif-Mostafa
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/4229960/](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/4229960/)

---

# Intuition
The intuition behind this problem is to find the original array when given the prefix array. We need to find the original values using bitwise XOR operations.


# Approach
We can start by initializing an empty array arr with the first element of the prefix array because the first element in the prefix array is the same as the first element in the original array. Then, we iterate through the remaining elements in the prefix array and calculate the value in the original array by performing a bitwise XOR (^) operation between the current element in the prefix array and the previous element in the prefix array.


# Complexity
- Time complexity: O(n) where n is the length of the prefix array because we iterate through the entire prefix array once.
- Space complexity: O(n) because we store the original array in a new array of the same length.

# Code
```javascript []

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    let arr = [pref[0]]
    for (let i = 1; i < pref.length; i++) {
        arr.push(pref[i] ^ pref[i - 1]);
    }
    return arr;
};
```
```typescript []
function findArray(pref: number[]): number[] {
    let arr: number[] = [pref[0]]
    for (let i = 1; i < pref.length; i++) {
        arr.push(pref[i] ^ pref[i - 1]);
    }
    return arr;
};
```