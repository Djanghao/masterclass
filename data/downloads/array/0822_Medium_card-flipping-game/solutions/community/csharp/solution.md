# C# counter dictionary + linq min

**Author:** Legon2k
**Votes:** 0
**Link:** [https://leetcode.com/problems/card-flipping-game/solutions/4890527/](https://leetcode.com/problems/card-flipping-game/solutions/4890527/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int Flipgame(int[] fronts, int[] backs) 
    {
        var n = fronts.Length;

        var cnt = new Dictionary<int, int>();

        void IncreaseCount(int d, int val) => 
            cnt[d] = val + (cnt.TryGetValue(d, out var c) ? c : 0);

        for(var i=0; i < n; i++)    
        {
            IncreaseCount(fronts[i], 1 + (fronts[i] == backs[i] ? n : 0));
            IncreaseCount(backs[i], 1);
        }

        return cnt.Where(_ => _.Value <= n)
            .Select(_ => _.Key)
            .DefaultIfEmpty(0)
            .Min();
    }
}
```
or two lines Linq solution with tuples hashset check
```
public class Solution {
    public int Flipgame(int[] fronts, int[] backs) 
    {
        var tuples = fronts
            .Zip(backs, (f, b) => (f, b))
            .Where(_ => _.f == _.b).Select(_ => _.f)
            .ToHashSet();

        return fronts.Union(backs)
            .Where(_ => !tuples.Contains(_))
            .DefaultIfEmpty(0).Min();
    }
}
```