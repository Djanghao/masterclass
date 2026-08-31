# Union Find

**Author:** Nova0
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-good-paths/solutions/3052465/](https://leetcode.com/problems/number-of-good-paths/solutions/3052465/)

---

# Code
```
public class Solution {
    int[] parents, count, vals;
    int res;

    public int NumberOfGoodPaths(int[] vals, int[][] edges) {
        this.vals=vals;
        Array.Sort(edges, (a, b) => Math.Max(vals[a[0]], vals[a[1]]) - Math.Max(vals[b[0]], vals[b[1]]));
        res = vals.Length;
        parents = new int[vals.Length];
        for(int i = 0; i < vals.Length; i++) parents[i] = i;
        count = new int[vals.Length];
        foreach(int[] edge in edges) 
        {
            Union(edge[0], edge[1]);
        }
        return res;
    }

        bool Union(int a, int b) {
        int pa = Parent(a);
        int pb = Parent(b);
        if(pa == pb) return false;
        if(vals[pa] == vals[pb]) {
            res += (count[pa]+1)*(count[pb]+1);
            count[pa] += count[pb]+1;
            parents[pb] = pa;
        }
        else if(vals[pa] > vals[pb]) parents[pb] = pa;
        else parents[pa] = pb;
        return true;
    }
    
    private int Parent(int a) {
        int p;
        if((p=parents[a])!=a) p=parents[a] = Parent(p);
        return p;
    }
}
```