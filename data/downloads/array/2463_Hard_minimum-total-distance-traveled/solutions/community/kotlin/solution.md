# My kotlin solutions with time O(MN^2), space O(M+N) and O(MN)

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-total-distance-traveled/solutions/5992869/](https://leetcode.com/problems/minimum-total-distance-traveled/solutions/5992869/)

---

The DP relation is tricky. Moreover, it's easy to be trapped by a greedy approach, and I wonder if we can leverage the sorted, combined robot and factory. 

The idea is to apply dynamic programming. First, sort the robot and factory by position; minimumTotalDistance(sortedRobot, sortedFactory) equals minimumTotalDistance(robot, factory) because the problem said that a robot could be set at any time.  Let N and M represent the size of robot and factory, the dynamic programming scheme is as follows:

- **Subproblem**
X(i, j) ::= minimumTotalDistance(sortedRobot[i:], sortedFactory[j:])
- **Relation**
To solve X(i, j), consider all possible numbers of robots assigned to sortedFactory[j]. Moreover, the robots assigned start from the front of sortedRobots[i:]; otherwise, the distance is not minimum.
So, X(i, j) = 
  - IMPOSSIBLE if the number robots to be repaired exceed the total limit of sortedFactory[j:]. 
  - Otherwise, min { totalDistance(sortedRobot[i..i+k-1]) + X(i+k, j+1) } 
  where k ranges from 0 to min(N-i, sortedFactory[j].limits) and satisfies X(i+k, j+1) is not IMPOSSIBLE. 
- **Topological Order**
Subproblems are solved in decreasing order of j, from M-1 to 0.
- **Base Cases**
X(i, M) = IMPOSSIBLE for i ranges from 0 to N-1
X(N, M) = 0
- **Original Problem**
X(0, 0)
- **Time Complexity**
There are MN subproblems, each can be solved at time O(N). Therefore, the overall time complexity is O(MN^2).
- **Note**
  - The official solution flattens the sortedFacotry, which is like flatten the different cases in Relation.
  - (Amended on 2024-11-04) Each subproblem can be solved at time O(1) using monolithic deque, please refer to [[Python3] O(MN) DP](https://leetcode.com/problems/minimum-total-distance-traveled/discuss/2783245/).
  - (Amended on 2024-11-04) Another interesting O(MN) solution [O(m*n) time complexity, better than editorial! swift, dp](https://leetcode.com/problems/minimum-total-distance-traveled/discuss/5994629/).

Below is my solution in kotlin,
- Without flattening
```
class Solution {
    /* Complexity:
     * Time O(MN^2) and Space O(M+N) where N is the length of robot and M is the length of factory.
     */
    fun minimumTotalDistance(
        robot: List<Int>,
        factory: Array<IntArray>,
    ): Long {
        val sortedRobots = robot.sorted()
        val sortedFactories = factory.sortedBy { (position, limits) -> position }
        val impossible = -1L
        // dp[startBot]_startFac::=
        // minimumTotalDistance(sortedRobot[startBot:], sortedFactories[startFac:])
        val dp = LongArray(sortedRobots.size + 1) { impossible }
        dp[sortedRobots.size] = 0L // base case startFac= sortedFactories.size
        var totalCapacity = 0

        for (startFac in sortedFactories.indices.reversed()) {
            val (facPosition, facLimits) = sortedFactories[startFac]
            totalCapacity += facLimits
            val prevDp = dp.clone() // dp_(starFac+1)
            val minStartBot = (sortedRobots.size - totalCapacity).coerceAtLeast(0)

            for (startBot in 0..<minStartBot) {
                dp[startBot] = impossible
            }

            for (startBot in minStartBot..<sortedRobots.size) {
                // Consider all possible numbers of robots assigned to startFac
                dp[startBot] = prevDp[startBot] // No robot is assigned to startFac
                val maxAssign = min(facLimits, sortedRobots.size - startBot)
                var assignDistance = 0L // Total distance induced by the robots assigned to startFac

                for (k in 1..maxAssign) {
                    val newAssign = startBot + k - 1
                    assignDistance += abs(facPosition - sortedRobots[newAssign])
                    if (prevDp[newAssign + 1] == impossible) {
                        continue
                    }

                    val minDistance = assignDistance + prevDp[newAssign + 1]
                    dp[startBot] =
                        dp[startBot].let {
                            if (it == impossible) minDistance else min(it, minDistance)
                        }
                }
            }
        }
        return dp[0]
    }
}
```
- With flattening
```
class Solution {
    /* Complexity:
     * Time O(MN^2) and Space O(MN) where N is the size of robot and M is the size of factory.
     */
    fun minimumTotalDistance(
        robot: List<Int>,
        factory: Array<IntArray>,
    ): Long {
        val sortedRobots = robot.sorted()
        val sortedFactories =
            factory
                .sortedBy { (position, _) -> position }
                .flatMap { (position, limit) ->
                    sequence { repeat(limit) { yield(position) } }
                } // flatten to handle limits

        val impossible = -1L
        // dp[startBot]_startFac::=
        // minimumTotalDistance(sortedRobot[startBot:], sortedFactories[startFac:])
        val dp = LongArray(robot.size + 1) { impossible }
        dp[robot.size] = 0 // Base case startFac= sortedFactories.size

        for (startFac in sortedFactories.indices.reversed()) {
            val totalCapacity = sortedFactories.size - startFac
            val minStartBot = (sortedRobots.size - totalCapacity).coerceAtLeast(0)

            for (startBot in 0..<minStartBot) {
                dp[startBot] = impossible
            }

            var temp = dp[robot.size] // dp[startBot+1]_(startFac+1)
            for (startBot in sortedRobots.lastIndex downTo minStartBot) {
                // There are two possible options: Assign startBot to startFac or not
                val assign = abs(sortedRobots[startBot] - sortedFactories[startFac]) + temp
                val notAssign = dp[startBot] // dp[startBot]_(startFac+1)
                val minDistance = if (notAssign == impossible) assign else min(assign, notAssign)
                dp[startBot] = minDistance.also { temp = dp[startBot] }
            }
        }
        return dp[0]
    }
}
```