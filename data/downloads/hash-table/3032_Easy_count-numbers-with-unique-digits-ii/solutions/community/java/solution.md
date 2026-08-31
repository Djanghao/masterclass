# [Java] brute-force / Digit DP solutions, O(n * D) 4ms

**Author:** JobHunting
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/4694442/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/4694442/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For this simple questions, as the data range is small, we can use brute-force to work on it.

However, the problem restriction can be easily extended to larger range that brute-force will no longer works. In that case, one may have to use digit dp to handle it. 

Both solutions were implemented here.

# Approach
<!-- Describe your approach to solving the problem. -->

S1: brute-force
S2: digit dp

# Complexity
- Time complexity: O(n * D)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    // time = O(n * D), space = O(1)
    public int numberCount(int a, int b) {
        int res = 0;
        for (int i = a; i <= b; i++) {
            if (check(i)) res++;
        }
        return res;
    }

    private boolean check(int x) {
        boolean[] st = new boolean[10];
        while (x > 0) {
            int d = x % 10;
            x /= 10;
            if (st[d]) return false;
            st[d] = true;
        }
        return true;
    }
}
```

```
class Solution {
    // time = O(n * D^2), space = O(n * D)
    int[][] f;
    public int numberCount(int a, int b) {
        int res = cal(b) - cal(a);
        String s = String.valueOf(a);
        boolean[] st = new boolean[10];
        boolean flag = true;
        for (int i = 0; i < s.length(); i++) {
            int u = s.charAt(i) - '0';
            if (st[u]) {
                flag = false;
                break;
            } else st[u] = true;
        }
        if (flag) res++;
        return res;
    }
    
    private int cal(int x) {
        String s = String.valueOf(x);
        int n = s.length();
        f = new int[n][1 << 10];
        for (int i = 0; i < n; i++) Arrays.fill(f[i], -1);
        return dfs(s, 0, 0, true, false);
    }
    
    private int dfs(String s, int u, int state, boolean isLimit, boolean isNum) {
        if (u == s.length()) return isNum ? 1 : 0;
        if (isNum && !isLimit && f[u][state] != -1) return f[u][state];
        
        int t = 0;
        if (!isNum) t = dfs(s, u + 1, state, false, false);
        int up = isLimit ? s.charAt(u) - '0' : 9;
        for (int i = isNum ? 0 : 1; i <= up; i++) {
            if ((state >> i & 1) == 0) {
                t += dfs(s, u + 1, state | 1 << i, i == up && isLimit, true);
            }
        }
        f[u][state] = t;
        return t;
    }
}
```