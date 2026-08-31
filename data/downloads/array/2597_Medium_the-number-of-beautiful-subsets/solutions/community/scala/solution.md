# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/3515983/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/3515983/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O (2^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
      def beautifulSubsets(arr: Array[Int], k: Int): Int = {
        subsets(0, -1, k, arr.sorted, Set.empty[Int]) - 1
      }

      def subsets(i: Int, prev_i: Int, k: Int, arr: Array[Int], set: Set[Int]): Int = {
        if (i == arr.length) 1
        else {
          val newSet = set + arr(i)
          if (prev_i == -1 || !newSet.contains(arr(i) - k)) subsets(i + 1, i, k, arr, newSet) + subsets(i + 1, prev_i, k, arr, set)
          else subsets(i + 1, prev_i, k, arr, set)
        }
      }
}
```