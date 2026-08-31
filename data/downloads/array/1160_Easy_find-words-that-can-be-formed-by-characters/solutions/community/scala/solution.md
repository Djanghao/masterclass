# [scala] fp + hash_table

**Author:** leetcode08
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4355096/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4355096/)

---

# Complexity
- Time complexity: $$O(n+m\xB7k)$$, where:
    - *n* - the length of 'chars' string;
    - *m* - the number of words;
    - *k* - the length of the largest word;
- Space complexity: $$O(1)$$

# Code
```scala
object Solution {
  def countCharacters(words: Array[String], chars: String): Int = {
    val charsFreqMap = getCharFreqMap(chars)

    words
      .filter { word =>
        getCharFreqMap(word).forall { case (char, freqInWord) =>
          charsFreqMap
            .get(char)
            .map(_ >= freqInWord)
            .getOrElse(false)
        }
      }
      .map(_.size)
      .sum
  }

  def getCharFreqMap(s: String): Map[Char, Int] =
    s.groupBy(identity).view.mapValues(_.size).toMap
}

```