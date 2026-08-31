# [Python3] bubble-ish sort

**Author:** ye15
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/768030/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/768030/)

---

Algo 
Basic idea is bubble sort. Here, we transform each row into a number which the location of last index of 1. Then, we use a modified bubble sort algo to compute the `ans`. For each row, we find the first value which can be moved to this position via swaps, and update the `ans`. 

Edit: added comments to aid understanding. 

```
class Solution:
    def minSwaps(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        #summarizing row into number 
        row = [0]*m 
        for i in range(m):
            row[i] = next((j for j in reversed(range(n)) if grid[i][j]), 0)
        
        ans = 0
        #sequentially looking for row to fill in 
        for k in range(m): 
            for i, v in enumerate(row): 
                if v <= k: #enough trailing zeros 
                    ans += i
                    row.pop(i) #value used 
                    break 
            else: return -1 #cannot find such row 
        return ans 
```