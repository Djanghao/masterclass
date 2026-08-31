# Easiest Java DP Solution (97.36%)

**Author:** yavinci
**Votes:** 441
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/42213/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/42213/)

---

This can be solved by two points:

 1. `cut[i]` is the minimum of `cut[j - 1] + 1 (j <= i)`, if `[j, i]` is palindrome.
 2. If  `[j, i]` is palindrome, `[j + 1, i - 1]` is palindrome, and `c[j]  == c[i]`.

The 2nd point reminds us of using dp (caching).

    a   b   a   |   c  c
                    j  i
           j-1  |  [j, i] is palindrome
       cut(j-1) +  1


Hope it helps!

    public int minCut(String s) {
        char[] c = s.toCharArray();
        int n = c.length;
        int[] cut = new int[n];
        boolean[][] pal = new boolean[n][n];
        
        for(int i = 0; i < n; i++) {
            int min = i;
            for(int j = 0; j <= i; j++) {
                if(c[j] == c[i] && (j + 1 > i - 1 || pal[j + 1][i - 1])) {
                    pal[j][i] = true;  
                    min = j == 0 ? 0 : Math.min(min, cut[j - 1] + 1);
                }
            }
            cut[i] = min;
        }
        return cut[n - 1];
    }