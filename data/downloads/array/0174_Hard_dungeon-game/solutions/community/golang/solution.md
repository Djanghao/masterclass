# [Go/Python] Clean and Simple DP Solution With Explanation

**Author:** vltvdnl
**Votes:** 6
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/4583181/](https://leetcode.com/problems/dungeon-game/solutions/4583181/)

---


# Approach
- We will use DP to solve this problem. The obvius desire would be to do traversal from left corner to right. But in this problem, we need to traverse from right to left. 

- Firstly, we need to create a dp array.
dp[i][j] would store min HP needed to get to dungeon[i][j] and survive.
The formula for calculating dp[i][j]
```
dp[i][j] = max(1, prevturn - dungeon[i][j])
```
where prevturn is the cell from which the move was made. The formula is like this, because if **prevturn - dungeon[i][j] < 1**, then min amount of HP to get to this cell is 1. In the other case **dp[i][j] = prevturn - dungeon[i][j]**

- But how do we calculate the ***prevturn***?
The calculation of prevturn will have only 3 cases, we will analyse each case separately

1. ***Base case - we can't get to this point by traversing the array***
    This is the case for dp[m-1][n-1], where m = len(dungeon)
    n = len(dungeon[0]). Since we traverse the array from right to left, we end up at this point at once. Then:
```
dp[m-1][n-1] = max(1, 1 - dungeon[m-1][n-1])
```
2. ***Second case - We can get to point by only one way***
    This case considers points that lie on the bottom row and on the right column. (since the traverse is from right to left). We will calculate them in a loop using the formula:
```
dp[i][n-1] = max(1, dp[i+1][n-1] - dungeon[i][n-1]) // for right colomn
dp[m-1][i] = max(1, dp[m-1][i+1] - dungeon[m-1][i]) // for last row
```
3. ***Third case - We can get to point by two ways***
    This case is for all other points. Since in it we can from two points, we need to choose the one with the smallest value. This is the one that will be prevturn. Then by same way:
```
// we do it in loop
tmp := min(dp[i+1][j], dp[i][j+1]) // prevturn
dp[i][j] = max(1, tmp - dungeon[i][j])
```
##### Answer wil be in dp[0][0]


# Complexity
- Time complexity:
$$O(m*n)$$ We just go through the whole matrix once.

- Space complexity:
$$O(m*n)$$ We create a matrix, which equal to given

# Code
```Go []
func calculateMinimumHP(dungeon [][]int) int {
    m := len(dungeon)
    n := len(dungeon[0])
    
    dp := make([][]int, m)
    for i:= range dp{       // creating array
        dp[i] = make([]int, n)
    }
    dp[m-1][n-1] = max(1, 1 - dungeon[m-1][n-1]) // 1 case

    for i:=m-2; i>=0; i--{  //2 case
        dp[i][n-1] = max(1, dp[i+1][n-1] - dungeon[i][n-1])
    }                                                   
    for i:=n-2; i>=0; i--{
        dp[m-1][i] = max(1, dp[m-1][i+1] - dungeon[m-1][i])
    }

    for i:=m-2; i>=0; i--{ // 3 case
        for j:=n-2; j>=0; j--{
            tmp := min(dp[i+1][j], dp[i][j+1])
            dp[i][j] = max(1, tmp - dungeon[i][j])
            
        }
    }

    return dp[0][0]
}
```
```python []
class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        m = len(dungeon)
        n = len(dungeon[0])

        dp = [0]*m
        for i in range(m): #creating array
            dp[i] = [0]*n
        
        dp[m-1][n-1] = max(1, 1- dungeon[m-1][n-1]) # 1 case

        for i in range(m-2, -1, -1): #2 case
            dp[i][n-1] = max(1, dp[i+1][n-1] - dungeon[i][n-1])
        for i in range(n-2, -1, -1):    
            dp[m-1][i] = max(1, dp[m-1][i+1] - dungeon[m-1][i])
        
        for i in range(m-2, -1,-1): # 3 case
            for j in range(n-2,-1,-1):
                tmp = min(dp[i+1][j], dp[i][j+1])
                dp[i][j] = max(1, tmp - dungeon[i][j])
                
        return dp[0][0]

```
# If you hava any question, feel free to ask. If you like the solution or the explaination, Please UPVOTE!

