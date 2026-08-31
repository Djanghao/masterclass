# TC : O(n), SC: O(1) DP

**Author:** anikets2002
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5890293/](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5890293/)

---


# Code
```typescript []
function maximumTotalCost(nums: number[]): number {
    // we only take positive this mean we are startign a new sub array from here
    let n = nums.length;
    if(n === 1)return nums[0];
    let maxYet = nums[0];
    let posPrev = 0, posCurr = 0, negPrev = 0, negCurr = 0;
    for(let i = 0; i < n; i++)
    {
        posCurr = nums[i] + (i === 0 ? 0 : maxYet)
        if(i > 0)
        {
            negCurr = posPrev - nums[i];
            maxYet = Math.max(posCurr, negCurr)
        }
        posPrev = posCurr;
        negPrev = negCurr;
    }
    return Math.max(posCurr, negCurr)
};
```