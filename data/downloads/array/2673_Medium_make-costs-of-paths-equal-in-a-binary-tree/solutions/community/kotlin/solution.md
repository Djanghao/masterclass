# Kotlin O(n)

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3497939/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3497939/)

---

# Approach


Since we know it's a perfect tree, we know that the last non-leaf node is at index `n / 2 - 1`.


Traverse the tree array from that index above down to index 0. For each index `i` in our loop, find it's children leaf at indicies  `2 * i + 1` and `2 * i + 2`, take the difference between their values, add the (**absolute**) difference to our result (since the difference between them is amount of increments we made), and update the current value at `i` with the largest child value to sum the path sum.




# Code
```
class Solution {
    fun minIncrements(n: Int, cost: IntArray): Int {
        val last = n / 2 - 1


        var res = 0
        for (i in last downTo 0) {
            var abs = cost[2 * i + 1] - cost[2 * i + 2]
            if (abs < 0) abs *= -1
            cost[i] += maxOf(cost[2 * i + 1], cost[2 * i + 2])
            res += abs
        }


        return res
    }
}
```

