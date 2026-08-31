# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/goat-latin/solutions/3459567/](https://leetcode.com/problems/goat-latin/solutions/3459567/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def toGoatLatin(sentence: String): String = {
      val vowels = Set('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')
      sentence.split(" ").zipWithIndex.map(m=> 
        if(vowels.contains(m._1.head)) m._1 + "ma" + "a" * (m._2 + 1)
        else m._1.tail + m._1.head + "ma" + "a" * (m._2 + 1)
      ).mkString(" ")
    }
}
```