# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/3612588/](https://leetcode.com/problems/complex-number-multiplication/solutions/3612588/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def complexNumberMultiply(num1: String, num2: String): String = {
      val nums1 = num1.split("[+i]").map(_.toInt)
      val nums2 = num2.split("[+i]").map(_.toInt)
      val real = nums1(0) * nums2(0) - nums1(1) * nums2(1)
      val imaginary = nums1(0) * nums2(1) + nums1(1) * nums2(0)
      s"$real+${imaginary}i"
    }
}
```