# C# HashSet

**Author:** chuletsva
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3971113/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3971113/)

---

```
public class Solution {
    public int[] CircularGameLosers(int n, int k)
    {
        var losers = new HashSet<int>(Enumerable.Range(1, n));

        for (int i = 0, j = 0; losers.Contains(i + 1); i = (i + ++j * k) % n)
        {
            losers.Remove(i + 1);
        }

        return losers.ToArray();
    }
}
```