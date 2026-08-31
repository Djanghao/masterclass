# O(1) space DP solution

**Author:** lifran
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5661242/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5661242/)

---

# Intuition
We can keep track of four values:

Max energy for:
1. previous hour when we drank A/B
2. 2 hours ago when we drank A/B

We can keep updating these states over all hours, and our goal max will be the max of those four values in the end.

# Approach
We'll use two arrays to keep track of our four states described above, update them accordingly, and return the max over all values in those two arrays.

# Complexity
- Time complexity: O(`|hours|`), since we iterate over all  entries in `energyDrinkenA/B`. The updates themselves in each iteration require only constant time.

- Space complexity: O(`1`), since we only need to keep track of four values.

# Code
```kotlin []
class Solution {
    fun maxEnergyBoost(energyDrinkA: IntArray, energyDrinkB: IntArray): Long {
        val lastA = LongArray(2)
        val lastB = LongArray(2)

        for (i in energyDrinkA.indices) {
            val tmp = maxOf(lastA[(i and 1) xor 1], lastB[i and 1]) + energyDrinkA[i]
            lastB[i and 1] = maxOf(lastB[(i and 1) xor 1], lastA[i and 1]) + energyDrinkB[i]
            lastA[i and 1] = tmp
        }
        
        return maxOf(lastA.max(), lastB.max())
    }
}
```