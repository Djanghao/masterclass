# Right-to-Left one pass while tracking the max-value seen so far.

**Author:** digitalintruder
**Votes:** 1
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/5330118/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/5330118/)

---

# Intuition
Initially thought of a two pass, but then the complication of getting the last index to appear w/o ugly code.

# Approach
Go from right to left keeping track of the max value seen so far. Anything less will not be added to the result (indexes).

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int[] FindBuildings(int[] heights) {
        List<int> result = new();
        int max = -1;
        for (int i = heights.Length - 1; i >= 0; --i) {
            if (heights[i] > max) {
                result.Insert(0, i);
            }
            max = Math.Max(heights[i], max);
        }
        
        return result.ToArray();
    }
}
```