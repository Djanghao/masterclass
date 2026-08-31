# kotlin

**Author:** lpz04
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/3111507/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/3111507/)

---

# Intuition
Backtrack - for every letter add letters from begining as along as previous letter is not same as current letter

# Approach
                           ""
              a            b          c
            ab  ac      ba  bc      ca  cb
        aba abc .....

# Complexity
- Time complexity:$$O(3^n)$$
<!-- Add your time complexity here, e.g. $$O(3^n)$$ -->

- Space complexity: $$O(3.2^(n-^1)))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun getHappyString(n: Int, k: Int): String {
        val result = mutableListOf<String>()
        backtrack("", n, result)
        if (k - 1 > result.size - 1) return ""
        return result[k-1]
    }

    fun backtrack(cur: String, level: Int, result: MutableList<String>) {
        if (level == 0) {
            result.add(cur)
            return
        }

        for(i in 0 until 3) {
            val ch = 'a'+i
            if (cur.isEmpty() || cur[cur.length - 1] != ch) {
                backtrack("$cur$ch", level-1, result)
            }
        }
    }
}
```