# scala FP solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-of-all-substrings/solutions/5241616/](https://leetcode.com/problems/vowels-of-all-substrings/solutions/5241616/)

---

```scala
object Solution {
  val vowels = Set('a', 'e', 'i', 'o', 'u')
  def countVowels(word: String): Long = word.zipWithIndex
    .collect{case (c,i) if vowels.contains(c) =>
      (i+1).toLong*(word.size-i)
    }.sum
}
```