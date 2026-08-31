# Easy DFS top down with memo + explanation

**Author:** aymaletdinov2012
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/4723029/](https://leetcode.com/problems/cherry-pickup/solutions/4723029/)

---

# Approach
Instead of moving to the last position and back to the start we can run 2 robots. It will be fully simular. 
When 2 robots reach the last position we return from our recursion. 
Note, that both robots will reach the last position at the same time. 

So, we should exclude from our path any wrong paths such as: 
- robot out of matrix 
- robot is stack. (reached -1 in the matrix, non valid position)

If we met the wrong position ^ we immediatelly stop this recursion via `return Integer.MIN_VALUE`. 

If both robots at the same position, only one robot can collect cherry. 

And last thing, robots can move to the 4 sides: 
- right & right
- right & down
- down & right
- down & down

Finally, regular DP problem

# Complexity
- Time complexity:
`O(rowLength^3)` (from the editorial matrixLength^3)
When I counted calls after memo, it almost N^3

For example for matrix 10x10 it is: 
864 calls and it is a bit less than 10^3 

- Space complexity:
O(N^3) from the editorial but ?? 
When I counted memo size for matrix 10x10 I got map size = 454 

It much more than 10^2 and more than twice less than 10^3
I'm confused. Your welcome your thoughts about the complexety. 

# Code
```java
class Solution {

    private val memo = mutableMapOf<String, Int>()

    fun cherryPickup(grid: Array<IntArray>): Int {
        val collected = grid.dfs(0,0,0,0)
        return maxOf(0, collected)
    }

    fun Array<IntArray>.dfs(y1: Int, x1: Int, y2: Int, x2: Int): Int {
        if (y1 == this.size-1 && x1 == this[0].size-1) {
            return if (this[y1][x1] == 1) 1 else 0
        }
        
        if (y1 !in 0..this.size-1) return Integer.MIN_VALUE
        if (y2 !in 0..this.size-1) return Integer.MIN_VALUE

        if (x1 !in 0..this[0].size-1) return Integer.MIN_VALUE
        if (x2 !in 0..this[0].size-1) return Integer.MIN_VALUE

        if (memo["$y1.$x1.$y2.$x2"] != null) return memo["$y1.$x1.$y2.$x2"]!!

        if (this[y1][x1] == -1 || this[y2][x2] == -1) return Integer.MIN_VALUE

        val collectedCherry = 
            if (y1 == y2 && x1 == x2) this[y1][x1]
            else this[y1][x1] + this[y2][x2]

        memo["$y1.$x1.$y2.$x2"] = maxOf(
            dfs(y1, x1+1, y2, x2+1), // right & right
            dfs(y1, x1+1, y2+1, x2), // right & down
            dfs(y1+1, x1, y2, x2+1), // down & right
            dfs(y1+1, x1, y2+1, x2), // down & down
        ) + collectedCherry

        return memo["$y1.$x1.$y2.$x2"]!!
    }
}
```