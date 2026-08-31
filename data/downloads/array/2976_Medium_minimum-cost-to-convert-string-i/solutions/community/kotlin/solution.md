# Minimum cost to convert string I. >:\

**Author:** Tran_Nhat_Gia_Huy_Codes
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5542581/](https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5542581/)

---

# Intuition
To convert the source string to the target string, we need to find the minimum cost to transform each character in the source to the corresponding character in the target. Given the transformation rules with specific costs, we can think of this as finding the shortest path in a graph where each character is a node and each transformation rule is a weighted edge.

# Approach
Represent the cost to transform one character to another using a cost matrix initialized with infinity. Populate this cost matrix with the given transformation rules, and use the Floyd-Warshall algorithm to compute the shortest transformation cost between all pairs of characters. Iterate over each character in the source and target strings. For each pair of corresponding characters, find the minimum transformation cost using the precomputed cost matrix. If a transformation is impossible, return -1. Otherwise, sum up all the transformation costs to get the total minimum cost.

# Complexity
- Time complexity:
$$O(n^3)$$

- Space complexity:
$$O(1)$$

# Code
```
import java.util.*

class Solution {
    fun minimumCost(source: String, target: String, original: CharArray, changed: CharArray, cost: IntArray): Long {
        val n = source.length
        val alphabetSize = 26
        val inf = Long.MAX_VALUE
        val costMatrix = Array(alphabetSize) { LongArray(alphabetSize) { inf } }
        
        for (i in original.indices) {
            val from = original[i] - 'a'
            val to = changed[i] - 'a'
            costMatrix[from][to] = minOf(costMatrix[from][to], cost[i].toLong())
        }
        
        for (k in 0 until alphabetSize) {
            for (i in 0 until alphabetSize) {
                for (j in 0 until alphabetSize) {
                    if (costMatrix[i][k] != inf && costMatrix[k][j] != inf) {
                        costMatrix[i][j] = minOf(costMatrix[i][j], costMatrix[i][k] + costMatrix[k][j])
                    }
                }
            }
        }
        
        var totalCost: Long = 0
        
        for (i in 0 until n) {
            val s = source[i] - 'a'
            val t = target[i] - 'a'
            if (s == t) continue
            var minCost = costMatrix[s][t]
            if (minCost == inf) return -1
            totalCost += minCost
        }
        
        return totalCost
    }
}
```