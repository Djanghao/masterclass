# [Java] Scc solution, O(n + m), 172ms

**Author:** JobHunting
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-runes-to-add-to-cast-spell/solutions/6127248/](https://leetcode.com/problems/minimum-runes-to-add-to-cast-spell/solutions/6127248/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use SCC algo to find the scc that has no incoming magic nor crystal.
# Approach
<!-- Describe your approach to solving the problem. -->
Use SCC algo to find the strong connected components.
# Complexity
- Time complexity: O(n + m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n + m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    // time = O(n + m), space = O(n + m)
    List<Integer>[] adj, rev;
    boolean[] st;
    int[] stk;
    List<HashSet<Integer>> scc;
    int n, tt;
    public int minRunesToAdd(int n, int[] crystals, int[] flowFrom, int[] flowTo) {
        this.n = n;
        adj = new List[n];
        rev = new List[n];
        for (int i = 0; i < n; i++) {
            adj[i] = new ArrayList<>();
            rev[i] = new ArrayList<>();
        }
        stk = new int[n + 1];
        st = new boolean[n];
        scc = new ArrayList<>();
        tt = 0;

        int m = flowFrom.length;
        for (int i = 0; i < m; i++) {
            int a = flowFrom[i], b = flowTo[i];
            adj[a].add(b);
            rev[b].add(a);
        }

        findScc();
        int scc_cnt = scc.size();
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < scc_cnt; i++) {
            for (int x : scc.get(i)) map.put(x, i);
        }
        boolean[] hin = new boolean[scc_cnt];
        boolean[] hac = new boolean[scc_cnt];
        for (int x : crystals) hac[map.get(x)] = true;
        for (int i = 0; i < n; i++) {
            for (int j : adj[i]) {
                int a = map.get(i), b = map.get(j);
                if (a != b) hac[b] = true;
            }
        }
        int res = 0;
        for (int i = 0; i < scc_cnt; i++) {
            if (!hin[i] && !hac[i]) res++;
        }
        return res;
    }

    private void dfs(int u) {
        st[u] = true;
        for (int v : adj[u]) {
            if (st[v]) continue;
            dfs(v);
        }
        stk[++tt] = u;
    }

    private void dfs2(int u, HashSet<Integer> set) {
        st[u] = true;
        set.add(u);
        for (int v : rev[u]) {
            if (st[v]) continue;
            dfs2(v, set);
        }
    }

    private void findScc() {
        Arrays.fill(st, false);
        for (int i = 0; i < n; i++) {
            if (st[i]) continue;
            dfs(i);
        }

        Arrays.fill(st, false);
        while (tt > 0) {
            int x = stk[tt--];
            if (st[x]) continue;
            HashSet<Integer> set = new HashSet<>();
            dfs2(x, set);
            scc.add(set);
        }
    }
}
```