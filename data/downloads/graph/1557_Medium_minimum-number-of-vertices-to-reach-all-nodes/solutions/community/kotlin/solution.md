# Kotlin | one-liner

**Author:** SamoylenkoDmitry
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3536694/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3536694/)

---

#### Join me on Telegram
https://t.me/leetcode_daily_unstoppable/216
#### Problem TLDR
Find all starting nodes in graph.
#### Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Count nodes that have no incoming connections.

#### Approach
<!-- Describe your approach to solving the problem. -->
* we can use subtract operation in Kotlin
#### Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
#### Code
```

    fun findSmallestSetOfVertices(n: Int, edges: List<List<Int>>): List<Int> = 
        (0 until n) - edges.map { it[1] }

```