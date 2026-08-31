# Simple Java Solution

**Author:** kodiswaran
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/1097187/](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/1097187/)

---

```
class Solution {
    public int minElements(int[] nums, int limit, int goal) {
        long sum = 0;
        for(int num: nums)
            sum += num;
        long diff = Math.abs(sum-goal);
        return (int) (diff/limit) + (diff%limit>0?1:0);
    }
}
```