# Scala with groupMapReduce

**Author:** ofjoao
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/5443231/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/5443231/)

---

# Code
```
object Solution {
    def countWords(words1: Array[String], words2: Array[String]): Int = {
        def clean[A](as: Array[A]): List[A] = as.groupMapReduce(identity)(_ => 1)(_ + _).filterNot(_._2 > 1).keys.toList
        clean(words1).count(clean(words2).contains)
    }
}
```