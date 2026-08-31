# Recursion Solution , Pick and NotPick Accepted

**Author:** mufassir
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2524964/](https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2524964/)

---

```
   public int maximumRows(int[][] mat, int cols) {

        return helper(0, cols, mat);
    }

    Set<Integer> set = new HashSet<>();

    int helper(int col, int cols, int[][] mat) {
        if (cols == 0 || col == mat[0].length) {
            int res = count(mat);
            return res;
        }
        set.add(col);
        int pick = helper(col + 1, cols-1, mat);
        set.remove(col);
        int notPick = helper(col + 1, cols, mat);
        return Math.max(pick, notPick);
    }

    int count(int[][] mat) {
        int m = mat.length;
        int n = mat[0].length;
        int res = 0;
        for (int i = 0; i < m; i++) {
            int ones = 0;
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 1 && !set.contains(j))
                    ones++;
            }
            if (ones == 0)
                res++;
        }
        return res;
    }
	```