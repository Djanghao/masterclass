# Scala functional solution: top-down DP (2 dimension)

**Author:** hongjian3
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/4481710/](https://leetcode.com/problems/valid-palindrome-iii/solutions/4481710/)

---


# Code
```
object Solution {
    def isValidPalindrome(s: String, k: Int): Boolean = {
        val cache = collection.mutable.Map[(Int, Int), Int]()

        def dp(left: Int, right: Int): Int = {
            if (cache.contains((left, right)))
                cache((left, right))
            else {
                val res = if (left >= right) 0
                else if (s(left) == s(right))
                    dp(left+1, right-1)
                else
                    1 + math.min(dp(left+1, right), dp(left, right-1))
                cache((left, right)) = res
                res
            }
        }

        dp(0, s.length-1) <= k
    }
}
```