# Scala: sorted + 2 pointers (counting lost at the end)

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/4820964/](https://leetcode.com/problems/bag-of-tokens/solutions/4820964/)

---

# Code
```
object Solution {
  def bagOfTokensScore(tokens: Array[Int], pow: Int): Int = {
    var score, lost, l = 0
    var power = pow
    var r = tokens.length - 1

    tokens.sortInPlace

    while (l <= r && (score != 0 || power >= tokens(l)))
      if (score == 0 || power >= tokens(l)) {
        power -= tokens(l)
        score += 1
        lost = 0
        l += 1
      } else {
        power += tokens(r)
        score -= 1
        lost += 1
        r -= 1
      }

    score + lost
  }
}
```