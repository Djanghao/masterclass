# [Java/Python 3] Time O(n) space O(1) codes w/ brief explanation and a similar problem.

**Author:** rock
**Votes:** 30
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1486323/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1486323/)

---

**Similar Problem:** [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)

----

Traverse input, compare current number to the minimum of the previous ones. then update the max difference.
```java
    public int maximumDifference(int[] nums) {
        int diff = -1;
        for (int i = 1, min = nums[0]; i < nums.length; ++i) {
            if (nums[i] > min) {
                diff = Math.max(diff, nums[i] - min);
            }
            min = Math.min(min, nums[i]);
        }
        return diff;
    }
```
```python
    def maximumDifference(self, nums: List[int]) -> int:
        diff, mi = -1, math.inf
        for i, n in enumerate(nums):
            if i > 0 and n > mi:
                diff = max(diff, n - mi)    
            mi = min(mi, n)
        return diff    
```