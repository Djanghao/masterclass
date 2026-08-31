# 👍Runtime 1342 ms Beats 100.00% of users with Scala

**Author:** pvt2024
**Votes:** 1
**Link:** [https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/4797331/](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/4797331/)

---

# Code
```
object Solution {
    def getProbability(balls: Array[Int]): Double = {
        val sum = balls.sum
        val all = allCases(balls, 0, 0, 0, 0, 0, sum)
        val valid = casesWithEqualDistinctBalls(balls, 0, 0, 0, 0, 0, sum)
        valid / all
    }

    def allCases(b: Array[Int], pos: Int, f: Int, s: Int, disF: Int, disS: Int, sum: Int): Double = {
        if (pos == b.length) {
            if (f == s) fact(sum / 2) * fact(sum / 2)
            else 0
        } else {
            var answer = allCases(b, pos + 1, f, s + b(pos), disF, disS + 1, sum) / fact(b(pos))
            answer += allCases(b, pos + 1, f + b(pos), s, disF + 1, disS, sum) / fact(b(pos))
            for (i <- 1 until b(pos)) {
                answer += allCases(b, pos + 1, f + i, s + b(pos) - i, disF + 1, disS + 1, sum) / (fact(i) * fact(b(pos) - i))
            }
            answer
        }
    }

    def casesWithEqualDistinctBalls(b: Array[Int], pos: Int, f: Int, s: Int, disF: Int, disS: Int, sum: Int): Double = {
        if (pos == b.length) {
            if (f == s && disF == disS) fact(sum / 2) * fact(sum / 2)
            else 0
        } else {
            var answer = casesWithEqualDistinctBalls(b, pos + 1, f, s + b(pos), disF, disS + 1, sum) / fact(b(pos))
            answer += casesWithEqualDistinctBalls(b, pos + 1, f + b(pos), s, disF + 1, disS, sum) / fact(b(pos))
            for (i <- 1 until b(pos)) {
                answer += casesWithEqualDistinctBalls(b, pos + 1, f + i, s + b(pos) - i, disF + 1, disS + 1, sum) / (fact(i) * fact(b(pos) - i))
            }
            answer
        }
    }

    def fact(n: Double): Double = {
        var res = 1.0
        for (i <- 2 to n.toInt) {
            res *= i
        }
        res
    }
}
```