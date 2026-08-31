# Java Easy understanding solution || Linear time

**Author:** JimL97
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/2491403/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/2491403/)

---

```
class Solution {
    public boolean isConsecutive(int[] nums) {
        
        Set<Integer> set = new HashSet<>();
        int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;   
        
        for(int x : nums) {
            set.add(x);
            min = Math.min(min, x);
            max = Math.max(max, x);   
        }
        
        int length = max - min + 1;
        return nums.length == length && length == set.size();
    }
}
```