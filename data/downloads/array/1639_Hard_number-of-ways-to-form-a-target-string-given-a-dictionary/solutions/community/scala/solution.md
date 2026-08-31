# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3471534/](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3471534/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def numWays(words: Array[String], target: String): Int = {
        val cnt = words.map(_.toArray).transpose.map(_.groupBy(identity).mapValues(_.size.toLong))
        val dp = Array.ofDim[Long](target.length, words(0).length)
        for((ch, i) <- target.zipWithIndex){
            for(j <- 0 until  words(0).length){
                if(i == 0)
                    if(j == 0) dp(i)(j) = cnt(0).getOrElse(ch, 0L)
                    else dp(i)(j) = dp(i)(j - 1) + cnt(j).getOrElse(ch, 0L)
                else if(i <= j) dp(i)(j) = (dp(i)(j - 1) + dp(i - 1)(j - 1) * cnt(j).getOrElse(ch, 0L)) % 1000000007
            }
        }
        dp.last.last.toInt
    }
}
```