# scala one line solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2652943/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2652943/)

---

```
  def equalFrequency(word: String): Boolean = 
    (0 until word.length).foldLeft(false)((ans, idx)=>{
      ans || (word.substring(0, idx) + word.substring(idx + 1, word.length)).groupBy(identity).mapValues(_.size).map(_._2).groupBy(identity).size == 1
    })
```