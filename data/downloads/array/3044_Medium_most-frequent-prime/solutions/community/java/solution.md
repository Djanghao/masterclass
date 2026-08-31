# Java Clean DFS Solution

**Author:** WALL__E
**Votes:** 8
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/4744788/](https://leetcode.com/problems/most-frequent-prime/solutions/4744788/)

---

# Code
```
class Solution {
    public int mostFrequentPrime(int[][] mat) {
        List<Integer> res = new ArrayList<>();
        int n = mat.length, m = mat[0].length;
        int[] dx = {0, 0, 1, 1, 1, -1,-1, -1};
        int[] dy = {1, -1, 0, 1, -1, -1, 0, 1};
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                for (int dir = 0; dir < 8; dir++) {
                    dfs(res, 0, i, j, dx[dir], dy[dir], mat);
                }
            }
        }
        
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : res) {
            if (num < 10 || !isPrime(num)) continue;
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        
        int maxCount = 0;
        int max = -1;
        for (int key : map.keySet()) {
            if (map.get(key) > maxCount) {
                maxCount = map.get(key);
                max = key;
            } else if (map.get(key) == maxCount) {
                max = Math.max(key, max);
            }
        }
        return max;
    }
    
    private void dfs(List<Integer> res, int pre, int i, int j, int dirX, int dirY, int[][] mat) {
        if (i < 0 || i >= mat.length || j < 0 || j >= mat[0].length) return;
        int num = pre * 10 + mat[i][j];
        res.add(num);
        dfs(res, num, i + dirX, j + dirY, dirX, dirY, mat);
    }
    
    private boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i < n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}
```