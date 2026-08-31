# Very naive solution. beats 100% 100%

**Author:** subramanya4shenoy
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5875740/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5875740/)

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
```typescript []
function maxGoodNumber(nums: number[]): number {
    
    let numsInBin = nums.map(num => num.toString(2));

    let bin1 = parseInt([numsInBin[0], numsInBin[1], numsInBin[2]].join(''), 2)
    let bin2 = parseInt([numsInBin[0], numsInBin[2], numsInBin[1]].join(''), 2)
    let bin3 = parseInt([numsInBin[1], numsInBin[0], numsInBin[2]].join(''), 2)
    let bin4 = parseInt([numsInBin[1], numsInBin[2], numsInBin[0]].join(''), 2)
    let bin5 = parseInt([numsInBin[2], numsInBin[0], numsInBin[1]].join(''), 2)
    let bin6 = parseInt([numsInBin[2], numsInBin[1], numsInBin[0]].join(''), 2)

    return Math.max(bin1, bin2, bin3, bin4, bin5, bin6);
};
```