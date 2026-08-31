# Fast 918ms 3 line kotlin solution

**Author:** uvc
**Votes:** 0
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/5051962/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/5051962/)

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
class Solution {
    fun edgeScore(edges: IntArray): Int {
        var edgeMap : MutableMap<Int, Long> = mutableMapOf()
        for(i in 0..<edges.size) edgeMap[edges[i]] = edgeMap.getOrDefault(edges[i], 0L) + i.toLong()
        return edgeMap.toList().sortedWith(compareBy({ -1 * it.second }, { it.first }))[0].first
    }
}
```