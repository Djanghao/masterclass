# [Go/Python] Simple Solution With Explanation || For Begginers || Beats 100%

**Author:** vltvdnl
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/4660079/](https://leetcode.com/problems/find-champion-i/solutions/4660079/)

---

# Approach
- First of all, it is necessary to read the condition of the problem very carefully, because it contains the whole meaning of the solution. 
- After reading the solutions, we can understand that the winner of the tournament will be the player who has ***only one zero*** in the array when **i==j**. So we just need to go through the whole two-dimensional array (with the help of two loops) and look at each subarray for this condition, if it is met, then return the index of this subarray

### Time complexity:
$$O(n^2)$$ - iterating over a two-dimensional array n*n

### Space complexity:
$$O(1)$$ - just one variable

```python []
class Solution:
    def findChampion(self, grid: List[List[int]]) -> int:
        l = len(grid)
        for i in range(len(grid)):
            if grid[i].count(1) == l-1: #counting all units in the subarray, if the number is equal to length-1, this will be the answer.
                return i
        return -1
```
```Go []
func findChampion(grid [][]int) int {
    ans := 0
    l := len(grid[0])
    for i:=0; i<len(grid); i++{
        fl := true
        for j:=0; j<l; j++{
            if grid[i][j] == 0 && i!=j{
                fl=false
                break
            }
        }
        if fl{
            return i
        }
    }
    return ans
}
```
# If you hava any question, feel free to ask. If you like the solution or the explaination, Please UPVOTE!

