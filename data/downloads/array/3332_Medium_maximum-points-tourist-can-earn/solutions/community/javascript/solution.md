# The Fire of C++ Efficiency ✅🔥: Coding Your Path to Success || Dp Solution

**Author:** ankit_kumar12345
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/5971266/](https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/5971266/)

---

# Intuition

# Approach

finding all possible way and choosing maximum 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution
{
public:
  int dfs(int d, int c, int k,vector<vector<int>> &ss,vector<vector<int>> &ts,vector<vector<int>> &m){
    if (d == k)return 0;

    if (m[d][c] != -1) return m[d][c];

    int maxPoints = ss[d][c] + dfs(d + 1, c, k, ss, ts, m);

    for (int n = 0; n < ts.size(); n++){

      if (n != c)
         maxPoints = max(maxPoints, ts[c][n] + dfs(d + 1, n, k, ss, ts, m));

    }
    return m[d][c] = maxPoints;
  }

  int maxScore(int n, int k,vector<vector<int>> &ss,vector<vector<int>> &ts){

    vector<vector<int>> m(k, vector<int>(n, -1));

    int maxPoints = 0;

    for (int s = 0; s < n; s++)
      
        maxPoints = max(maxPoints, dfs(0, s, k, ss, ts, m));

    return maxPoints;
  }
};
```
```javascript []
class Solution {
    dfs(d, c, k, ss, ts, m) {
        if (d === k) return 0;

        if (m[d][c] !== -1) return m[d][c];

        let maxP = ss[d][c] + this.dfs(d + 1, c, k, ss, ts, m);

        for (let n = 0; n < ts.length; n++) {
            if (n !== c) {
                maxP = Math.max(maxP, ts[c][n] + this.dfs(d + 1, n, k, ss, ts, m));
            }
        }
        return m[d][c] = maxP;
    }

    maxScore(n, k, ss, ts) {
        const m = Array.from({ length: k }, () => Array(n).fill(-1));

        let maxP = 0;

        for (let s = 0; s < n; s++) {
            maxP = Math.max(maxP, this.dfs(0, s, k, ss, ts, m));
        }

        return maxP;
    }
}

```
```python []
class Solution:
    def dfs(self, d, c, k, ss, ts, m):
        if d == k:
            return 0

        if m[d][c] != -1:
            return m[d][c]

        maxP = ss[d][c] + self.dfs(d + 1, c, k, ss, ts, m)

        for n in range(len(ts)):
            if n != c:
                maxP = max(maxP, ts[c][n] + self.dfs(d + 1, n, k, ss, ts, m))

        m[d][c] = maxP
        return maxP

    def maxScore(self, n, k, ss, ts):
        m = [[-1] * n for _ in range(k)]
        
        maxP = 0
        
        for s in range(n):
            maxP = max(maxP, self.dfs(0, s, k, ss, ts, m))

        return maxP

```
```java []
import java.util.List;

class Solution {
    public int dfs(int d, int c, int k, List<List<Integer>> ss, List<List<Integer>> ts, int[][] m) {
        if (d == k) return 0;

        if (m[d][c] != -1) return m[d][c];

        int maxP = ss.get(d).get(c) + dfs(d + 1, c, k, ss, ts, m);

        for (int n = 0; n < ts.size(); n++) {
            if (n != c) {
                maxP = Math.max(maxP, ts.get(c).get(n) + dfs(d + 1, n, k, ss, ts, m));
            }
        }
        return m[d][c] = maxP;
    }

    public int maxScore(int n, int k, List<List<Integer>> ss, List<List<Integer>> ts) {
        int[][] m = new int[k][n];
        for (int[] row : m) {
            java.util.Arrays.fill(row, -1);
        }

        int maxP = 0;

        for (int s = 0; s < n; s++) {
            maxP = Math.max(maxP, dfs(0, s, k, ss, ts, m));
        }

        return maxP;
    }
}

```