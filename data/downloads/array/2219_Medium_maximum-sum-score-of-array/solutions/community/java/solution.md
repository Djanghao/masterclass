# Java consistently beating 100%

**Author:** fubocd
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-sum-score-of-array/solutions/3535202/](https://leetcode.com/problems/maximum-sum-score-of-array/solutions/3535202/)

---

This is surprisingly consistently faster than the 2-pointer solution.

My theory is that array look-up by index is slower than it seems to be (although it is no double constant in time complexity).

Any way I decided to keep this faster solution.

```
class Solution {
    public long maximumSumScore(int[] nums) {
        long left = 0, sum = 0, max = Integer.MIN_VALUE;
        for (int num : nums) sum += num;
        for (int num : nums) {
            left += num;
            long right = sum - left + num;
            max = Math.max(max, Math.max(left, right));
        }
        return max;
    }
}
```