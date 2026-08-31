# Efficient Scala solution

**Author:** tumakha
**Votes:** 4
**Link:** [https://leetcode.com/problems/combination-sum/solutions/875561/](https://leetcode.com/problems/combination-sum/solutions/875561/)

---

```scala
  def combinationSum(candidates: Array[Int], target: Int): List[List[Int]] = {
    val result = collection.mutable.ListBuffer[List[Int]]()

    def dfs(start: Int, remain: Int, combination: List[Int]): Unit =
      if (remain == 0)
        result += combination
      else if (remain > 0)
        for (i <- start until candidates.length) {
          dfs(i, remain - candidates(i), candidates(i) :: combination)
        }

    dfs(0, target, List())
    result.toList
  }
```