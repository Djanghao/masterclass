# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/solutions/4296696/](https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/solutions/4296696/)

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
  def stringCount(n: Int): Int = {
    if(n < 4)  0
    else {
      val mod = 1000000007
      val total = BigInt ("26").pow(n)
      val l0 = BigInt ("25").pow(n)
      val t0 = BigInt ("25").pow(n)
      val e01 = BigInt ("25").pow(n) + BigInt ("25").pow(n - 1) * BigInt (n.toString)
      val l0t0 = BigInt ("24").pow(n)
      val l0e01 = BigInt ("24").pow(n) + BigInt ("24").pow(n - 1) * BigInt (n.toString)
      val t0e01 = BigInt ("24").pow(n) + BigInt ("24").pow(n - 1) * BigInt (n.toString)
      val l0t0e01 = BigInt ("23").pow(n) + BigInt ("23").pow(n - 1) * BigInt (n.toString)
      ((total - l0 - t0 - e01 + l0e01 + l0t0 + t0e01 - l0t0e01) % mod).toInt
    }
  }
}
```