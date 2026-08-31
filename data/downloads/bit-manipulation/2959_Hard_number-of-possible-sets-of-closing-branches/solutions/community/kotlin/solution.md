# Beat 100% by Elegant Floyd-Warshall

**Author:** ivangnilomedov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/5951834/](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/5951834/)

---

# Intuition
Floyd-Warshall with bit masks finds all valid branch sets under `maxDistance` constraints.

# Approach
Initialize INF matrix, map roads, try each branch combo using bits. Run Floyd-Warshall on selected branches only, count if all distances valid.

# Complexity
Time: $$O(2^n * n^3)$$ (combinations \xD7 Floyd-Warshall)  
Space: $$O(n^2)$$ (distance matrix)

# Code
```kotlin []
class Solution {
    fun numberOfSets(n: Int, maxDistance: Int, roads: Array<IntArray>): Int {
        val o = Array(10) { IntArray(10) }
        val INF = Int.MAX_VALUE / 3
        
        // Initialize distances
        for (i in 0 until n) {
            for (j in 0 until n) {
                o[i][j] = INF
            }
            o[i][i] = 0
        }
        
        // Build initial graph
        for (e in roads) {
            o[e[0]][e[1]] = minOf(o[e[0]][e[1]], e[2])
            o[e[1]][e[0]] = minOf(o[e[1]][e[0]], e[2])
        }
        
        var res = 0
        val pow = 1 shl n
        
        // Try all possible combinations of branches
        for (m in 0 until pow) {
            // Copy the original distances
            val a = Array(10) { i -> o[i].clone() }
            
            // Floyd-Warshall algorithm
            for (k in 0 until n) {
                if ((m shr k) and 1 != 0) {
                    for (i in 0 until n) {
                        if ((m shr i) and 1 != 0) {
                            for (j in 0 until n) {
                                if ((m shr j) and 1 != 0) {
                                    a[i][j] = minOf(a[i][j], a[i][k] + a[k][j])
                                }
                            }
                        }
                    }
                }
            }
            
            // Check if all distances are within maxDistance
            var allLe = true
            outer@ for (i in 0 until n) {
                if ((m shr i) and 1 != 0) {
                    for (j in 0 until n) {
                        if ((m shr j) and 1 != 0) {
                            if (a[i][j] > maxDistance) {
                                allLe = false
                                break@outer
                            }
                        }
                    }
                }
            }
            
            if (allLe) res++
        }
        
        return res
    }
}
```

```cpp []
class Solution {
public:
    int numberOfSets(int n, int maxDistance, vector<vector<int>>& roads) {
        using GrT = array<array<int, 10>, 10>;
        GrT o;
        int INF = numeric_limits<int>::max() / 3;
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j)
                o[i][j] = INF;
            o[i][i] = 0;
        }
        for (const auto& e : roads) {
            o[e[0]][e[1]] = min(o[e[0]][e[1]], e[2]);
            o[e[1]][e[0]] = min(o[e[1]][e[0]], e[2]);
        }

        int res = 0;

        int pow = 1 << n;
        for (int m = 0; m < pow; ++m) {
            GrT a = o;
            for (int k = 0; k < n; ++k) if ((m >> k) & 1)
                for (int i = 0; i < n; ++i) if ((m >> i) & 1)
                    for (int j = 0; j < n; ++j) if ((m >> j) & 1)
                        a[i][j] = min(a[i][j], a[i][k] + a[k][j]);
            bool allle = true;
            for (int i = 0; i < n; ++i) if ((m >> i) & 1)
                for (int j = 0; j < n; ++j) if ((m >> j) & 1)
                    if (a[i][j] > maxDistance) {
                        allle = false;
                        goto FAST_BREAK;
                    }
            FAST_BREAK:
            res += allle;
        }

        return res;
    }
};
```
