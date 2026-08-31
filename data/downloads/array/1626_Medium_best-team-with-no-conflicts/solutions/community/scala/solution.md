# scala Approach 2 (Bottom-Up Dynamic Programming)

**Author:** slovic
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3123469/](https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3123469/)

---

# Intuition
It is more or less Approach 2 (Bottom-Up Dynamic Programming) from official sollution thread translated to scala. It still uses array as a accumulator (`dp`) but rest structures are immutable. It is rather consise but there still is place to improvment.


# Code
```
case class Person(score: Int, age: Int)

def bestTeamScore(scores: Array[Int], ages: Array[Int]): Int = {
  val len = scores.length
  val team = (scores zip ages).sorted.map(Person.tupled)
  var dp = Array.fill(len)(0)

  (0 until len).foldLeft(0) { (res, i) =>
    dp(i) = team(i).score
    (0 until i).reverse.foreach { j =>
      if (team(i).age >= team(j).age)
        dp(i) = math.max(dp(i), team(i).score + dp(j))
    }

    math.max(res, dp(i))
  }
}
```