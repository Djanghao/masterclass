# scala best solution

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/5755923/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/5755923/)

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
    def nextGreatestLetter(letters: Array[Char], target: Char): Char = {
        var minCharOption :Option[Char] = letters.filter(c => c!=target && c >target).toList match {
            case Nil  =>None
            case filteredList =>Some(filteredList.min)
        }

        minCharOption match {
            case None => letters(0)
            case Some(minChar) => minChar
        }
    }
}
```