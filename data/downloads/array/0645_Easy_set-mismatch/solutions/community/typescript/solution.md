# 645. Set Mismatch - TypeScript Solution

**Author:** user2517E
**Votes:** 10
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/3026921/](https://leetcode.com/problems/set-mismatch/solutions/3026921/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First element of array is 0 that we will ignore and missing number should be 0
Dupulicated number should be 2
# Approach
<!-- Describe your approach to solving the problem. -->
Create an array that starts with 0 to n
Add all of the numbers to the array as indecies

So arr.indexOf(2) is the duplicated number and arr.lastIndexOf(0) is the missing number
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
function findErrorNums(nums: number[]): number[] {
    const arr: number[] = new Array(nums.length+1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        arr[nums[i]]++;
    }

    return [arr.indexOf(2), arr.lastIndexOf(0)];
};
```