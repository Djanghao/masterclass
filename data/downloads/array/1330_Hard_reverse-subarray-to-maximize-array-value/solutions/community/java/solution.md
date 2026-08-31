# Java-9 lines of code-TC: O(n) SC: O(1)

**Author:** mvahidalizadeh
**Votes:** 3
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/1607971/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/1607971/)

---

Start from the beginning of the array. At each position, the value will be added by abs(nums[i]-nums[i+1]). At each position, you can do two different reverses: 
`nums[0] \u2026 nums [i]-> improvement:  abs(nums[i+1]-nums[0])-abs(nums[i+1]-nums[i])`
Or 
`nums [i+1] \u2026 nums [n-1]-> improvement: abs(nums[n-1]-nums[i])-abs(nums[i+1]-nums[i])`
This is because the neighbor of nums [i] or nums [i+1] changes by this reversing. So, the diff will be changed. This is the shape of array when you are at ith index: 
`nums [0] \u2026 nums[i] nums[i+1] \u2026 nums[n-1]`
Also, at the end, there will be one possible move. Reversing the [secondMin \u2026 secondMax] could be the best reversing move to maximize the value. 
`Nums[0] \u2026 firstMin [secondMin \u2026 secondMax] firstMax \u2026 nums[n-1]`
If you reverse the elements between secondMin and secondMax, the improvement will be like below:
Abs(secondMax-firstMin)-abs(secondMin-firstMin)+abs(firstMax-secondMin)-abs(firstMax-secondMax)
Since we know which elements are greater, we can remove the abs:
```
=secondMax-firstMin-secondMin+firstMin+firstMax-secondMin-firstMax+secondMax
=2*secondMax- 2*secondMin=2*(secondMax-secondMin)
```

```
    public int maxValueAfterReverse(int[] nums) {
        int valWithoutReverse = 0, improvementByReversing = 0, secondMin = Integer.MAX_VALUE, secondMax = Integer.MIN_VALUE, n = nums.length;
        for (int i = 0; i < n - 1; i++) {
            int currDiff = Math.abs(nums[i] - nums[i + 1]);
            valWithoutReverse += currDiff;
            improvementByReversing = Math.max(improvementByReversing, Math.abs(nums[i + 1] - nums[0]) - currDiff); // Reverse nums[0] to nums[i]
            improvementByReversing = Math.max(improvementByReversing, Math.abs(nums[i] - nums[n - 1]) - currDiff); // Reverse nums[i+1] to nums[n-1]
            secondMin = Math.min(secondMin, Math.max(nums[i], nums[i + 1])); // Keep track of the second min
            secondMax = Math.max(secondMax, Math.min(nums[i], nums[i + 1])); // Keep track of the second max
        } // The last possible improvementByReversing is reversing [secondMin...secondMax] in: ... firstMin [secondMin ... secondMax] firstMax ...
        return valWithoutReverse + Math.max(improvementByReversing, 2 * (secondMax - secondMin)); // 2*(secondMax-secondMin) could be achieved by reversing [secondMin...secondMax]
    }
```