# Scala 5 liner!

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/5276565/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/5276565/)

---


# Code
```
object Solution {
    def goodBinaryStrings(minLength: Int, maxLength: Int, oneGroup: Int, zeroGroup: Int): Int = {
        val mod = 1000000007
        val cache = collection.mutable.Map[Int, Long](0 -> 1L)

        def solve(i: Int): Long =  
            if i < 0 then 0 else cache.getOrElseUpdate(i, (solve(i - oneGroup) + solve(i - zeroGroup)) % mod)

        ((minLength to maxLength).map(solve).sum % mod).toInt
    }
}
```