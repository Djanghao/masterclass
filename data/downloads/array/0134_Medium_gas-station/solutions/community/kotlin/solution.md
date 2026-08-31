# Time Complexity : O(n) & Space Complexity : O(1) in Kotlin

**Author:** ocean052394
**Votes:** 4
**Link:** [https://leetcode.com/problems/gas-station/solutions/4153757/](https://leetcode.com/problems/gas-station/solutions/4153757/)

---

# Intuition
- The idea behind this solution is to iterate through the gas stations, keeping track of the remaining gas after reaching each station. 
- If at any station the remaining gas becomes negative, it means that starting from the current station is not feasible, so we reset the starting index to the next station. 
- This is based on the observation that if starting from station A, we can't reach station B, then any station between A and B can't reach station B from A.

# Approach
1. ##### Initialize three variables: totalGas, currentGas, and 'startIdx' to 0.

- 'totalGas' keeps track of the total remaining gas over all stations.
- 'currentGas' keeps track of the remaining gas after reaching the current station.
- 'startIdx' is the starting index of the current candidate solution.
2. ##### Iterate through the gas stations using a loop.

- Calculate the difference between the gas and cost at the current station ('**diff = gas[i] - cost[i]**').
- Update 'totalGas' and 'currentGas' based on the difference.
- If 'currentGas' becomes negative, reset 'currentGas' to 0 and update 'startIdx' to the next station.
3. ##### After completing the loop, check if 'totalGas' is non-negative.

- If yes, return 'startIdx' as the starting index that satisfies the condition.
- If no, return -1, indicating that it's not possible to complete the circuit.

# Complexity
####  Time complexity: O(n)
- We iterate through the gas stations once.
####  Space complexity: O(1)
- We use a constant amount of extra space for variables ('totalGas', 'currentGas', 'startIdx').
# Code
```
class Solution {
    fun canCompleteCircuit(gas: IntArray, cost: IntArray): Int {
        val n = gas.size
        var totalGas = 0
        var currentGas = 0
        var startIdx = 0

        for(i in 0 until n){
            val diff = gas[i] - cost[i]
            totalGas += diff
            currentGas += diff

            //if we can't reach the next station, reset starting index
            if(currentGas < 0){
                currentGas = 0
                startIdx = i + 1
            }
        }
        //if totalGas is non-negative, a solution exists, return the starting index
        return if(totalGas >= 0) startIdx else -1
    }
}
```