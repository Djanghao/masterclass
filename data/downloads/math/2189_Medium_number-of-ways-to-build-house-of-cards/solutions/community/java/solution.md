# Recursion with memoization | Explanation | Java

**Author:** andreaiacono
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/solutions/1824835/](https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/solutions/1824835/)

---

The basic idea is that you can have a valid row if the number of cards is 2 or a multiple of 3 starting from 5 (5, 8, 11, 14, ...). The recursive approach is using two parameters: the number of remaining cards and the number of cards used for the last row; since the first call doesn't have a lastRow yet, and since the lastRow must be greater that the current row (otherwise the house will collapse), the first call has lastRow equal to n + 1.  Memoization is straightforward given the two parameters.

```
    public int houseOfCards(int n) {
        Integer[][] memo = new Integer[n+1][n+2];
        return solve(n, n+1, memo);
    }
    
    int solve(int n, int lastRow, Integer[][] memo) {
        if (n == 0 || n == 2) {
            return 1;
        }
        
        if (memo[n][lastRow] != null) {
            return memo[n][lastRow];
        }

        int total = 0;
        for (int i=5; i <= n && i < lastRow; i+=3) {
            total += solve(n-i, i, memo);
        }
        memo[n][lastRow] = total;
        
        return total;
    }
