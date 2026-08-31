# scala one line solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/2649945/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/2649945/)

---

```
    def largestWordCount(messages: Array[String], senders: Array[String]): String = 
        (senders zip (messages.map(n => n.split(" ").size).toList)).groupBy(_._1).mapValues(n => n.map(_._2).sum).maxBy(n => (n._2, n._1))._1

        
```