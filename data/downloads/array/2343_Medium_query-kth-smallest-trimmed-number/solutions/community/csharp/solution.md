# "1-line" Linq

**Author:** 3S_AKB
**Votes:** 0
**Link:** [https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/5716758/](https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/5716758/)

---


# Code
```csharp []
public class Solution {
    public int[] SmallestTrimmedNumbers(string[] nums, int[][] queries) {
        return queries.Select(x =>
            nums.Select(y => y.Substring(y.Length - x[1])).Select((v, i) => (v, i)).
            OrderBy(v => v.Item1).ThenBy(v => v.Item2).Select(v => v.Item2).ToArray()[x[0] - 1]        
        ).ToArray();
    }
}
```