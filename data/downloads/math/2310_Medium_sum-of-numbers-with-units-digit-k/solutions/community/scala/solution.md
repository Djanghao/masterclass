# Scala

**Author:** soumensaha
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2169494/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2169494/)

---

It took some time to understand the simplicity.

```
object Solution {
  def minimumNumbers(num: Int, k: Int): Int = if (num == 0) 0 else (1 to 10).find(i => i * k % 10 == num % 10 && i * k <= num).getOrElse(-1)
}
```

Regular dp solution ([coin change](https://leetcode.com/problems/coin-change/))
	
```
object Solution {
  def minimumNumbers(num: Int, k: Int): Int = if (num == 0) 0 else {
    val dp = Array.fill(num + 1)(Int.MaxValue)
    dp(0) = 0
    val validNumbers = (1 to num).filter(_ % 10 == k)
    for (i <- 1 to num; n <- validNumbers if n <= i && dp(i - n) != Int.MaxValue)
      dp(i) = (dp(i - n) + 1) min dp(i)

    if (dp(num) == Int.MaxValue) -1 else dp(num)
  }
}
```