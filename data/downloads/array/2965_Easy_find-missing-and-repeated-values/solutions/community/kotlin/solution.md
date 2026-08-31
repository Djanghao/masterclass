# Using Bit Manipulation

**Author:** HSinghal3
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/5781300/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/5781300/)

---

# Complexity
- Time complexity:
O(n2)

- Space complexity:
O(1)

# Code
```kotlin []
class Solution {
    fun findMissingAndRepeatedValues(grid: Array<IntArray>): List<Int> {
        var xorAll = 0
        // 1. XOR all numbers to find Missing ^ Repeating
        var number = 1
        for (row in grid) {
            for (element in row) {
                xorAll = xorAll xor number xor element
                number += 1
            }
        }

        // 2. find rsb
        val rsb = xorAll and -xorAll
        
        // 3. Divide elements into set and unset bit
        var groupOfUnsetBit = 0
        var groupOfSetBit = 0

        for (row in grid) {
            for (element in row) {
                if ((element and rsb) == 0) groupOfUnsetBit = groupOfUnsetBit xor element
                else groupOfSetBit = groupOfSetBit xor element
            }
        }

        val n = grid.size * grid.size
        for (element in 1..n) {
            if ((element and rsb) == 0) groupOfUnsetBit = groupOfUnsetBit xor element
            else groupOfSetBit = groupOfSetBit xor element
        }

        // 4. Determine missing number 
        for (row in grid) {
            for (element in row) {
                if (groupOfSetBit == element) {
                    return listOf(groupOfSetBit, groupOfUnsetBit)
                }
            }
        }

        return listOf(groupOfUnsetBit, groupOfSetBit)
    }
}
```