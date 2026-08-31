# Swift solution with comments

**Author:** mmovses
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/3000228/](https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/3000228/)

---

```
class Solution {
    func minimumFinishTime(_ tires: [[Int]], _ changeTime: Int, _ numLaps: Int) -> Int {
        // We will update memo with best minimum time to finish lap corresponding to index known so far. Ultimiately in the end it will be the minimum time.
        var memo = Array(repeating: Int.max, count: numLaps + 1)
        memo[0] = 0
        var maxTireRuntime = 0
        // First figure out minimum times we can do for initial laps using same tire (without changing tires)
        for tire in tires {
            var timeForLap = 0
            var multiplier = 1
            for lap in 1...numLaps {
                let addingTime = tire[0] &* multiplier
                if addingTime > tire[0] &+ changeTime {
                    break
                } 
                timeForLap &+= addingTime
                multiplier &*= tire[1]
                if timeForLap < memo[lap] {
                    memo[lap] = timeForLap
                    maxTireRuntime = max(maxTireRuntime, lap)
                }
            }
        }
        /* 
            Now that we know best times to do certain initial laps without needing to change tires, 
            rest of the laps can be done by combining these known initial lap times plus the tire
            change time. An optimization that is required to beat TLE (at least for Swift) is that for
            a given lap we don't have to look at all of previous laps to figure best lap to change the tire,
            but we can look back at most maxTireRuntime laps as that's the longest numbers of laps we could choose
            to run on a single tire. 
        */
        for lap in 1...numLaps {
            for x in max(1, lap &- maxTireRuntime)...lap {
                let candidate = memo[x] &+ memo[lap &- x] &+ changeTime
                memo[lap] = min(candidate, memo[lap])
            }
        }
        return memo[numLaps]
    }
}
```