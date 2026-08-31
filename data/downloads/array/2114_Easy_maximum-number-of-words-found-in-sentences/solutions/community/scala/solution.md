# scala blank count

**Author:** zxfspace
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1802340/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1802340/)

---


```
  def mostWordsFound(sentences: Array[String]): Int = {
    sentences.map(s => s.count(_ == ' ')).max + 1
  }
```