# ✅ Scala: easy O(1) mem straightforward solution

**Author:** aaabramov
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-string/solutions/3467828/](https://leetcode.com/problems/reverse-string/solutions/3467828/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```scala
object Solution {

  def reverseString(s: Array[Char]): Unit =
    for (i <- 0 until (s.length / 2)){
      val tmp = s(i)
      s(i) = s(s.length - i - 1)
      s(s.length - i - 1) = tmp
    }

}
```