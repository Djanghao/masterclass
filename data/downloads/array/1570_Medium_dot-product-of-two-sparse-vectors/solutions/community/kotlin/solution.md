# One-liner using `zip`

**Author:** lazy-bird
**Votes:** 1
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/4335635/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/4335635/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Use `zip` to combine corresponding values from both arrays

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class SparseVector(val nums: IntArray) {
    fun dotProduct(vec: SparseVector): Int = 
        nums.zip(vec.nums).fold(0) { ac, p -> ac + (p.first * p.second) }
}
```