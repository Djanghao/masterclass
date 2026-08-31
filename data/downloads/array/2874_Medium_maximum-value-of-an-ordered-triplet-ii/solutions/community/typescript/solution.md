# MaxSuffix Array two pass: O(n) time and space. Beats 100% of TypeScript Submissions

**Author:** austinlimanek
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4850245/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4850245/)

---

# Intuition
i, j, and k in the equation (nums[i] - nums[j])*nums[k] is maximized when nums[i] and nums[k] are maximized. Use j as the index to loop over nums.

# Approach
Construct a suffix array that records the max value in nums relative to the end of the nums array.
Loop over the nums array keeping track of the max to the left of j in nums and calculate the ansMax from maxLeft, nums[j], and rightMax[j + 1].

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
function maximumTripletValue(nums: number[]): number {
    const rightMax = new Array(nums.length + 1).fill(0);

    for(let k = nums.length - 1; k >= 0; k--){
        rightMax[k] = Math.max(nums[k], rightMax[k + 1]);
    }

    let leftMax = 0;
    let ansMax = 0;

    for(let j = 0; j < nums.length; j++){
        if(nums[j] > leftMax) leftMax = nums[j];
        ansMax = Math.max(ansMax, (leftMax - nums[j])*rightMax[j + 1])
    };

    return ansMax;
};
```