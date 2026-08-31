# Java Simple DFS + Memoization Solution

**Author:** adobhal93
**Votes:** 22
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/663922/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/663922/)

---

```
class Solution {
    int [][] colors = {{0,1,0}, {1,0,1}, {2,0,1}, {0,1,2}, {1,0,2}, {2,0,2}, {0,2,0}, {1,2,0}, {2,1,0}, {0,2,1},{1,2,1}, {2,1,2}}; // States for n = 1
    public int numOfWays(int n) {
        int[] init = {-1, -1, -1};
        return dfs(n, init, 0);
    }
    int mod = 1000000007;
    HashMap<String, Integer> memo = new HashMap<>();
    public int dfs(int n, int[] curr, int idx) {
        if (idx == n) {
            return 1;
        }
        String key = curr.toString() + "," + idx;
        if (memo.containsKey(key)) return memo.get(key);
        int result = 0;
        for (int i = 0; i < 12; i++) {
            int []next = colors[i];
            if (next[0] == curr[0] || next[1] == curr[1] || next[2] == curr[2]) continue;
            result = (result%mod + dfs(n, next, idx+1)%mod)%mod;
        }
        memo.put(key, result%mod);
        return memo.get(key);
    }
}
```