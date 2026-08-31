# Linq, "2" lines

**Author:** 3S_AKB
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/5358348/](https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/5358348/)

---


# Code
```
public class Solution {
    public int DigArtifacts(int n, int[][] artifacts, int[][] dig) {
        var d = dig.Select(d => (d[0], d[1])).ToHashSet();
        return artifacts.Count(a => 
            Enumerable.Range(a[0], a[2] - a[0] + 1).SelectMany(y =>
            Enumerable.Range(a[1], a[3] - a[1] + 1).Select(x => d.Contains((y, x)))
        ).All(a => a == true));
    }
}
```