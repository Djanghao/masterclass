# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/4150173/](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/4150173/)

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
    def uniqueLetterString(s: String): Int = {
      val index = Array.fill(26)(Array(-1, -1))
      val mod = 100000007
      val n = s.length
      val res = (0 until n).foldLeft(0) { (acc, i) =>
        val c = s.charAt(i) - 'A'
        val newAcc = (acc + (i - index(c)(1)) * (index(c)(1) - index(c)(0)) % mod) % mod
        index(c) = Array(index(c)(1), i)
        newAcc
      }
      (0 until 26).foldLeft(res){(acc, c)=>(acc + (n - index(c)(1)) * (index(c)(1) - index(c)(0)) % mod) % mod}
    }
}
```