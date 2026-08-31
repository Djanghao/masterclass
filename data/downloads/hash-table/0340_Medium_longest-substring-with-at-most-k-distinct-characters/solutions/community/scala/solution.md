# Scala Easy to understand two solutions Set or do while

**Author:** sparker123
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/1920749/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/1920749/)

---

```
object Solution {
    def lengthOfLongestSubstringKDistinct(s: String, k: Int): Int = {
     val set = scala.collection.mutable.Set[Char]()
     val arr = new Array[Int](256)
     var left = 0
     var res = 0
     for (right <- s.indices) {
       set.addOne(s(right))

       // the char last seen
       arr(s(right)) = right

      while (set.size > k) {
         if (arr(s(left)) == left)
           set.remove(s(left))
           left += 1
         }
        res = res.max(right - left + 1)
      }
     res
    }
}

object Solution {
  def lengthOfLongestSubstringKDistinct(s: String, k: Int): Int = {
    val count = new Array[Int](256)
    var num, left, res = 0
    for (right <- s.indices) {
      count(s(right)) += 1
      if (count(s(right)) == 1) {
        num += 1
      }
      if (num > k) {
        do {
          count(s(left)) -= 1
          left += 1
        } while (count(s(left - 1)) != 0)
        num -= 1
      }
      res = res.max(right - left + 1)
    }
    res
  }
```