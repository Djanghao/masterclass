# BFS || Memo || PriorityQueue

**Author:** anonymous_now
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5895029/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5895029/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O((m+n)LogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    data class Tuple(val first:Int, val sec:Int, val h:Int)
    fun findSafeWalk(grid: List<List<Int>>, health: Int): Boolean {
        var q = PriorityQueue<Tuple>(compareBy<Tuple>{it.h})
        var hm = hashMapOf<Pair<Int,Int>, Boolean>().withDefault{false}
        
        var dim = arrayOf(intArrayOf(1,0),intArrayOf(-1,0),
                          intArrayOf(0,1),intArrayOf(0,-1))
        q.add(Tuple(0,0,grid[0][0]))
        var r = grid.size
        var c = grid[0].size
        var dp = Array(r){IntArray(c){Int.MAX_VALUE}}
        var ans = r*c
        fun isValid(newR:Int, newC:Int) :Boolean{
            return (newR>=0 && newR<r && newC>=0 && newC <c)
        }
        while(!q.isEmpty()){
            var t = q.poll()
            hm[Pair(t.first,t.sec)] = true
            for(d in dim) {
                var R = t.first+d[0]
                var C = t.sec+d[1]
                var hel = t.h
                if(hm.getValue(Pair(R,C))==false && isValid(R,C)){  
                    hm[Pair(R,C)] = true                  
                    dp[R][C]=min(dp[R][C], t.h + grid[R][C])
                    if(dp[R][C] < health)
                        q.add(Tuple(R,C,dp[R][C]))
                }
            }
        }
        return health-dp[r-1][c-1] > 0
    }
}
```