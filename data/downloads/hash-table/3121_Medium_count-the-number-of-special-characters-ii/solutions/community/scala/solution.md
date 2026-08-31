# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5093566/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5093566/)

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
```
object Solution {
  def numberOfSpecialChars(word: String): Int = {
    val lo = Array.fill(26)(false)
    val up = Array.fill(26)(false)
    for{ch <- word}{
      if(ch.isLower) lo(ch - 'a') = !up(ch - 'a')
      else up(ch - 'A') = true
    }
    (0 until 26).foldLeft(0)((acc, i) =>{acc + (if(lo(i) && up(i)) 1 else 0)})
  }
}
```