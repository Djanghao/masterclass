# By prepending to list

**Author:** lalitkp095
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/6095461/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/6095461/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def reverseWords(s: String): String = {
        val lst = s.split(" ").toList.filter(_.nonEmpty)
        var lst2 = List[String]()
        lst.foreach(e => lst2 = e :: lst2 )
        lst2.mkString(" ")
    }
}
```