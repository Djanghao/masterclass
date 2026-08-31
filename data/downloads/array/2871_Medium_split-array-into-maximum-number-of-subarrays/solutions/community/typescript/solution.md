# Simple Solution Typescript

**Author:** tal0012
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/5575423/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/5575423/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxSubarrays(nums: number[]): number {
    const optimalSum = nums.reduce((acc,curr) => (acc&curr));
    let numOfPartiions = 0;
    let currSum = 0;
    let currXor = -1
    for(const num of nums){
        currXor &= num; 
        if(currSum+currXor <= optimalSum){
            currSum+= currXor;
            numOfPartiions++;
            currXor = -1;
        }
    }
    return Math.max(numOfPartiions,1);
};
```