# Kotlin Solution

**Author:** Z3ROsum
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-permutations/solutions/3653877/](https://leetcode.com/problems/special-permutations/solutions/3653877/)

---

# Code
```
class Solution {
    var dp = HashMap<Pair<Int, Int>, Long>()
    var adj = HashMap<Int, HashSet<Int>>()
    var mod = 1000000007
    
    fun count(destIdx: Int, set: Int): Long {
        if (Integer.bitCount(set) == 1) return 1
        
        var p = destIdx to set
        
        if (dp.containsKey(p)) return dp[p]!!
        var sum = 0L
        
        var newSet = set xor (1 shl destIdx)
        for (i in adj[destIdx]!!) {
            if ((set and (1 shl i)) == 0) continue
            
            sum += count(i, newSet) % mod
            sum %= mod
        }
        dp[p] = sum
        return sum
    }
    
    fun specialPerm(nums: IntArray): Int {
        for (i in nums.indices) adj[i] = hashSetOf()
        for ((i, vI) in nums.withIndex()) {
            for ((j, vJ) in nums.withIndex()) {
                if (vI != vJ) {
                    if (vI % vJ == 0) {
                        adj[i]!!.add(j)
                        adj[j]!!.add(i)
                    }
                }
            }
        }
        if (adj.all { it.value.size == nums.size - 1 }) {
            return (fact(nums.size.toLong()) % mod).toInt()
        }
        var total = 0
        for (i in nums.indices) {
            total += (count(i, (1 shl nums.size) - 1) % mod).toInt()
            total %= mod
        }
        return total
    }
    
    fun fact(n: Long): Long {
        if (n == 1L) return n
        return n * fact(n - 1)
    }
}
```