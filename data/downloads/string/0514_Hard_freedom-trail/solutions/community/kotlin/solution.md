# Top-Down Dynamic Programming with only additional Linear space

**Author:** drgavrikov
**Votes:** 4
**Link:** [https://leetcode.com/problems/freedom-trail/solutions/5083589/](https://leetcode.com/problems/freedom-trail/solutions/5083589/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

For each character $key$, we store the optimal number of steps to reach it. To achieve this, we choose the optimal transition from the previous character to the current one, considering the distance between them in a clockwise or counterclockwise rotation.

To calculate the dynamic programming, it is sufficient to have two arrays of length $|ring|$, where $prev[i]$ equals the number of steps if $ring[i]$ matches the letter $key$ on the previous step. We calculate the number of steps to the current letter knowing the answer for all previous ones, taking into account the optimal rotation between them.

# Complexity
- Time complexity: $O(KN^2)$ where $K$ is lenght of $keys$ and $N$ is lenght of $ring$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$ additional memory
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private fun calcDist(from: Int, to: Int, length: Int): Int {
        val directDist = abs(from - to)
        return min(directDist, length - directDist)
    }

    fun findRotateSteps(ring: String, key: String): Int {
        var prev = IntArray(ring.length) { Int.MAX_VALUE / 2 }
        for (ringIndex in ring.indices) {
            if (key[0] == ring[ringIndex]) {
                prev[ringIndex] = calcDist(0, ringIndex, ring.length) + 1
            }
        }
        for (keyIndex in 1 until key.length) {
            val next = IntArray(ring.length) { Int.MAX_VALUE / 2 }
            for (ringIndex in ring.indices) {
                if (key[keyIndex] != ring[ringIndex]) continue
                for (prevRingIndex in ring.indices) {
                    next[ringIndex] = min(next[ringIndex], prev[prevRingIndex] + calcDist(prevRingIndex, ringIndex, ring.length) + 1)
                }
            }
            prev = next.copyOf()
        }
        return prev.minOf { it }
    }
}   
```