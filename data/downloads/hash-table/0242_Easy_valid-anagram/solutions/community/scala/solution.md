# Efficient Scala solution

**Author:** tumakha
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/1060614/](https://leetcode.com/problems/valid-anagram/solutions/1060614/)

---

```scala
  def isAnagram(s: String, t: String): Boolean = charCounts(s) sameElements charCounts(t)

  private def charCounts(str: String): Array[Int] = {
    val counts = Array.ofDim[Int](26)
    for (ch <- str) counts(ch - 'a') += 1
    counts
  }
```