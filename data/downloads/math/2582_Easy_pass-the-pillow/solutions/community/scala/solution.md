# Scala FP: just math O(1)

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/5426089/](https://leetcode.com/problems/pass-the-pillow/solutions/5426089/)

---

# Code
```
object Solution {
  def passThePillow(n: Int, time: Int): Int = {
    val round = 2 * (n - 1)
    val mod2 = time % round
    (if (mod2 >= n) round - mod2 else mod2) + 1
  }
}
```