# C#: faster than 100%

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/3764940/](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/3764940/)

---

# Intuition
Go through all the columns and check.

# Approach
Add method
```
private bool IsOK(int col, List<int[]> list, string[] strs)
```
where
- col: index of column to check
- list: intervals to check. Initally is equal to [0, strs.Length - 1]
- strs: initial array of strings

Add method
```
private List<int[]> GetNewList(int col, List<int[]> list, string[] strs)
```
with the same parameters as in method `IsOK`. This method check the column col for intervals `list`.
If method `IsOK` return false, then we add index of column to the `badIndexes` list.
At the end return the number of bad columns:
```
return badIndexes.Count;
```

# Complexity
- Time complexity:
$$O(len(strs) * len(strs[0]))$$

- Space complexity:
$$O(len(strs[0]))$$

# Code
```
public class Solution {
    public int MinDeletionSize(string[] strs) {
        var list = new List<int[]> { new[] { 0, strs.Length - 1 } };
        var badIndexes = new List<int>();
        for (int i = 0; i < strs[0].Length; i++)
        {
            var isOK = IsOK(i, list, strs);
            if (isOK)
            {
                if (i < strs[0].Length - 1)
                {
                    list = GetNewList(i, list, strs);
                    if (list.Count == 0) break;
                }
            }
            else
            {
                badIndexes.Add(i);
            }
        }
        return badIndexes.Count;
    }
    private List<int[]> GetNewList(int col, List<int[]> list, string[] strs)
    {
        var rs = new List<int[]>();
        for (int i = 0; i < list.Count; i++)
        {
            var index0 = list[i][0];
            var index1 = list[i][0];
            for (int j = list[i][0] + 1; j <= list[i][1]; j++)
            {
                if (strs[j - 1][col] == strs[j][col])
                {
                    index1 = j;
                }
                else
                {
                    if (index0 < index1) rs.Add(new[] { index0, index1 });
                    index0 = j;
                    index1 = j;
                }
            }
            if (index0 < index1) rs.Add(new[] { index0, index1 });
        }
        return rs;
    }
    private bool IsOK(int col, List<int[]> list, string[] strs)
    {
        for (int i = 0; i < list.Count; i++)
        {
            for (int j = list[i][0]; j < list[i][1]; j++)
            {
                if (strs[j][col] > strs[j + 1][col]) return false;
            }
        }
        return true;
    }
}
```