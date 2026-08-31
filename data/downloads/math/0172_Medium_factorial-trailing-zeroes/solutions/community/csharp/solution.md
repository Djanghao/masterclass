# C# easy and understanding solution

**Author:** TabrizGulmammadov
**Votes:** 2
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/4464898/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/4464898/)

---

# Approach
Explanation is in [this link](https://www.youtube.com/watch?v=hEN6_v6gSEo&list=PLUE2inXTp_T90ZhISd9bm0tAU3OTh43v9).

# Complexity
- Time complexity: O(n)/O(log(5))

- Space complexity: O(1)

# Code
```
public class Solution {
    public int TrailingZeroes(int n) {
        // we have to find counts of 5, 25, 125, 625, etc. dividends in n
        int trailingZeroes = 0;

        while(n >= 5) {
            n /= 5;
            trailingZeroes += n;
        }

        return trailingZeroes;
    }
}
```