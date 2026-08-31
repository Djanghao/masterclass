# scala solution with foldLeft

**Author:** danielOlivo
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4973640/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4973640/)

---

# Code
```
object Solution {
    def maxDepth(s: String): Int = 
        s.foldLeft((0,0)){case ((max, count), c) => c match {
            case ')' => (max, count - 1)
            case '(' => (math.max(max, count + 1), count + 1)
            case _ => (max,count)
        }}._1
}
```