# Easy to understand Scala solution

**Author:** boes13
**Votes:** 2
**Link:** [https://leetcode.com/problems/destination-city/solutions/4406115/](https://leetcode.com/problems/destination-city/solutions/4406115/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- Break the input into 2 lists: sources and destinations
- Compute diff between destinations and sources

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
object Solution {
    def destCity(paths: List[List[String]]): String = {
        val (sources, destinations) = paths.map(x => (x(0), x(1))).unzip
        destinations.diff(sources).head
    }
}
```