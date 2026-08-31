# Easiest 2ms Java Solution

**Author:** yavinci
**Votes:** 276
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/77574/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/77574/)

---

This is 1D version of [Number of Islands II](https://leetcode.com/problems/number-of-islands-ii). For more explanations, check out this [2D solution](https://leetcode.com/problems/number-of-islands-ii/solutions/75470/easiest-java-solution-with-explanations/).

 1. `n` points = `n` islands = `n` trees = `n` roots.
 2. With each edge added, check which island is `e[0]` or `e[1]` belonging to.
 4. If `e[0]` and `e[1]` are in same islands, do nothing.
 5. Otherwise, **union** two islands, and  reduce islands count by `1`.
 6. Bonus: path compression can reduce time by `50%`.

Hope it helps!

    public int countComponents(int n, int[][] edges) {
        int[] roots = new int[n];
        for(int i = 0; i < n; i++) roots[i] = i; 

        for(int[] e : edges) {
            int root1 = find(roots, e[0]);
            int root2 = find(roots, e[1]);
            if(root1 != root2) {      
                roots[root1] = root2;  // union
                n--;
            }
        }
        return n;
    }

    public int find(int[] roots, int id) {
        while(roots[id] != id) {
            roots[id] = roots[roots[id]];  // optional: path compression
            id = roots[id];
        }
        return id;
    }

  [1]: https://leetcode.com/discuss/69572/easiest-java-solution-with-explanations