# [Go] DP | 0ms | 2.42MB

**Author:** adithyasashasai
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/4616601/](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/4616601/)

---

# Intuition
```
if grid[i][j] >= 0  {
    DpPos[i][j] = max(DpPos[i-1][j], DpPos[i][j-1]) * cur
    DpNeg[i][j] = min(DpNeg[i-1][j], DpNeg[i][j-1]) * cur
} else {
    DpPos[i][j] = min(DpNeg[i-1][j], DpNeg[i][j-1]) * cur
    DpNeg[i][j] = max(DpPos[i-1][j], DpPos[i][j-1]) * cur
}
```

# Complexity
- Time complexity: O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxProductPath(grid [][]int) int {
    if grid[0][0] == 0 {
        return 0
    }
    pVal, nVal := make([]int, len(grid[0])+1), make([]int, len(grid[0])+1)
    pVal[0], nVal[0] = -1, 1
    for i := 0; i <len(grid[0]); i++ {
        if grid[0][i] >= 0 {
            if i == 0 {
                pVal[i+1] = grid[0][i]
                nVal[i+1] = 1
            } else {
                pVal[i+1] = pVal[i]*grid[0][i]
                nVal[i+1] = nVal[i]*grid[0][i]
            }
        } else {
            if i == 0 {
                pVal[i+1] = -1
                nVal[i+1] = grid[0][i]
            } else {
                pVal[i+1] = nVal[i]*grid[0][i]
                nVal[i+1] = pVal[i]*grid[0][i]
            }
        }
    }

    for i := 1; i < len(grid); i++ {
        for j := 0; j < len(grid[i]); j++ {
            if grid[i][j] >= 0 { 
                if pVal[j] < 0 && pVal[j+1] < 0 {
                    pVal[j+1] =  -1 *  grid[i][j]
                } else {
                    pVal[j+1] = max(pVal[j], pVal[j+1]) * grid[i][j]
                }
                if nVal[j] > 0 && nVal[j+1] > 0 {
                    nVal[j+1] = grid[i][j]
                } else {
                    nVal[j+1] = min(nVal[j], nVal[j+1]) * grid[i][j]
                }
            } else {
                pCur, nCur := 0, 0
                if pVal[j] < 0 && pVal[j+1] < 0 {
                    nCur = -1 * grid[i][j]
                } else {
                    nCur = max(pVal[j], pVal[j+1]) * grid[i][j]
                }
                if nVal[j] > 0 && nVal[j+1] > 0 {
                    pCur = grid[i][j]
                } else {
                    pCur = min(nVal[j], nVal[j+1]) * grid[i][j]
                }
                pVal[j+1], nVal[j+1] = pCur, nCur
            }
        }
    }
    if pVal[len(grid[0])] < 0 {
        return -1
    }
    return pVal[len(grid[0])] % 1000000007
}


```