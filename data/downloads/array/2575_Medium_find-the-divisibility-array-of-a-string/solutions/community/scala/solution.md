# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/5290915/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/5290915/)

---

```scala
object Solution {
  def divisibilityArray(word: String, m: Int): Array[Int] =
    word.iterator.map(_ - '0')
    .scanLeft(0L){case (last,curr) => (last * 10 + curr) % m}
    .map(x => (1-x.sign).toInt)
    .drop(1).to(Array)
}
```