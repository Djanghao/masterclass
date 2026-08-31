# Kotlin Bitmask with explanation

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/3530922/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/3530922/)

---

# Approach
Since we know that `2 <= s.length <= 12` we can use a bitmask to represent which characters from s we can/cannot use to build a string.

Traverse all possible `bitmasks` from `1` until $$2^n$$, for each `bitmask`, build a `string subsequence`. The bitmask will help us to exclude characters.

For each `string subsequence`, if its reverse is equal to it, it means that we have a palindrome and we can add it to a hashmap where we ***map bitmask to palindrom length***.

Then, we check all palindromes in our hashmap, if two palindromes are ***disjoint palindromic subsequences***, then we can try to update our `max` result with the product of their length.


- ***Time complexity:*** $O(2^n * len(s))$

- ***Space complexity:*** $O(2^n)$

# Code
```
class Solution {
    fun maxProduct(s: String): Int {
        val hm = HashMap<Int, Int>()

        for (mask in 1 until (1 shl s.length)) {
            val sb = StringBuilder()

            for (i in 0 until s.length) {
                if (mask and (1 shl i) > 0) {
                    sb.append(s[i])
                } 
            }

            val p = sb.toString()
            if (p == p.reversed()) {
                hm.put(mask, p.length)
            }
        }

        var max = 0
        for (mask1 in hm.keys) {
            for (mask2 in hm.keys) {
                if (mask1 and mask2 == 0) {
                    max = maxOf(
                        max,
                        hm[mask1]!! * hm[mask2]!!
                    )
                }
            }
        }

        return max
    }
}
```