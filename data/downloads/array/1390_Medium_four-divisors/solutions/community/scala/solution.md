# Simple scala solution

**Author:** dLuxHu
**Votes:** 0
**Link:** [https://leetcode.com/problems/four-divisors/solutions/5375550/](https://leetcode.com/problems/four-divisors/solutions/5375550/)

---


Not the quickest solution, there is probably a quicker way to find divisors by prime factorization.

# Code
```
object Solution {
  def sumFourDivisors(nums: Array[Int]): Int = {
    nums.map {
      num =>
        val sq = Math.sqrt(num.toDouble)
        if (sq.floor == sq) 0
        else {
          val divisors = for {
            i <- 2 to sq.floor.toInt
            if num % i == 0
          } yield i
          if (divisors.length != 1) 0
          else 1 + divisors.head + num / divisors.head + num
        }
    }.sum
  }
}
```

### Note

Each numer is dividable by 1 and itself, so I need to find numbers that has exactly one divisor in the $$[2, \\sqrt{x}]$$ range and $$\\sqrt{x}$$ is not an integer.

