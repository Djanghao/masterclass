# scala solution

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5202208/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5202208/)

---

```scala
object Solution {
  def maxScoreWords(words: Array[String], letters: Array[Char], score: Array[Int]): Int =
    lazy val lettersMap = letters.groupMapReduce(identity)(_ => 1)(_ + _)
    (0 until (1<<words.size)).map{mask =>
      lazy val lettersInSet = words.zipWithIndex.filter{case (_,i) => ((1<<i) & mask) != 0}
        .flatMap(_._1).groupMapReduce(identity)(_ => 1)(_ + _)
      if(!lettersInSet.forall{case (k,v) => lettersMap.getOrElse(k,0) >= v }) 0
      else lettersInSet.map{case (k,v) => score(k - 'a') * v }.sum
    }.max
}
```