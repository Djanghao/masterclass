# Scala FP: 1 pass foldLeft no simulation

**Author:** SerhiyShaman
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4997528/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4997528/)

---

# Code
```
object Solution {
  def timeRequiredToBuy(tickets: Array[Int], k: Int): Int =
    tickets.indices.foldLeft(0)((sum, n) => sum + tickets(n).min(if (n > k) tickets(k) - 1 else tickets(k)))
}
```