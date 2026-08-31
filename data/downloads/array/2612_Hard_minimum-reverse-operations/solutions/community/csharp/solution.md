# C# Splay + Binary Search + BFS

**Author:** enze_zhang
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-reverse-operations/solutions/3917568/](https://leetcode.com/problems/minimum-reverse-operations/solutions/3917568/)

---

# Code
```
public class Solution {
    public int[] MinReverseOperations(int n, int p, int[] banned, int k) {
        Dictionary<int, int> d = new();
        SortedSet<int>[] sets = new SortedSet<int>[2];
        for(int i = 0; i < 2; i++) sets[i] = new SortedSet<int>();
        for(int i = 0; i < banned.Length; i++) d[banned[i]] = 1;
        for(int i = 0; i < n; i++) {
            if(i != p && !d.ContainsKey(i))
                sets[i % 2].Add(i);
        }
        int[] f = new int[n];
        Array.Fill(f, -1);

        List<int> q = new List<int>();
        q.Add(p);
        for(int step = 0; q.Count > 0; step++) {
            List<int> nq = new List<int>();
            foreach(int i in q) {
                f[i] = step;
                int l = Math.Max(i - k + 1, k - i - 1);
                int r = Math.Min(i + k - 1, n * 2 - k - i - 1);
                SortedSet<int> view = new(sets[l % 2].GetViewBetween(l, r));
                foreach(int it in view) nq.Add(it);
                sets[l % 2].ExceptWith(view);
            }
            q = nq;
        }
        return f;
    }
}
```