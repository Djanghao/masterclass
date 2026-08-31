# Simple Solution | Beginner Friendly | Easy Approach with Explanation✅

**Author:** Jithinp96
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/6088916/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/6088916/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find all the indices of a target number in an array, we can sort the array and then iterate through it to collect indices where the value matches the target.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the `nums` array in ascending order.
2. Traverse the sorted array and check if each element is equal to the `target`.
3. If it matches, add the index to the result array.
4. Return the result array containing all indices.

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let number = [];
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i++){
        if(nums[i]=== target){
            number.push(i)
        }
    }
    return number;
};
```

```typescript []
function targetIndices(nums: number[], target: number): number[] {
    const result: number[] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result.push(i);
        }
    }

    return result;
};