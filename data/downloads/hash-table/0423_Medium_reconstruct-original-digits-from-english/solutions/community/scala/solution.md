# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/3613977/](https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/3613977/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def originalDigits(s: String): String = {
      val counts = Array.fill(10)(0)
      s.foreach {
        case 'z' => counts(0) += 1
        case 'w' => counts(2) += 1
        case 'u' => counts(4) += 1
        case 'x' => counts(6) += 1
        case 'g' => counts(8) += 1
        case 'o' => counts(1) += 1 // 1, 0, 2, 4
        case 'h' => counts(3) += 1 // 3, 8
        case 'f' => counts(5) += 1 // 5, 4
        case 's' => counts(7) += 1 // 7, 6
        case 'i' => counts(9) += 1 // 9, 8, 6, 5
        case _ =>
      }
      counts(1) -= counts(0) + counts(2) + counts(4)
      counts(3) -= counts(8)
      counts(5) -= counts(4)
      counts(7) -= counts(6)
      counts(9) -= counts(8) + counts(6) + counts(5)
      (0 until 10).flatMap(i => List.fill(counts(i))(i.toString)).mkString
    }
}
```