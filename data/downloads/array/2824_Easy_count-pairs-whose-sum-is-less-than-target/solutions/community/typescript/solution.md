# Simple Solution | Beginner Friendly | Easy Approach with Explanation✅

**Author:** Jithinp96
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/6088816/](https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/6088816/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To count the number of pairs whose sum is less than the target, we can use a nested loop to compare every pair of numbers in the array. This ensures that we don't miss any possible combinations.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a variable `count` to store the number of valid pairs.
2. Use a nested loop:
   - Outer loop iterates through the array with index `i`.
   - Inner loop iterates through the elements after index `i` with index `j`.
   - For each pair `(nums[i], nums[j])`, check if their sum is less than the target.
   - If true, increment the `count` variable.
3. Return the value of `count`.

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]<target){
                count++
            }
        }
    }
    return count;
};
```

```typescript []
function countPairs(nums: number[], target: number): number {
    let count: number = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                count++;
            }
        }
    }
    return count;
}
