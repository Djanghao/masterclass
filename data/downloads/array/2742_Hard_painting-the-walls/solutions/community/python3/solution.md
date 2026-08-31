# ✅97.44%🔥Easy solution🔥Dynamic Programming with Memoization🔥

**Author:** MrAke
**Votes:** 87
**Link:** [https://leetcode.com/problems/painting-the-walls/solutions/4166092/](https://leetcode.com/problems/painting-the-walls/solutions/4166092/)

---

# Problem: \uD83E\uDDAF
##### The problem you've described is a dynamic programming problem where you need to find the minimum amount of money required to paint a series of walls using two painters - a paid painter and a free painter. The paid painter has a cost associated with each wall and takes a certain amount of time to paint each wall, while the free painter can paint any wall in 1 unit of time at no cost, but can only be used when the paid painter is busy.
---
# Solution: \uD83D\uDE80

###### To solve this problem, the provided code uses dynamic programming with memoization. 
#### 1. Preprocessing:
- Create a list **postfix_times** to store the cumulative time taken to paint the walls starting from the last wall to the first. This list will be used to quickly calculate the remaining time needed to paint the remaining walls.
#### 2. Dynamic Programming with Memoization:
- Define a recursive function **dp(index, time_painted)** that calculates the minimum cost to paint the remaining walls starting from index **index** with **time_painted** time units available. The function returns the minimum cost required to paint the remaining walls under these constraints.
- ##### Base Cases:
- - If index is equal to the length of the cost array, it means all walls have been painted, so the cost is 0.
- - If time_painted is greater than or equal to the number of remaining walls, it means that the free painter can be used to paint the remaining walls at no cost. Return 0 in this case.
- - If the remaining time (time_painted) plus the cumulative time to paint the remaining walls (postfix_times[index]) is negative, it's not possible to paint the remaining walls in time. Return infinity (represented as float("inf")) in this case.
- Memoization: The algorithm uses a dictionary visited to memoize the results of subproblems to avoid redundant calculations.
- Recursion: The function recursively calculates the minimum cost by considering two options:

- - Paint the current wall using the paid painter and move to the next wall with decreased available time and increased cost.
- - Skip the current wall and move to the next wall with the same available time.
- The result is stored in the visited dictionary for the current index and time_painted.

#### 3. Returning the Result:

- Call the dp function with initial values index=0 and time_painted=0 (no time consumed initially) and return the result.
---
# Time Complexity: \u23F2\uFE0F
The time complexity of this solution is $$O(n^2)$$ because the algorithm explores all possible combinations of walls and remaining time, and the memoization ensures that each subproblem is solved only once.
# Space Complexity: \uD83D\uDEF0\uFE0F
The space complexity is $$O(n)$$ for the memoization dictionary and $$O(n)$$ for the postfix_times list, resulting in a total space complexity of $$O(n)$$.

![9c6f9412-c860-47d6-9a2e-7fcf37ff3321_1686334926.180891.png](./images/0.png)

---
# Code
```python []
class Solution:
    def paintWalls(self, cost: List[int], time: List[int]) -> int:
        postfix_times = time.copy()

        for i in range(len(postfix_times) - 2, -1, -1):
            postfix_times[i] += postfix_times[i +1]

        visited = {}

        def dp(index, time_painted):
            if index == len(cost):
                return 0 if time_painted >= 0 else float("inf")

            if time_painted >= len(cost) - index:
                return 0

            if time_painted + postfix_times[index] < 0:
                return float("inf")

            if (index, time_painted) in visited:
                return visited[(index, time_painted)]
            
            visited[(index, time_painted)] = min(
                dp(index + 1, time_painted - 1),
                cost[index] + dp(index + 1,
                time_painted + time[index]))
            return visited[(index, time_painted)]
        
        return dp(0, 0)
```
```C++ []
class Solution {
public:
    int solve(vector<int>& cost, vector<int>& time, int i, int bank,vector<vector<int>> &dp){
        if(bank <= 0){
            return 0;
        }
        if(i >= cost.size()){
            return 1e9;   
        }
        if(dp[i][bank] != -1){
            return dp[i][bank];
        }
        else {
            int notTake = solve(cost, time, i+1, bank,dp);
            int take = cost[i] + solve(cost, time, i+1, bank -  time[i] -1,dp); 
            return dp[i][bank] = min(notTake, take);      
        }
    }

    int paintWalls(vector<int>& cost, vector<int>& time) {
        vector<vector<int>> dp(501,vector<int>(501,-1));
        return solve(cost, time, 0, time.size(),dp);
    }
};
```
```javascript []
var paintWalls = function(cost, time) {
    const memo = new Map();

    function knapsack(pos, paintedCount, takenTime) {
        if (paintedCount + takenTime >= cost.length) {
            return 0;
        }

        const key = `${pos}_${paintedCount + takenTime}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        let res1 = -1, res2 = -1;

        if (pos < cost.length) {
            res1 = knapsack(pos + 1, paintedCount + 1, takenTime + time[pos]);
            if (res1 !== -1) {
                res1 += cost[pos];
            }
            res2 = knapsack(pos + 1, paintedCount, takenTime);
        }

        let output = -1;
        if (res1 !== -1 || res2 !== -1) {
            output = (res1 !== -1 && res2 !== -1) ? Math.min(res1, res2) : (res1 !== -1 ? res1 : res2);
        }

        memo.set(key, output);
        return output;
    }

    return knapsack(0, 0, 0);
};

```
```C# []
public class Solution {
    long[,] dp;

    public int PaintWalls(int[] cost, int[] time) {
        dp = new long[cost.Length + 1, cost.Length + 1];
        for (int i = 0; i < dp.GetLength(0); i++) {
            for (int j = 0; j < dp.GetLength(1); j++) {
                dp[i, j] = -1;
            }
        }

        long res = F(cost, time, 0, 0);
        return (int) res;
    }

    public long F(int[] cost, int[] time, int i, int t) {
        if (t >= cost.Length) {
            return 0;
        }
        if (i == cost.Length) {
            return int.MaxValue;
        }
        if (dp[i, t] != -1) {
            return dp[i, t];
        }

        dp[i, t] = Math.Min(cost[i] + F(cost, time, i + 1, t + 1 + time[i]), F(cost, time, i + 1, t));
        return dp[i, t];
    }
}
```
```java []
class Solution {
    public int paintWalls(int[] cost, int[] time) {
        int n=cost.length;
        return (int)paintWallsHelper(cost,time,0,0,new Long[n][501]);
    }
    
    private long paintWallsHelper(int[] cost, int[] time, int index, int total, Long[][] memo) {
        if(total >= cost.length)
            return 0;
        if(index >= cost.length)
            return Integer.MAX_VALUE;
        if(memo[index][total] != null)
            return memo[index][total];
        
        long with=cost[index] + paintWallsHelper(cost,time,index+1,total+time[index]+1,memo);
        long without=paintWallsHelper(cost,time,index+1,total,memo);
        return memo[index][total]=Math.min(with,without);
    }
}

```

---