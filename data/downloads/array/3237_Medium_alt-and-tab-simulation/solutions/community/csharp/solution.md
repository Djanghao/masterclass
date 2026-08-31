# C# Stack O(n)

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/alt-and-tab-simulation/solutions/5673496/](https://leetcode.com/problems/alt-and-tab-simulation/solutions/5673496/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```csharp []
public class Solution {
    public int[] SimulationResult(int[] windows, int[] queries) {
        var set = new HashSet<int>();
        var stack = new Stack<int>();
        var len = windows.Length;
        for (var i = len - 1; i >= 0; --i) 
        {
            var window = windows[i];
            set.Add(window);
            stack.Push(window);
        }
        foreach (var query in queries) stack.Push(query);
        var p = 0;
        var res = new int[len];
        while (p < len)
        {
            var next = stack.Pop();
            if (!set.Contains(next)) continue;
            set.Remove(next);
            res[p++] = next;
        }
        return res;
    }
}
```