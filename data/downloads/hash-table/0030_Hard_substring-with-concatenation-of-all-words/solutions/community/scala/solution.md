# Scala FP: sliding sum of square word.hashCode comparing, no Map/Set, beats >80% on time now

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/4380099/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/4380099/)

---

- Time complexity:
$$O(s.length + words[i].length)$$

# Code
```
object Solution {
  def findSubstring(s: String, words: Array[String]): List[Int] = {
    val wordLen = words.head.length
    val wordsCount = words.length
    val wordsSum: Long = words.foldLeft(0L)((sum, w) => sum + w.hashCode * w.hashCode)
    (0 until wordLen).toList.flatMap { skip =>
      val tail = s.drop(skip)
      if (tail.length < wordLen * wordsCount) Nil
      else {
        val hashes = tail.sliding(wordLen, wordLen).map(w => w.hashCode * w.hashCode).toList
        val initSum = hashes.take(wordsCount).foldLeft(0L)(_ + _)
        hashes.drop(wordsCount).foldLeft((hashes, initSum, 1, if (wordsSum == initSum) List(skip) else List.empty[Int])) {
          case ((headHashes, sum, counter, result), tailHash) =>
            val nextSum = sum - headHashes.head + tailHash
            (headHashes.tail, nextSum, counter + 1, if (wordsSum == nextSum) (skip + counter * wordLen) :: result else result)
        }._4
      }
    }
  }
}
```