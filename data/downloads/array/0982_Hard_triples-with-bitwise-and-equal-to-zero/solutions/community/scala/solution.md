# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/3648880/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/3648880/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n^2 + 2^16 * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(2^16 * n) ?
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countTriplets(nums: Array[Int]): Int = {
        val counts = nums.flatMap(i => nums.map(j => i & j)).groupBy(identity).view.mapValues(_.length)
        nums.foldLeft(0)((res, i) => res + counts.filterKeys(x => (x & i) == 0).values.sum)
    }
}
```