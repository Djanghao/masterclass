# Simple Java efficient solution beats 100% time and 100% memory

**Author:** sr1105
**Votes:** 91
**Link:** [https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/877939/](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/877939/)

---

```
class Solution {
    public int specialArray(int[] nums) {
        int x = nums.length;
        int[] counts = new int[x+1];
        
        for(int elem : nums)
            if(elem >= x)
                counts[x]++;
            else
                counts[elem]++;
        
        int res = 0;
        for(int i = counts.length-1; i > 0; i--) {
            res += counts[i];
            if(res == i)
                return i;
        }
        
        return -1;
    }
}
```