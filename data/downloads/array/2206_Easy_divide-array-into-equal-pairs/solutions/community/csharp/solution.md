# 1-Line LINQ

**Author:** 3S_AKB
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/3793784/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/3793784/)

---


```
public class Solution {
    public bool DivideArray(int[] nums) {
        return !nums.GroupBy(x => x).Any(x => x.Count() % 2 != 0);
    }
}
```