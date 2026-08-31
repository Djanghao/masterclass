# Scala

**Author:** HeavenWatcher
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/4417038/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/4417038/)

---

```scala
object Solution {
  def findNumOfValidWords(words: Array[String], puzzles: Array[String]): List[Int] = {
    val count = words
      .map(_.toSet.mkString.sorted)
      .filter(_.length <= 7)
      .groupBy(identity)
      .view
      .mapValues(_.length)
    puzzles.map{ puzzle =>
      (0 until puzzle.length).map { len =>
        puzzle.tail.combinations(len).map { sub =>
          count.getOrElse((puzzle.head + sub).toSet.mkString.sorted, 0)
        }.sum
      }.sum
    }.toList
  }
}
```