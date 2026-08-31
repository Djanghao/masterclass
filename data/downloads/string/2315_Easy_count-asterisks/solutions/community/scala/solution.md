# Scala | Single pass | O(n)

**Author:** soumensaha
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/2196075/](https://leetcode.com/problems/count-asterisks/solutions/2196075/)

---

```
object Solution {
  def countAsterisks(s: String): Int =
    s.foldLeft((false, 0)) { case ((pair, count), c) =>
      c match {
        case '|' => !pair -> count
        case '*' => pair -> (if (pair) count else count + 1)
        case _ => pair -> count
      }
    }._2
}

//Runtime: 636 ms, faster than 100.00% of Scala online submissions for Count Asterisks.
//Memory Usage: 67.4 MB, less than 100.00% of Scala online submissions for Count Asterisks.
```