# DP Kotlin solution (Beats 100%)

**Author:** shtanko
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-appeal-of-a-string/solutions/2886881/](https://leetcode.com/problems/total-appeal-of-a-string/solutions/2886881/)

---

# Intuition
Kotlin stdlib functions like mapIndexed and sun were used

# Approach
For each position, we calculate how many times this character will be the first occurrence of a substring, as it contributes to the answer.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```

class Solution {
    fun appealSum(s: String): Long {
        var cur: Long = 0
        val prev = LongArray(26)
        return s.mapIndexed { index, c ->
            cur += index + 1 - prev[c - 'a']
            prev[c - 'a'] = index.toLong() + 1
            cur
        }.sum()
    }
}

```