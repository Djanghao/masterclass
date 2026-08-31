# [Kotlin/Java] 3 lines; Easy to understand/explain

**Author:** KevCron
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/2338575/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/2338575/)

---

```
fun countOdds(low: Int, high: Int): Int {
      var difference = (high - low) / 2
      if (low % 2 == 1 || high % 2 == 1) difference++
      return difference
}
```

Interviewers don't give points for minimized lines; easier to read code is usually better. Also helps with being able to explain your solution.