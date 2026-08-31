# scala

**Author:** nikhilpurwar23
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5581228/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5581228/)

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
    def canBeEqual(target: Array[Int], arr: Array[Int]): Boolean = {
        val arr1=target.sorted
        val arr2=arr.sorted
        arr1.toSeq==arr2.toSeq
    }
}
/*object Solution {
    def canBeEqual(target: Array[Int], arr: Array[Int]): Boolean = {
        val arr1=target.sorted
        val arr2=arr.sorted
        arr1.sameElement(arr2)
    }
}*/
```