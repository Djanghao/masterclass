# BFS + bit manipulation

**Author:** dev_lazy25
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/4826457/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/4826457/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    // flatten matrix state from 2d to 1d, use bit operations to represent cells as bits
    // do BFS by offering init state to queue
    // create new state based on the current state and if the new values are valid x, y coordinates
    // offer them to queue
    // 
    fun minFlips(mat: Array<IntArray>): Int {
        val m = mat.size
        val n = mat[0].size
        var initState = 0
        for(i in 0..<m) {
            for(j in 0..<n) {
                if(mat[i][j] == 1) {
                    initState = initState or (1 shl (i * n + j))
                }
            }
        }

        val q = java.util.ArrayDeque<Int>()
        val visited = mutableSetOf<Int>()

        q.offer(initState)
        visited.add(initState)

        var noOfFlips = 0
        val dir = intArrayOf(0, -1, 0, 1, 0, 0)

        while(q.isNotEmpty()) {
            var size = q.size
            while(size-- > 0) {
                var curr = q.poll()
                if(curr == 0) {
                    return noOfFlips
                }

                for(i in 0..<m) {
                    for(j in 0..<n) {
                        var nextState = curr
                        for(k in 0..<5) {
                            val x = i + dir[k]
                            val y = j + dir[k + 1]

                            if(x in 0..<m && y in 0..<n) {
                                nextState = nextState xor (1 shl (x * n + y))
                            }
                        }

                        if(nextState !in visited) {
                            visited.add(nextState)
                            q.offer(nextState)
                        }
                    }
                }
            }
            noOfFlips++
        }
        return -1
    }
}
```