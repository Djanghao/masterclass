# Kotlin | Simulation | Bubble Sort

**Author:** Atrilos
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/4250766/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/4250766/)

---

# Complexity
- Time complexity:
$$O(max(n, rownumber^2))$$

- Space complexity:
$$O(rownumber)$$

# Code
```
class Solution {
    fun minSwaps(grid: Array<IntArray>): Int {
        val n = grid.size
        // Consecutive zeroes from right to left
        val zeroes = IntArray(n)
        for (i in grid.indices) {
            for (j in grid[i].indices.reversed()) {
                if (grid[i][j] == 0) {
                    zeroes[i]++
                } else break
            }
        }
        // Min required number of zeros in each row
        val requiredZeroes = IntArray(n) { n - 1 - it }
        var steps = 0
        for (i in 0..<zeroes.lastIndex) {
            // If number of zeroes in current row less than required we need to find any suitable row and swap one by one.
            if (requiredZeroes[i] > zeroes[i]) {
                for (j in i..zeroes.lastIndex) {
                    if (requiredZeroes[i] <= zeroes[j]) {
                        for (k in j downTo i + 1) {
                            zeroes[k] = zeroes[k - 1].also { zeroes[k - 1] = zeroes[k] }
                            steps++
                        }
                        break
                    // If we can't find suitable row then grid cannot be valid
                    } else if (j == zeroes.lastIndex) {
                        return -1
                    }
                }
            }
        }
        
        return steps
    }
}
```