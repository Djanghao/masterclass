# Space improved

**Author:** sunnydaydev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/2949904/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/2949904/)

---

# Intuition
Is the same as the intuition of the [Official solution](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/890025/minimum-cost-to-connect-sticks/).
So read it first.

# Approach
Now, we fix the following statements:
- to get the lowest price, we need to sum the smallest sticks on each turn
- each next new stick is greater than or equal to the previously calculated new stick
- after each turn, the size of the sticks decreased by 1, so we can use the freed space to store new sticks (which are also sorted)

Look to the official solution. What is the **Step 1**? It's sorting to get the sticks in the best order to build new sticks with the lowest price. Ok, we can do sorting with `O(n*log(n))` time comlexity and `O(log(n))` space complexity. The complexity is similar to the original step 1 complexity, which is not suprising.

Relying on the statements declared above, we can calculate and store new sticks in the same array. Also we don't need to use binary search to find the next stick to sum, the sticks are already sorted in the best order. So the complexity of the **Step 2** can be improved to `O(n)` time complexity and `O(1)` space complexity.

# Code
```
class Solution {

    // Complexity: O(n*log(n))
    // Space: O(log(n))
    fun connectSticks(sticks: IntArray): Int {
        if (sticks.size < 2) return 0

        // Step 1
        // Complexity: O(n*log(n))
        // Space: O(log(n))
        sticks.sort()

        var price = 0

        // Current stick index
        var index = 0
        // Last stick index
        var endIndex = sticks.lastIndex
        // Index of the first previosly calculated stick
        var subStartIndex = 0
        // Relative index of the last previosly calculated stick
        var subEndIndex = -1

        // Step 2
        // Complexity: O(n)
        // Space: O(1)
        repeat(sticks.size - 1) {
            val stick: Int

            when {
                // 2 lowest previously calculated sticks are lower than or equal to current stick
                // so use them to sum the new stick
                subEndIndex > 0 && sticks[subStartIndex + 1] <= sticks[index] -> {
                    stick = sticks[subStartIndex] + sticks[subStartIndex + 1]
                    // Drop 2 used previosly calculated sticks
                    subStartIndex += 2
                    // We used 2 sticks to build 1, so decrease previosly calculated last index
                    subEndIndex -= 1
                    // Store new stick
                    sticks[subStartIndex + subEndIndex] = stick
                }

                // lowest calculated new stick is lower than or equal to the next stick
                // so use it to sum with the current
                subEndIndex != -1 && (index == endIndex || sticks[index + 1] >= sticks[subStartIndex]) -> {
                    stick = sticks[subStartIndex] + sticks[index]
                    // Drop used previosly calculated stick
                    subStartIndex++
                    // Drop used current stick
                    index++
                    // Store new stick
                    sticks[subStartIndex + subEndIndex] = stick
                }

                // there are no previously calculated sticks or they are greater then current
                // so sum curent and next
                else -> {
                    stick = sticks[index] + sticks[index + 1]
                    // Drop 2 used current sticks
                    index += 2
                    // Increase previously calculated sticks size to store the new one
                    subEndIndex++
                    // Store new stick
                    sticks[subStartIndex + subEndIndex] = stick
                }
            }

            price += stick

            // Reset original array by previosly calculated if current stick is the last stick
            if (index > endIndex) {
                // Set first index of current sticks by the first previously calculated index
                index = subStartIndex
                // Set last index of current sticks by the last previously calculated index
                endIndex = subStartIndex + subEndIndex
                // Clear previously calculated sticks size
                subEndIndex = -1
            }
        }

        return price
    }
}
```

# Complexity
- Time complexity:
`O(n * log(n))`, the same as the complexity of the Official solution, but faster in real because it is `O(n * log(n)) + O(n)` instead of `O(n * log(n)) + O(n * log(n))`

- Space complexity:
`O(log(n))`, space complexity of the sorting