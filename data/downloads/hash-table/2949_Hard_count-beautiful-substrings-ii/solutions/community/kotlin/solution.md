# Kotlin O(n) solution with link to explanation and clearification on code

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4375166/](https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4375166/)

---

# Intuition
I couldn't quite figure this one out on my own, but I found [THIS](https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4330570/python-o-n-solution-from-weekly-contest-373/) solution very helpful in understanding how to come up with an answer that will get accepted considering the constraints. Please do check that post for a clear explanation, it explains it better than I could.

Note that `prefix` is a prefix sum from index 0 up to (inclusive) i, which is the sum of all the characters where any c that is a vowels increment the count by 1, and any char that is not decrements the count by 1.

Some modifications for a clearer code:

I use `isVow(c: Char)` to check if `c` is in the `vowels`
I use `Int.pow(k: Int)` to calculate `Int (this) to the power of k`

# Code
```
class Solution {
    fun beautifulSubstrings(s: String, k: Int): Long {
        var l = 1
        for (i in 1..k) {
            if ((i pow 2) % k == 0) {
                l = i
                break
            }
        }

        var prefix = 0
        var vow = 0
        var res = 0L
        val count = HashMap<Pair<Int, Int>, Int>().apply { this[0 to 0] = 1 }
        for (c in s) {
            if (isVow(c)) {
              prefix++
              vow++
              vow %= l
            } else {
              prefix--
            }
            res = (res + (count[prefix to vow] ?: 0))
            count[prefix to vow] = (count[prefix to vow] ?: 0) + 1
        }

        return res
    }
    
    private fun isVow(c: Char) = c in setOf('a', 'e', 'i', 'o', 'u')

    infix fun Int.pow(k: Int) = Math.pow(this.toDouble(), k.toDouble()).toInt()
}
```