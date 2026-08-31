# c#, pattern

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/color-the-triangle-red/solutions/3438252/](https://leetcode.com/problems/color-the-triangle-red/solutions/3438252/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here we have `4` lines *pattern* starting from the very bottom which 
repeats up to the top of the triangle. The only break of the pattern is on the very end: we should always includ top triangle into the solution

# Approach
<!-- Describe your approach to solving the problem. -->
A `for` loop where we follow the pattern

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

# Code
```
public class Solution {
  public int[][] ColorRed(int n) {
    List<int[]> result = new List<int[]>() {
      new int[] { 1, 1 }
    };

    for (int row = n, kind = 0; row >= 2; --row, kind = (kind + 1) % 4) 
      if (kind == 0) 
        result.AddRange(Enumerable
          .Range(1, row)
          .Select(col => new int[] {row, col * 2 - 1}));
      else if (kind == 1) 
        result.Add(new int[] { row, 2 });
      else if (kind == 2) 
        result.AddRange(Enumerable
          .Range(2, row - 1)
          .Select(col => new int[] {row, col * 2 - 1}));
      else 
        result.Add(new int[] { row, 1 });

    return result.ToArray();
  }
}
```