# Easy to understand with Sort the array and for loop. Tine Complexity - O(n)

**Author:** Manjeet_18
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5909112/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5909112/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Step to solve
1. Sort the given array
2. Now loop the sorted array and check if (i)th and (i+1)th element same if same than push it in a new array and after loop return that array
# Approach
<!-- Describe your approach to solving the problem. -->
Sort the given array and check the same element 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let sortedArr = nums.sort((a,b) => a-b)
    let sneakyNumArr = [];
    for (let num = 0; num < sortedArr.length; num++) {
        if (sortedArr[num] == sortedArr[num+1]) {
            sneakyNumArr.push(sortedArr[num])
        }
    }
    return sneakyNumArr
};
```