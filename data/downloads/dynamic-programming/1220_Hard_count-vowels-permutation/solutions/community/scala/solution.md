# Scala Solution to Count Vowels Permutation

**Author:** wongphu
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-vowels-permutation/solutions/2393280/](https://leetcode.com/problems/count-vowels-permutation/solutions/2393280/)

---

```
object Solution {
  def countVowelPermutation(n: Int): Int = {
    def mod(num: Long): Long = num % 1000000007
    
    @scala.annotation.tailrec
    def loop(k: Int, a: Long, e: Long, i: Long, o: Long, u: Long): Long = {
      if (k == 1) {
        mod(a + e + i + o + u)
      } else {
        loop(k-1, e, mod(a+i), mod(a+e+o+u), mod(i+u), a)
      }
    }
    
    loop(n, 1, 1, 1, 1, 1).toInt
  }
}
```