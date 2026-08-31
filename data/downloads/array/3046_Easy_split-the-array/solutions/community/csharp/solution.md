# 1-line Linq

**Author:** 3S_AKB
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-the-array/solutions/4780137/](https://leetcode.com/problems/split-the-array/solutions/4780137/)

---


# Code
```
public class Solution {
    public bool IsPossibleToSplit(int[] nums) {
        return nums.GroupBy(x => x).All(x => x.Count() <= 2);
    }
}
```