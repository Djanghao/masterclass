# [Scala] Using Regex

**Author:** Ygao317
**Votes:** 0
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1131027/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1131027/)

---

```
object Solution {
    def evaluate(s: String, knowledge: List[List[String]]): String = {
        // create a dictionary
        val dict = knowledge.map(l => l.head -> l.tail.head).toMap
 
        // regex replaceAllIn
        val regex = "[(]([a-z]*)[)]".r // group(1) with [a-z]* only
        regex.replaceAllIn(s, m => {
            val k = m.group(1)
            if (dict contains k) dict(k) else "?"
        })
    }
}
```