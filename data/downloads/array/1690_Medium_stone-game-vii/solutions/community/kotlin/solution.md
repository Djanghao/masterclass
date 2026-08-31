# Interval Dynamic Programming beats 100%

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vii/solutions/4321890/](https://leetcode.com/problems/stone-game-vii/solutions/4321890/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
same approach with stone game 1. But we calcualte the left stones here.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n * n * n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n * n)
# Code
```
class Solution {
    fun stoneGameVII(stones: IntArray): Int {
        val n = stones.size
        val f = Array(n){ IntArray(n)}


        for( i in 0 until n)
            f[i][i] = stones[i]
        
// to expediate the calcuation of f[i][j - 1]
        for( i in 0 until n - 1)
            f[i][i + 1] = maxOf(stones[i], stones[i + 1])

// len 1 and len 2 have been calculate above. Therefore, len start at 3
        for( len in 3 .. n){
            for( i in 0 .. n - len){
                var j = i + len - 1

                f[i][j] = maxOf( stones.sliceArray(i + 1 .. j).sum() -  f[i + 1][j], stones.sliceArray(i .. j - 1).sum() - f[i][j - 1])
            }
        }

        return f.first().last()
    }
}
```