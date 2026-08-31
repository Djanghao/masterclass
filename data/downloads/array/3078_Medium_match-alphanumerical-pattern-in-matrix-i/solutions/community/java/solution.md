# 2 maps

**Author:** macrohard
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/5821736/](https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/5821736/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int[] findPattern(int[][] board, String[] pattern) {
        int m1 = board.length, n1 = board[0].length;
        int m2 = pattern.length, n2 = pattern[0].length();

        var toLetter = new char[10];
        var toNum = new int[128];

        for(int r1 = 0; r1 + m2 <= m1; r1++) {
            for(int c1 = 0; c1 + n2 <= n1; c1++) {
                Arrays.fill(toLetter, (char)0);
                Arrays.fill(toNum, -1);
                var good = true;
                for(int r2 = 0; r2 < m2 && good; r2++) {
                    for(int c2 = 0; c2 < n2 && good; c2++) {
                        int r3 = r1 + r2;
                        int c3 = c1 + c2;
                        int num = board[r3][c3];
                        char p = pattern[r2].charAt(c2);
                        if(p >= '0' && p <= '9') {
                            if(p - '0' != num) good = false;
                        } else if(toLetter[num] == 0) {
                            if(toNum[p] == -1) {
                                toLetter[num] = p;
                                toNum[p] = num;
                            } else {
                                good = false;
                            }
                        } else if(toLetter[num] != p) {
                            good = false;
                        }
                    }
                }
                if(good) return new int[]{r1, c1};
            }
        }
        return new int[]{-1,-1};
    }
}
```