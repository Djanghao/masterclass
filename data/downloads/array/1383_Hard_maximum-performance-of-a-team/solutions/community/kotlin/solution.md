# My kotlin solution with explanation, time O(NLogN) and space O(N)

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-performance-of-a-team/solutions/2560866/](https://leetcode.com/problems/maximum-performance-of-a-team/solutions/2560866/)

---

Below is my solution in kotlin with explanation:

1. **Sort the speed and efficiency together by efficiency**
A good reason is that it's said in hint, so give it a try lol. hmm, acutally the description said that when calculate the performce we will use the minium efficiency, so it's likely that we need to sort it. 

2. **leastMaxPerformance of subArray from index i to last index**
After sort by efficiency, we get a good constraint that for subArray from index i to last index, we know the least efficiency is the one at index i. So the maxPerformace for this subArray will at least the sum of its first k maximum speeds times the least efficiency. Note that it may not be the true maxPerformance for this subArray.

3. **trueMaxPerformance of subArray from index i to last index**
Lets assume the trueMaxPerformance has a least efficiency at index j. Also, we know j >= i. Then the trueMaxPerformance would be covered when we calculate the leastMaxPerformance of subArray from index j to last index. So we have take the trueMaxPerformance into account although may at a different index.

4. **Find maxPerformance**
We start from last index and down to 0, calculate the leastMaxPerformance for each index thus cover all the possible least efficiency. Then take the max among them and it will be the maxPerformance.

```
class Solution {
    /* Complexity:
     * Time O(NLogN) and Space O(N) where N equals n;
     */
    fun maxPerformance(n: Int, speed: IntArray, efficiency: IntArray, k: Int): Int {
        val sortedEngineers = getEngineersSortedByEfficiency(speed, efficiency)

        var maxPerformance = 0L
        val teamSpeedMinPq = PriorityQueue<Int>()
        var sumOfTeamSpeed = 0L

        for (index in sortedEngineers.indices.reversed()) {
            val currSpeed = sortedEngineers[index].speed
            val currEfficiency = sortedEngineers[index].efficiency

            teamSpeedMinPq.offer(currSpeed)
            sumOfTeamSpeed += currSpeed
            val teamSizeExceeded = teamSpeedMinPq.size > k
            if (teamSizeExceeded) sumOfTeamSpeed -= teamSpeedMinPq.poll()

            val leastMaxPerformance = sumOfTeamSpeed * currEfficiency
            maxPerformance = maxOf(maxPerformance, leastMaxPerformance)
        }
        return maxPerformance.toOutputFormat()
    }

    private fun getEngineersSortedByEfficiency(speed: IntArray, efficiency: IntArray): List<Engineer> {
        return speed
            .asSequence()
            .zip(efficiency.asSequence()) { spd, eff -> Engineer(spd, eff) }
            .sortedBy { engineer -> engineer.efficiency }
            .toList()
    }

    private data class Engineer(val speed: Int, val efficiency: Int)

    private fun Long.toOutputFormat(): Int {
        val requiredModulo = 1_000_000_007
        return (this % requiredModulo).toInt()
    }
}
```