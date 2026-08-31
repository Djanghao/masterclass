# C# || 2 lines solution

**Author:** vdmhunter
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4501937/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4501937/)

---

# Code
```
public class Solution {
    public int MinOperations(int[] nums) {
        var cnt = nums.GroupBy(x => x).Select(g => g.Count()).ToList();
        return cnt.Min() == 1 ? -1 : cnt.Sum(c => c / 3 + (c % 3 > 0 ? 1 : 0));
    }
}


```