# Scala fold twice

**Author:** soft_mittens
**Votes:** 1
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/1906262/](https://leetcode.com/problems/brace-expansion/solutions/1906262/)

---

```
object Solution {
  def expand(s: String): Array[String] = {
    // The inner list represents additive components, i,e, "{a,b}" becomes List("a","b"), "abc" becomes List("abc")
	// The buffer is only used when we're 'inside' the curly braces
	// The boolean switch is used for tracking if we're inside curly braces or not
    val (folded, _, _) = s.foldLeft((List.empty[List[String]], "", false)) {
        case ((stack, buffer, _), '{') => (stack, buffer, true)
        case ((stack, buffer, _), '}') => (stack :+ buffer.split(",").toList, "", false)
        case ((stack, buffer, true), other) => (stack, buffer + other, true)
        case ((stack, buffer, false), other) => (stack :+ List(other.toString), buffer, false)
      }
    folded.tail.foldLeft(folded.head)((r, i) => i.flatMap(e => r.map(_ + e))).sorted.toArray
  }
}
```