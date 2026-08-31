# Scala 7 liner!

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/5335201/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/5335201/)

---

# Intuition
Let `counts(i)` be number of valid strings of length `i` then `counts(i) = counts(i-zero) + counts(i-one)`

# Code
```
object Solution {
    def countGoodStrings(low: Int, high: Int, zero: Int, one: Int): Int = {
        val counts = Array.ofDim[Int](high + 1)
        counts(0) = 1
        
        def at(x: Int) = if x < 0 then 0 else counts(x)
        
        def modAdd(a: Int, b: Int) = (a + b) % 1000000007

        for (i <- 1 to high) counts(i) = modAdd(at(i-zero), at(i-one))
                
        counts.drop(low).reduce(modAdd)
    }
}
```