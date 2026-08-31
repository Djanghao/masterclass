# Kotlin solution

**Author:** nothingelsematters
**Votes:** 1
**Link:** [https://leetcode.com/problems/arithmetic-subarrays/solutions/4320394/](https://leetcode.com/problems/arithmetic-subarrays/solutions/4320394/)

---

# Complexity

`nums` size as $$n$$ and `l` and `r` size as $$m$$.

- Time complexity: $$O(m n \\log(n))$$
- Space complexity: $$O(n)$$

# Code

```
class Solution {
    fun checkArithmeticSubarrays(nums: IntArray, ls: IntArray, rs: IntArray): List<Boolean> =
        ls.asSequence()
            .zip(rs.asSequence())
            .map { (l, r) ->
                nums.asList()
                    .subList(l, r + 1)
                    .asSequence()
                    .sorted()
                    .zipWithNext()
                    .fold(null) { diff: Int?, (i, j) ->
                        when {
                            diff == null -> j - i
                            diff != j - i -> return@map false
                            else -> diff
                        }
                    }
                true
            }
            .toList()
}
```