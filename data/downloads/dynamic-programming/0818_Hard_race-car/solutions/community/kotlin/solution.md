# Kotlin Best Solution

**Author:** progp
**Votes:** 4
**Link:** [https://leetcode.com/problems/race-car/solutions/4385391/](https://leetcode.com/problems/race-car/solutions/4385391/)

---


# Code
```
class Solution {
    // simple math function to compute log_2(value)
    private fun log(value: Int): Int {
        var logValue = 0
        var x = value
        while (x > 1) {
            x /= 2
            logValue++
        }
        return logValue
    }
    
    // simple math function to pre-compute all the 2 powers
    private fun computePowers(maxPower: Int): List<Int> {
        val powers = mutableListOf<Int>(1)
        for (i in 0 until maxPower) {
            powers.add(powers[i] * 2)
        }
        return powers
    }
    
    // node description data class
    data class SearchStep(
        val pos: Int,
        val pow: Int,
        val dir: Int // +-1
    )
    
    // BFS processing for current node
    private fun computeStep(
        pos: Int, 
        pow: Int,
        dir: Int,
        speed: Int,
        result: Map<Int, Array<IntArray>>,
        nodes: Queue<SearchStep>
    ) {
        if (pos + speed in 0 until result[dir]!!.size 
            && result[dir]!![pos + speed][pow + 1] == -1) {
            result[dir]!![pos + speed][pow + 1] = 1 + result[dir]!![pos][pow]
            nodes.add(SearchStep(pos + speed, pow + 1, dir))
        }
        if (result[-dir]!![pos][0] == -1) {
            result[-dir]!![pos][0] = 1 + result[dir]!![pos][pow]
            nodes.add(SearchStep(pos, 0, -dir))
        }
    }
    
    // result[-1][i][j] - shortest way to i with current speed = -2^j
    // result[+1][i][j] - shortest way to i with current speed = 2^j 
    private fun raceBFS(target: Int): Map<Int, Array<IntArray>> {
        var targetLog = log(4 * target) + 1
        val powers = computePowers(targetLog)
        val maxX = 4 * target
        val result = HashMap<Int, Array<IntArray>>()
        result[1] = Array(maxX) { IntArray(targetLog) { -1 } }
        result[-1] = Array(maxX) { IntArray(targetLog) { -1 } }
        val nodes = LinkedList<SearchStep>() // pos to speed
        nodes.add(SearchStep(0, 0, 1))
        result[1]!![0][0] = 0 
        while (nodes.isNotEmpty()) {
            val node = nodes.poll()
            computeStep(
                node.pos, 
                node.pow, 
                node.dir, 
                node.dir * powers[node.pow], 
                result, 
                nodes
            )
        }
        return result
        
    }
    
    fun racecar(target: Int): Int {
        val result = raceBFS(target)
        var ans = -1
        for (res in result[-1]!![target]) {
            if (res != -1 && res < ans || ans == -1) {
                ans = res
            }
        }
        for (res in result[1]!![target]) {
            if (res != -1 && res < ans || ans == -1) {
                ans = res
            }
        }
        return ans
    }
}
```