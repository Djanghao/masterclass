# C# Linq Greedy 1 line

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/5882738/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/5882738/)

---

# Approach
Greedy

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```csharp []
public class Solution {
    public int RemoveAlmostEqualCharacters(string word) => word.Aggregate((prev: 'O', skip: false, res: 0), (a, ch) => a.skip || Math.Abs(ch - a.prev) > 1 ? (ch, false, a.res) : (ch, true, a.res + 1)).res;
}
```