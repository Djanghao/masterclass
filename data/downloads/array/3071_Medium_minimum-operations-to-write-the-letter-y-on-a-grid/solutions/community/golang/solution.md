# You can Optimize the code and increase the time easyily but not space complexity

**Author:** 21691A3720
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4836775/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4836775/)

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
class Solution:
    def minimumOperationsToWriteY(self, grid: List[List[int]]) -> int:
        n=len(grid)
        if n==0:
            return 0
        one=0
        two=0
        zero=0
        traverse=n//2
        for i in range(traverse):
            if grid[i][i]==0:
                zero +=1
            elif grid[i][i]==1:
                one +=1
            else:
                two +=1
            if grid[i][n-i-1]==1:
                one +=1
            elif grid[i][n-i-1]==2:
                two +=1
            else:
                zero +=1
            grid[i][i]=-1
            grid[i][n-i-1]=-1
        for j in range(n//2,n):
            if grid[j][traverse]==1:
                one +=1
            elif grid[j][traverse]==0:
                zero +=1
            else:
                two +=1
            grid[j][traverse]=-1
        un_one=0
        un_two=0
        un_zero=0
        for i in range(n):
            for j in range(n):
                if grid[i][j]!=-1:
                    if grid[i][j]==0:
                        un_zero +=1
                    elif grid[i][j]==1:
                        un_one +=1
                    else:
                        un_two +=1
        total=zero+one+two+un_one+un_zero+un_two
        return min(total-(zero+un_one),total-(zero+un_two),
        total-(one+un_zero),total-(one+un_two),
        total-(two+un_zero),total-(two+un_one))


```