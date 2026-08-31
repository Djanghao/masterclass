# scala recursion with memoization

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/scramble-string/solutions/3360145/](https://leetcode.com/problems/scramble-string/solutions/3360145/)

---

# Code
```
object Solution {
  def isScramble(s1: String, s2: String): Boolean = {
    val cache = collection.mutable.Map.empty[(Int,Int,Int),Boolean]
    def impl(i1: Int, i2: Int, len: Int): Boolean =
      if(len == 1) s1(i1) == s2(i2)
      else if(cache.contains((i1,i2,len))) cache((i1,i2,len))
      else { (1 to len-1).exists { l1 =>
        lazy val l2 = len-l1
        val rc = impl(i1,i2,l1) && impl(i1+l1,i2+l1,l2) ||
                 impl(i1,i2+l1,l2) && impl(i1+l2,i2,l1)
        cache += ((i1,i2,len) -> rc)
        rc
      }}
    impl(0,0,s1.length)
  }
}
```