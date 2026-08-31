# 🌟 Recursion, Memoization, Tabulation & Optimization Solutions in Multiple Languages 💻🚀✨

**Author:** shubhamrajpoot_
**Votes:** 2
**Link:** [https://leetcode.com/problems/coin-change-ii/solutions/6124902/](https://leetcode.com/problems/coin-change-ii/solutions/6124902/)

---


# Intuition \uD83E\uDDE0
- The problem involves finding combinations to make a target amount using coins. At each step, we decide either to take (include the current coin) or not take (exclude the current coin), building the solution iteratively.

---



# Approach \uD83D\uDE80
#### 1. Define DP Table:  
-     Use dp[i][T]
    where i is the number of coins considered, and T is the target amount.
#### 2. Base Case: 
-     dp[0][T] = 1 if T % coins[0] == 0.
#### 3. Transition:
-     Not Take: dp[i][T] = dp[i-1][T]
-     Take: Add dp[i][T - coins[i]] if T >= coins[i].
#### 4. Result:
-     Return dp[n-1][target].

---

# Complexity
- Time complexity:
-     O(n \xD7 target)

- Space complexity:
-     O(target)

# Code
```cpp []
class Solution {
public:
    int recursion(int index , vector<int>& arr , int target)
    {
        //base case
        if(index == 0)
        {
            return (target % arr[index] == 0) ;
        } 


        int not_take = recursion(index-1 , arr ,target);
        int take = 0 ; 
        if(arr[index] <= target)
        {
            take = recursion(index, arr , target - arr[index]); 
        }

        return take + not_take ;
    }

    int memoization(int index , vector<int>& arr , int target, vector<vector<int>>& dp)
    {
        int n = arr.size() ;
        if(index == 0)
        {
            return (target % arr[index] == 0) ;
        }
        if(dp[index][target] != -1) return dp[index][target] ;

        int not_take = memoization(index -1 , arr , target, dp);
        int take = 0 ;
        if(arr[index] <= target)
        {
            take = memoization(index , arr , target - arr[index] ,dp);
        }

        return dp[index][target] = take + not_take ;
    }

    long long tabulation(vector<int> & arr, int target)
    {
        int n = arr.size() ;
        vector<vector<long long>> dp(n , vector<long long>(target+1 , 0));
        for(int T = 0 ; T <= target ; T++)
        {
              dp[0][T] = (T % arr[0] == 0); 
        }

        for(int i = 1 ; i < n ; i++)
        {
            for(int T = 0; T <= target ; T++)
            {
                    long long  not_take = dp[i -1][T] ;
                    long long  take = 0 ;
                    if(arr[i] <= T)
                    {
                        take =dp[i][T - arr[i]] ;
                    }

                    dp[i][T] = take + not_take ;
            }
        }
        return dp[n-1][target] ;
        
    }

     long long spaceOptimization(vector<int> & arr, int target)
    {
        int n = arr.size() ;
        
        vector<int> prev(target+1 , 0) , cur(target+1 , 0);
        for(int T = 0 ; T <= target ; T++)
        {
              prev[T] = (T % arr[0] == 0); 
        }

        for(int i = 1 ; i < n ; i++)
        {
            for(int T = 0; T <= target ; T++)
            {
                    long long  not_take = prev[T] ;
                    long long  take = 0 ;
                    if(arr[i] <= T)
                    {
                        take = cur[T - arr[i]] ;
                    }

                    cur[T] = take + not_take ;
            }
            prev = cur ;
        }
        return prev[target] ;
        
    }

    int change(int amount, vector<int>& coins) {
        int n = coins.size();
        // return recursion(n-1 , coins , amount);
        vector<vector<int>> dp(n , vector<int>(amount +1 , -1));

        // return memoization(n-1 , coins , amount, dp);

        // return tabulation(coins , amount) ;

         return spaceOptimization(coins , amount) ;
    }
};
```

```Java []
class Solution {
    public int recursion(int index, int[] arr, int target) {
        if (index == 0) return target % arr[0] == 0 ? 1 : 0;

        int notTake = recursion(index - 1, arr, target);
        int take = 0;
        if (arr[index] <= target)
            take = recursion(index, arr, target - arr[index]);

        return take + notTake;
    }

    public int memoization(int index, int[] arr, int target, int[][] dp) {
        if (index == 0) return target % arr[0] == 0 ? 1 : 0;

        if (dp[index][target] != -1) return dp[index][target];

        int notTake = memoization(index - 1, arr, target, dp);
        int take = 0;
        if (arr[index] <= target)
            take = memoization(index, arr, target - arr[index], dp);

        return dp[index][target] = take + notTake;
    }

    public long tabulation(int[] arr, int target) {
        int n = arr.length;
        long[][] dp = new long[n][target + 1];

        for (int T = 0; T <= target; T++)
            dp[0][T] = (T % arr[0] == 0) ? 1 : 0;

        for (int i = 1; i < n; i++) {
            for (int T = 0; T <= target; T++) {
                long notTake = dp[i - 1][T];
                long take = (arr[i] <= T) ? dp[i][T - arr[i]] : 0;
                dp[i][T] = take + notTake;
            }
        }

        return dp[n - 1][target];
    }

    public long spaceOptimization(int[] arr, int target) {
        int n = arr.length;
        long[] prev = new long[target + 1];
        long[] cur = new long[target + 1];

        for (int T = 0; T <= target; T++)
            prev[T] = (T % arr[0] == 0) ? 1 : 0;

        for (int i = 1; i < n; i++) {
            for (int T = 0; T <= target; T++) {
                long notTake = prev[T];
                long take = (arr[i] <= T) ? cur[T - arr[i]] : 0;
                cur[T] = take + notTake;
            }
            prev = cur.clone();
        }

        return prev[target];
    }

    public int change(int amount, int[] coins) {
        int n = coins.length;
        // int[][] dp = new int[n][amount + 1];
        // for (int[] row : dp) Arrays.fill(row, -1);
        // return memoization(n - 1, coins, amount, dp);

        // return tabulation(coins, amount);
        return (int) spaceOptimization(coins, amount);
    }
}

```
```python []
class Solution:
    def recursion(self, index, arr, target):
        if index == 0:
            return int(target % arr[0] == 0)

        not_take = self.recursion(index - 1, arr, target)
        take = 0
        if arr[index] <= target:
            take = self.recursion(index, arr, target - arr[index])

        return take + not_take

    def memoization(self, index, arr, target, dp):
        if index == 0:
            return int(target % arr[0] == 0)

        if dp[index][target] != -1:
            return dp[index][target]

        not_take = self.memoization(index - 1, arr, target, dp)
        take = 0
        if arr[index] <= target:
            take = self.memoization(index, arr, target - arr[index], dp)

        dp[index][target] = take + not_take
        return dp[index][target]

    def tabulation(self, arr, target):
        n = len(arr)
        dp = [[0] * (target + 1) for _ in range(n)]

        for T in range(target + 1):
            dp[0][T] = int(T % arr[0] == 0)

        for i in range(1, n):
            for T in range(target + 1):
                not_take = dp[i - 1][T]
                take = 0
                if arr[i] <= T:
                    take = dp[i][T - arr[i]]

                dp[i][T] = take + not_take

        return dp[n - 1][target]

    def spaceOptimization(self, arr, target):
        n = len(arr)
        prev = [0] * (target + 1)
        cur = [0] * (target + 1)

        for T in range(target + 1):
            prev[T] = int(T % arr[0] == 0)

        for i in range(1, n):
            for T in range(target + 1):
                not_take = prev[T]
                take = 0
                if arr[i] <= T:
                    take = cur[T - arr[i]]

                cur[T] = take + not_take
            prev = cur[:]

        return prev[target]

    def change(self, amount, coins):
        n = len(coins)
        # dp = [[-1] * (amount + 1) for _ in range(n)]
        # return self.memoization(n - 1, coins, amount, dp)
        # return self.tabulation(coins, amount)
        return self.spaceOptimization(coins, amount)

```
```JavaScript []
class Solution {
    recursion(index, arr, target) {
        if (index === 0) return target % arr[0] === 0 ? 1 : 0;

        const notTake = this.recursion(index - 1, arr, target);
        let take = 0;
        if (arr[index] <= target)
            take = this.recursion(index, arr, target - arr[index]);

        return take + notTake;
    }

    memoization(index, arr, target, dp) {
        if (index === 0) return target % arr[0] === 0 ? 1 : 0;

        if (dp[index][target] !== -1) return dp[index][target];

        const notTake = this.memoization(index - 1, arr, target, dp);
        let take = 0;
        if (arr[index] <= target)
            take = this.memoization(index, arr, target - arr[index], dp);

        dp[index][target] = take + notTake;
        return dp[index][target];
    }

    tabulation(arr, target) {
        const n = arr.length;
        const dp = Array.from({ length: n }, () => Array(target + 1).fill(0));

        for (let T = 0; T <= target; T++)
            dp[0][T] = T % arr[0] === 0 ? 1 : 0;

        for (let i = 1; i < n; i++) {
            for (let T = 0; T <= target; T++) {
                const notTake = dp[i - 1][T];
                const take = arr[i] <= T ? dp[i][T - arr[i]] : 0;
                dp[i][T] = take + notTake;
            }
        }

        return dp[n - 1][target];
    }

    spaceOptimization(arr, target) {
        const n = arr.length;
        let prev = Array(target + 1).fill(0);
        let cur = Array(target + 1).fill(0);

        for (let T = 0; T <= target; T++)
            prev[T] = T % arr[0] === 0 ? 1 : 0;

        for (let i = 1; i < n; i++) {
            for (let T = 0; T <= target; T++) {
                const notTake = prev[T];
                const take = arr[i] <= T ? cur[T - arr[i]] : 0;
                cur[T] = take + notTake;
            }
            prev = [...cur];
        }

        return prev[target];
    }

    change(amount, coins) {
        const n = coins.length;
        // const dp = Array.from({ length: n }, () => Array(amount + 1).fill(-1));
        // return this.memoization(n - 1, coins, amount, dp);

        // return this.tabulation(coins, amount);
        return this.spaceOptimization(coins, amount);
    }
}

```
``` C# []
using System;
using System.Collections.Generic;

public class Solution {
    public int Recursion(int index, int[] arr, int target) {
        if (index == 0) return target % arr[0] == 0 ? 1 : 0;

        int notTake = Recursion(index - 1, arr, target);
        int take = 0;
        if (arr[index] <= target)
            take = Recursion(index, arr, target - arr[index]);

        return take + notTake;
    }

    public int Memoization(int index, int[] arr, int target, int[,] dp) {
        if (index == 0) return target % arr[0] == 0 ? 1 : 0;

        if (dp[index, target] != -1) return dp[index, target];

        int notTake = Memoization(index - 1, arr, target, dp);
        int take = 0;
        if (arr[index] <= target)
            take = Memoization(index, arr, target - arr[index], dp);

        return dp[index, target] = take + notTake;
    }

    public long Tabulation(int[] arr, int target) {
        int n = arr.Length;
        long[,] dp = new long[n, target + 1];

        for (int T = 0; T <= target; T++)
            dp[0, T] = (T % arr[0] == 0) ? 1 : 0;

        for (int i = 1; i < n; i++) {
            for (int T = 0; T <= target; T++) {
                long notTake = dp[i - 1, T];
                long take = 0;
                if (arr[i] <= T)
                    take = dp[i, T - arr[i]];

                dp[i, T] = take + notTake;
            }
        }

        return dp[n - 1, target];
    }

    public long SpaceOptimization(int[] arr, int target) {
        int n = arr.Length;
        long[] prev = new long[target + 1];
        long[] cur = new long[target + 1];

        for (int T = 0; T <= target; T++)
            prev[T] = (T % arr[0] == 0) ? 1 : 0;

        for (int i = 1; i < n; i++) {
            for (int T = 0; T <= target; T++) {
                long notTake = prev[T];
                long take = 0;
                if (arr[i] <= T)
                    take = cur[T - arr[i]];

                cur[T] = take + notTake;
            }
            Array.Copy(cur, prev, target + 1);
        }

        return prev[target];
    }

    public int Change(int amount, int[] coins) {
        int n = coins.Length;
        // int[,] dp = new int[n, amount + 1];
        // Array.Fill(dp, -1);
        // return Memoization(n - 1, coins, amount, dp);

        // return Tabulation(coins, amount);
        return (int)SpaceOptimization(coins, amount);
    }
}

```
``` Go []
package main

func recursion(index int, arr []int, target int) int {
    if index == 0 {
        if target%arr[0] == 0 {
            return 1
        }
        return 0
    }

    notTake := recursion(index-1, arr, target)
    take := 0
    if arr[index] <= target {
        take = recursion(index, arr, target-arr[index])
    }

    return take + notTake
}

func memoization(index int, arr []int, target int, dp [][]int) int {
    if index == 0 {
        if target%arr[0] == 0 {
            return 1
        }
        return 0
    }

    if dp[index][target] != -1 {
        return dp[index][target]
    }

    notTake := memoization(index-1, arr, target, dp)
    take := 0
    if arr[index] <= target {
        take = memoization(index, arr, target-arr[index], dp)
    }

    dp[index][target] = take + notTake
    return dp[index][target]
}

func tabulation(arr []int, target int) int {
    n := len(arr)
    dp := make([][]int, n)
    for i := range dp {
        dp[i] = make([]int, target+1)
    }

    for T := 0; T <= target; T++ {
        if T%arr[0] == 0 {
            dp[0][T] = 1
        }
    }

    for i := 1; i < n; i++ {
        for T := 0; T <= target; T++ {
            notTake := dp[i-1][T]
            take := 0
            if arr[i] <= T {
                take = dp[i][T-arr[i]]
            }
            dp[i][T] = take + notTake
        }
    }

    return dp[n-1][target]
}

func spaceOptimization(arr []int, target int) int {
    n := len(arr)
    prev := make([]int, target+1)
    cur := make([]int, target+1)

    for T := 0; T <= target; T++ {
        if T%arr[0] == 0 {
            prev[T] = 1
        }
    }

    for i := 1; i < n; i++ {
        for T := 0; T <= target; T++ {
            notTake := prev[T]
            take := 0
            if arr[i] <= T {
                take = cur[T-arr[i]]
            }
            cur[T] = take + notTake
        }
        copy(prev, cur)
    }

    return prev[target]
}

func change(amount int, coins []int) int {
    n := len(coins)
    // dp := make([][]int, n)
    // for i := range dp {
    //     dp[i] = make([]int, amount+1)
    //     for j := range dp[i] {
    //         dp[i][j] = -1
    //     }
    // }
    // return memoization(n-1, coins, amount, dp)

    // return tabulation(coins, amount)
    return spaceOptimization(coins, amount)
}

```

```ruby []
class Solution
    def recursion(index, arr, target)
        return (target % arr[0] == 0) ? 1 : 0 if index == 0

        not_take = recursion(index - 1, arr, target)
        take = 0
        take = recursion(index, arr, target - arr[index]) if arr[index] <= target

        return take + not_take
    end

    def memoization(index, arr, target, dp)
        return (target % arr[0] == 0) ? 1 : 0 if index == 0
        return dp[index][target] unless dp[index][target] == -1

        not_take = memoization(index - 1, arr, target, dp)
        take = 0
        take = memoization(index, arr, target - arr[index], dp) if arr[index] <= target

        dp[index][target] = take + not_take
        return dp[index][target]
    end

    def tabulation(arr, target)
        n = arr.size
        dp = Array.new(n) { Array.new(target + 1, 0) }

        (0..target).each do |t|
            dp[0][t] = (t % arr[0] == 0) ? 1 : 0
        end

        (1...n).each do |i|
            (0..target).each do |t|
                not_take = dp[i - 1][t]
                take = (arr[i] <= t) ? dp[i][t - arr[i]] : 0
                dp[i][t] = take + not_take
            end
        end

        return dp[n - 1][target]
    end

    def space_optimization(arr, target)
        n = arr.size
        prev = Array.new(target + 1, 0)
        cur = Array.new(target + 1, 0)

        (0..target).each do |t|
            prev[t] = (t % arr[0] == 0) ? 1 : 0
        end

        (1...n).each do |i|
            (0..target).each do |t|
                not_take = prev[t]
                take = (arr[i] <= t) ? cur[t - arr[i]] : 0
                cur[t] = take + not_take
            end
            prev = cur.dup
        end

        return prev[target]
    end

    def change(amount, coins)
        n = coins.size
        # dp = Array.new(n) { Array.new(amount + 1, -1) }
        # return memoization(n - 1, coins, amount, dp)
        # return tabulation(coins, amount)
        return space_optimization(coins, amount)
    end
end

```


