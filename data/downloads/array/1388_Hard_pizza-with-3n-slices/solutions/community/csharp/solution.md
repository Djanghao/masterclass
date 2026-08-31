# DFS+DP

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/pizza-with-3n-slices/solutions/6045946/](https://leetcode.com/problems/pizza-with-3n-slices/solutions/6045946/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
 
    private Dictionary<string, int> dictSlice = new();
 
    private int GetMaxSlices(int[] slices, int idx, int endIdx, int remainPicks)
    {
        if (remainPicks == 0 || idx >= endIdx)
            return 0;
        string key = idx + "#" + endIdx + "#" + remainPicks;
        if (dictSlice.ContainsKey(key))
            return dictSlice[key];

        // pick current:
        int pickCur = slices[idx] + GetMaxSlices(slices, idx+2, endIdx, remainPicks-1);
        int skipCur = GetMaxSlices(slices, idx+1, endIdx, remainPicks);
        int res = Math.Max(pickCur, skipCur);
        dictSlice.Add(key, res);
        return res;
    }

    public int MaxSizeSlices(int[] slices) {
        int len = slices.Length;
        if (len < 3)
            return 0;

        int picks = len / 3;
        int includeFirst = GetMaxSlices(slices, 0, len-1, picks);
        int excludeFirst = GetMaxSlices(slices, 1, len, picks);

        return Math.Max(includeFirst, excludeFirst);
    }
}
```