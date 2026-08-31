# ⌨️  1629. Slowest Key

**Author:** muqimjon
**Votes:** 0
**Link:** [https://leetcode.com/problems/slowest-key/solutions/5698629/](https://leetcode.com/problems/slowest-key/solutions/5698629/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n \\log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public char SlowestKey(int[] releaseTimes, string keysPressed)
        => keysPressed.Select((c, i) 
            => new { Key = c, Duration = i == 0 ? releaseTimes[i] : releaseTimes[i] - releaseTimes[i - 1] })
            .OrderByDescending(x => x.Duration)
            .ThenByDescending(x => x.Key)
            .First().Key;
}
```