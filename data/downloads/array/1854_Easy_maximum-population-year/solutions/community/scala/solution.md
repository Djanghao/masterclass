# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/3686006/](https://leetcode.com/problems/maximum-population-year/solutions/3686006/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maximumPopulation(logs: Array[Array[Int]]): Int = {
        (1950 to 2050)((1950 to 2050)
                            .map(year => logs.count(log => year >= log(0) && year < log(1)))
                            .zipWithIndex
                            .maxBy(_._1)
                            ._2)
    }
}
```