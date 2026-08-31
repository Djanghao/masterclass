# [Scala] Top down DP using for comprehension for cartesian product of left-right

**Author:** cosminci
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/1488678/](https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/1488678/)

---

Scala adaptation of the solution well described here: https://leetcode.com/problems/the-score-of-students-solving-math-expression/discuss/1486991/312.-Burst-Balloons

```
  def scoreOfStudents(s: String, answers: Array[Int]): Int = {
    val correctAnswer = (1 to s.length by 2)
      .filter(i => i == s.length || s(i) == '+')
      .foldLeft(0, 0) {
        case ((sum, j), i) =>
          val localProduct = (j until i by 2).foldLeft(1) {
            case (product, k) =>
              product * (s(k) - '0')
          }
          (sum + localProduct, i + 1)
    }._1

    val mem = mutable.Map.empty[(Int, Int), Set[Int]]

    def dfs(startIdx: Int, endIdx: Int): Set[Int] = {
      if (endIdx - startIdx == 1) return Set(s(startIdx) - '0')
      if (mem.contains((startIdx, endIdx))) return mem((startIdx, endIdx))

      val results = for {
        splitIdx    <- startIdx + 1 until endIdx by 2
        leftResult  <- dfs(startIdx, splitIdx)
        rightResult <- dfs(splitIdx + 1, endIdx)
        result = if (s(splitIdx) == '+') leftResult + rightResult else leftResult * rightResult
        if result <= 1000
      } yield result

      mem.update((startIdx, endIdx), results.toSet)
      mem((startIdx, endIdx))
    }

    val results = dfs(startIdx = 0, endIdx = s.length)
	
    answers.map { answer =>
      if (answer == correctAnswer) 5
      else if (results.contains(answer)) 2
      else 0
    }.sum
  }
```