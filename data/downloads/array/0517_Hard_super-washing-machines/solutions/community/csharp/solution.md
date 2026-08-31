# [Just for fun] C# Linq one line

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/5811294/](https://leetcode.com/problems/super-washing-machines/solutions/5811294/)

---

# Code
```csharp []
public class Solution {
    public int FindMinMoves(int[] machines) => machines.Sum() % machines.Length > 0 ? -1 : machines.Select(m => m - machines.Sum() / machines.Length).Aggregate((0, 0), (a, b) => (a.Item1 + b, Math.Max(a.Item2, Math.Max(Math.Abs(a.Item1 + b), b)))).Item2;
}
```