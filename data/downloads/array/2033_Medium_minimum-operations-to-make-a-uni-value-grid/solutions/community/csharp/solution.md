# C# - simple solution

**Author:** khaled_acmilan
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/3295275/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/3295275/)

---

# Approach
1- Sort
2- Find Median
3- Calculate Steps

# Complexity
- Time complexity:
O(N * log N)

- Space complexity:
O(N)

# Code
```
public class Solution {
    public int MinOperations(int[][] grid, int x) {
        var l = new List<int>();
        foreach(int[] i in grid)
            l.AddRange(i);
        l = l.OrderBy(c=>c).ToList();
        int median = l[l.Count / 2];
        int steps = 0;

        foreach(int val in l) {
            int diff  = Math.Abs(val - median);
            if(diff % x != 0)
                return -1;
            steps += diff / x;
        }
        return steps;
    }
}
```