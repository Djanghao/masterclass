# Simple C# BFS

**Author:** sergey-tihon
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5876559/](https://leetcode.com/problems/remove-methods-from-project/solutions/5876559/)

---

# Approach

Simple BFS mark all suspicious methods, then we check that suspicious methods are not called from outside.

# Complexity
- Time complexity: $$O(n+m)$$ 

- Space complexity: $$O(n+m)$$

# Code
```csharp []
public class Solution {
    public IList<int> RemainingMethods(int n, int k, int[][] invocations) {
        // Build Graph
        var g = new Dictionary<int, List<int>>();
        foreach(var arr in invocations) {
            var (a,b) = (arr[0], arr[1]);
            if (g.TryGetValue(a, out var list))
                list.Add(b);
            else 
                g.Add(a,[b]);
        }
        // Run BFS
        var h = new HashSet<int>(Enumerable.Range(0,n));
        var q = new Queue<int>();
        q.Enqueue(k); h.Remove(k);
        while (q.Count > 0) {
            var x = q.Dequeue();
            if (g.TryGetValue(x, out var list)) {
                foreach(var v in list) 
                    if(h.Contains(v)) {
                        q.Enqueue(v);
                        h.Remove(v);
                    }
            }
        }
        // Ensure that group is isolated
        foreach(var arr in invocations) {
            var (a,b) = (arr[0], arr[1]);
            if (h.Contains(a) && !h.Contains(b))
                return Enumerable.Range(0,n).ToArray();
        }
        return h.ToArray();
    }
}
```