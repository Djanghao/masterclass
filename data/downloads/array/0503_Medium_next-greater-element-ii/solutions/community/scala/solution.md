# scala oneliner

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/3166868/](https://leetcode.com/problems/next-greater-element-ii/solutions/3166868/)

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
    def nextGreaterElements(nums: Array[Int]): Array[Int] = {
        nums.zipWithIndex.map(m => (nums.slice(m._2, nums.length) ++ nums.slice(0, m._2)).find(f=> m._1 < f).getOrElse(-1))
    }
}
```