# C# using Linq 1 line

**Author:** markus-24
**Votes:** 7
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/2357398/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/2357398/)

---

```
public class Solution {
    public int FinalValueAfterOperations(string[] operations) {
        return operations.Count(x => x.Contains("++")) - operations.Count(x => x.Contains("--"));
    }
}
```