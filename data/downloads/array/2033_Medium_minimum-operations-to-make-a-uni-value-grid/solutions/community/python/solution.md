# [Python3]  Explanation to "why median" and easy-understanding code.

**Author:** bixing
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1513446/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1513446/)

---

From the question, we can see the core part of the problem is to find a "target" that "minimize sum[ abs(grid[i][j] - target)/interval ]".

This is equal to "minimize sum[ abs(grid[i][j] - target) ]" which is actually a "[minimize the MAE loss](https://en.wikipedia.org/wiki/Mean_absolute_error)" problem. 

From the above wiki link, you can see the solution to this MAE problem is the median. So our task is acutally "find the median."

```

class Solution:
    def minOperations(self, grid: List[List[int]], x: int) -> int:
        
        m = len(grid)
        n = len(grid[0])
		
		# handle the edge case
        if m==1 and n==1: return 0
		
		# transform grid to array, easier to operate
        arr = [] 
        for i in range(m):
            arr+=grid[i]
        
        arr.sort()
        
		# the median is arr[len(arr)//2] when len(arr) is odd
		# or may be arr[len(arr)//2] and arr[len(arr)//2-1] when len(arr) is even.
        cand1 = arr[len(arr)//2]
        cand2 = arr[len(arr)//2-1]
        
        return min(
            self.get_num_operations_to_target(grid, cand1, x),
            self.get_num_operations_to_target(grid, cand2, x)
        )
        
        
    def get_num_operations_to_target(self, grid, target,x):
		"""Get the total number of operations to transform all grid elements to the target value."""
        ans = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if abs(grid[i][j]-target)%x!=0:
                    return -1
                else:
                    ans+=abs(grid[i][j]-target)//x

        return ans
                
```