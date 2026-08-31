# scala brute force solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/3095705/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/3095705/)

---

# Code
```
object Solution {
  def twoEditWords(queries: Array[String], dictionary: Array[String]): List[String] = {
    def compare(a: Seq[Char], b: Seq[Char], edits: Int): Boolean = {
      if(edits < 0) false
      else if(a.isEmpty) true
      else if(a.head == b.head) compare(a.tail,b.tail, edits)
      else compare(a.tail,b.tail, edits-1)
    }
    queries.toList.filter{w => dictionary.exists{d => compare(w,d,2)}}
  }
}
```