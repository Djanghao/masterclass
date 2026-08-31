# 100% mem/time beats

**Author:** Merlinkoss
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/3967910/](https://leetcode.com/problems/paint-house-iii/solutions/3967910/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just dp on: 
houses, target and last color

I did not use Int.Max_Value bec it may overflow int mem

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n ^ 2 m target)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n m target)$$

# Code
```
class Solution {
    fun minCost(houses: IntArray, cost: Array<IntArray>, m: Int, n: Int, target: Int): Int {
        val INF = 10000000
        var dp = Array(target + 1) {
            i -> Array(m + 1) {
                j -> IntArray(n + 1) {
                    
                        if (i == 0) {
                            if (j == 0) {
                                0
                            } else {
                                INF
                            }
                        } else {
                            if (j == 0) {
                                INF
                            } else {
                                INF
                            }
                        }
                    
                }
            }
        }
        
        
     	for (i in 1..target) {
            for(j in 1..m) {
                for(k in 1..n) {
                   
                	if(houses[j-1] != 0) {
                        if(houses[j-1] == k) {
                            var min = dp[i][j - 1][k]
                             if (j == 1) {
                            if (i == 1) {
                            	min = 0
                            }
                        } else {
                            for(l in 1..(n)) {
                                if(l != k)
                                	min = Math.min(min, dp[i - 1][j - 1][l])
                            }
                        }
                            dp[i][j][k] = min
                        }
                	} else {
                        var min = dp[i][j - 1][k] + cost[j-1][k - 1]
                        if (j == 1) {
                            if (i == 1) {
                            	min = cost[j-1][k - 1]
                            }
                        } else {
                            for(l in 1..(n)) {
                                if(l != k)
                                    min = Math.min(dp[i-1][j-1][l] + cost[j-1][k-1], min)
                            }
                        }
                        
                        dp[i][j][k] = min
                    }
                }
            }
        }

        var min = INF
        dp[target][m].forEach {
            min = Math.min(min, it)
        }
        if (min >= INF) {
            return -1
        }
        return min
    }
}
```