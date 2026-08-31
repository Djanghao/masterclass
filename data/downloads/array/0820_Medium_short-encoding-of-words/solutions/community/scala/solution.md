# Scala | Simple | 2 Liner | 100% faster

**Author:** soumensaha
**Votes:** 0
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/2173256/](https://leetcode.com/problems/short-encoding-of-words/solutions/2173256/)

---

Somehow this simple 2 liner turns out to be 100% faster & 100% less memory.

```
object Solution {
  def minimumLengthEncoding(words: Array[String]): Int = words.distinct match {
    case distinctWords => distinctWords.foldLeft(0)((len, word) => if (distinctWords.exists(w => w != word && w.endsWith(word))) len else len + word.length + 1)
  }
}
//Runtime: 1768 ms, faster than 100.00% of Scala online submissions for Short Encoding of Words.
//Memory Usage: 75.2 MB, less than 100.00% of Scala online submissions for Short Encoding of Words.
```