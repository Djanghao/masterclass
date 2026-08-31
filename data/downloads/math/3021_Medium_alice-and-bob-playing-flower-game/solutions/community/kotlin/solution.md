# Kotlin O(1) simple math

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4639007/](https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4639007/)

---

# Intuition
Alice wins anytime we are at indicies $$i, j$$ where $$(i + j) mod 2 = 1$$ ***(sum of i and j is odd)*** and $$i_n \u2208 [1, n]$$ and $$j \u2208 [1,m]$$ 

To count the number of index pairs that satisfy this, we calculate $$ (n/2) * (m - m/2) + (m/2) * (n - n/2) $$ which can be further reduced down to $$ m * n / 2 $$

I show both formulas in code below.

# Code
```
class Solution {
    fun flowerGame(n: Int, m: Int): Long {
        val nEven = n.toLong() / 2
        val nOdd = n - nEven
        val mEven = m.toLong() / 2
        val mOdd = m - mEven

        return nEven * mOdd + nOdd * mEven
    }
}
```

# or reduce the formula down to:
```
class Solution {
    fun flowerGame(n: Int, m: Int) = m.toLong() * n / 2
}
```