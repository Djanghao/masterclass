# Kotlin very simple and basic solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/3744324/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/3744324/)

---

# Approach
Using several variables and for loops to simulate the travelling process. Please refer to the comment in the code from explanation

# Code
```
class Solution {
    fun mostVisited(n: Int, rounds: IntArray): List<Int> {
        // to records steps for each sector
        var travel = IntArray(n+1){0}
        // to keep track of which sector we are on
        var currentSector = rounds[0]
        // step to travel for any round
        var stepToTravel = 0
        // to store the most steps count for any sector
        var mostSteps = 0

        // recording the step count starting sector
        travel[currentSector]++
        for (i in 1 until rounds.size) {
            // how many steps to travel for this round?
            if (rounds[i] < currentSector) {
                stepToTravel = (n - currentSector) + rounds[i]
            } else {
                stepToTravel = rounds[i] - currentSector
            }

            // start simulate travelling and recording the step count for each sector
            for (j in 1..stepToTravel) {
                // advancing a step
                currentSector++
                // round it up
                currentSector = currentSector % n
                if (currentSector == 0) {
                    currentSector = n
                }
                // increasing step count
                travel[currentSector]++
                // most step count for any sector
                mostSteps = maxOf(mostSteps, travel[currentSector])
            }
        }

        // create a list for sectors with most steps
        var result = mutableListOf<Int>()
        for (i in 1 until travel.size) {
            if (travel[i] == mostSteps) {
                result.add(i)
            }
        }

        return result
    }
}
```