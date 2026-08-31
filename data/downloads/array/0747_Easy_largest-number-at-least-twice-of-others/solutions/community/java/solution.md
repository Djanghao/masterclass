# Java 100% Speed

**Author:** tjutbryan
**Votes:** 8
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/884370/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/884370/)

---

```
/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Largest Number At Least Twice of Others.
Memory Usage: 36.8 MB, less than 95.16% of Java online submissions for Largest Number At Least Twice of Others.
*/

class Solution {
    public int dominantIndex(int[] nums) {
        int max = Integer.MIN_VALUE;
        for(int i : nums){
            max = Math.max(i,max);
        }
        int pos = 0;
        for(int x = 0; x < nums.length; x++){
            if (nums[x] == max) pos = x;
            int twice = nums[x] * 2;
            if(twice > max && nums[x] != max) return -1;
        }
        return pos;
    }
}
```