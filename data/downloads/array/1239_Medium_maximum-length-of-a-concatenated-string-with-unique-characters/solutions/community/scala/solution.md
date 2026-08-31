# Scala

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/5237844/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/5237844/)

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
  def maxLength(arr: List[String]): Int = {
    def solve(idx: Int, temp: String, n: Int, memo: scala.collection.mutable.Map[String, Int]): Int = {
      if (idx >= n)
        return temp.length

      val key = temp + idx
      if (memo.contains(key))
        return memo(key)

      var include = 0
      var exclude = 0

      if (!hasCommon(arr(idx), temp)) {
        val newTemp = temp + arr(idx)
        include = solve(idx + 1, newTemp, n, memo)
      }

      exclude = solve(idx + 1, temp, n, memo)

      val result = math.max(include, exclude)
      memo(key) = result
      result
    }

    def hasCommon(s1: String, s2: String): Boolean = {
      val arr = Array.fill(26)(0)
      var ans = false
      
      import scala.util.control.Breaks._
      
      breakable {
        for (ch <- s1) {
            if (arr(ch - 'a') > 0) {
                ans = true
                break()
            }
            arr(ch - 'a') += 1
        }

        for (ch <- s2) {
            if (arr(ch - 'a') > 0) {
                ans = true
                break()
            }
        }
      }

      ans
    }

    solve(0 , "", arr.length, scala.collection.mutable.Map[String, Int]())
  }
}
```