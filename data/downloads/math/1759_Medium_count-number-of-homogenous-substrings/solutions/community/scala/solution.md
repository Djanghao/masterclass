# ✅ Scala: easy solution (beats 100%/100%)

**Author:** aaabramov
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/3461787/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/3461787/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```scala
object Solution {

  def countHomogenous(s: String): Int = {
    var result = 0

    var last = '0'
    var cnt = 0

    for (c <- s){
      if (c == last){
        cnt += 1
        result = (result + cnt) % (1e9 + 7).toInt
      } else {
        last = c
        result += 1
        cnt = 1
      }
    }

    result
  }

}
```