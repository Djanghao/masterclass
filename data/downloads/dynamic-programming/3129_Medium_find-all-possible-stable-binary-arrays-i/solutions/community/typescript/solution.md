# New ⭐ Most intuitive solution by itsyeshu ⭐ Beats 100% ⭐ Python, C++, Java, Javascript, Typescript

**Author:** itsyeshu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5088454/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5088454/)

---

# Intuition
The question itself is simple. We need to find all possible arrays with :
1. Count of all one's is $one$
2. Count of all zero's is $zero$
3. All subarrays have a $limit$ on how long the maximum streak of one and zero can be.

Here, we will run a dfs, keeping track of one's and zero's streak.

``` Python []
class Solution:
    def numberOfStableArrays(self, zero: int, one: int, limit: int) -> int:
        MOD = 1e9+7

        @cache
        def dfs(zero:int, one:int, zeroStreak:int, oneStreak:int) -> int:
            if zero < 0 or one < 0:
                return 0
            if zero == 0 and one == 0:
                return 1

            res = 0

            if oneStreak < limit:
                res = (res + dfs(zero, one-1, 0, oneStreak + 1)) % MOD
            if zeroStreak < limit:
                res = (res + dfs(zero-1, one, zeroStreak+1, 0)) % MOD
            return res % MOD
        return int(dfs(zero, one, 0, 0) % MOD)
```

This has a time complexity of $O(zero * one * limit ^ 2)$ which in worst case will give *TLE*.

Let's optimize this code. As zero and one are essential to dfs, let's remove dependencies on $limit$ with $oneStreak$ and $zeroStreak$.

We will instead use a boolean $useOne$ to indicate that we can use *one* if $True$ and *zero* if $False$.
Now, we have removed the $limit^2$ component from **Time complexity**.

> ### Enjoying my solution?
> Please upvote my solution, comment your doubts and help others.

# Approach
1. Initialize $MOD = 10^9 + 7$
2. Create a ***DFS*** function $dfs$
    1. Define base case:

        ```
        if zero == 0 and one == 0:
            return 1
        ```

    2. Initialize $totalArrays = 0$
    3. If $useOne == True$, use one's with a streak of $1$ to minimum of $limit$ and $one$. Run dfs on this. Add it's result to $totalArrays$
    4. Do the same if useOne is False
    5. Return $totalArrays$
3. Run $dfs$, with useOne of $True$ and $False$
4. Add and return the result.

# Complexity
- Time complexity: $O(zero * one * 2)$ ~ $O(zero * one)$
- Space complexity: $O(zero * one * 2)$
    - Cache uses this memory along with our dfs function.

# Code
``` Python []
class Solution:
    def numberOfStableArrays(self, zero: int, one: int, limit: int) -> int:
        MOD = 1e9+7

        @cache
        def dfs(zero:int, one:int, useOne:int) -> int:
            if zero == 0 and one == 0:
                return 1
            
            totalArrays = 0
            if useOne:
                for oneStreak in range(1, min(one, limit) + 1):
                    totalArrays = (totalArrays + dfs(zero, one-oneStreak, 0)) % MOD
            else:
                for zeroStreak in range(1, min(zero, limit) + 1):
                    totalArrays += (totalArrays + dfs(zero-zeroStreak, one, 1)) % MOD
            return int(totalArrays)
        return int((dfs(zero, one, 0) + dfs(zero, one, 1)) % MOD)
```
``` C++ []
class Solution {
private:
    int limit = -1, MOD = 1e9+7;
    vector<vector<vector<int>>> dp;
    int dfs(int zero, int one, int useOne) {
        if (zero == 0 && one == 0) {
            return 1;
        }
        if (dp[zero][one][useOne] != -1) {
            return dp[zero][one][useOne];
        }

        int totalArrays = 0;
        if (useOne) {
            for (int oneStreak = 1; oneStreak <= min(one, limit); oneStreak++) {
                totalArrays = (totalArrays + dfs(zero, one - oneStreak, 0)) % MOD;
            }
        } else {
            for (int zeroStreak = 1; zeroStreak <= min(zero, limit); zeroStreak++) {
                totalArrays = (totalArrays + dfs(zero - zeroStreak, one, 1)) % MOD;
            }
        }

        dp[zero][one][useOne] = totalArrays;
        return totalArrays;
    }

public:
    int numberOfStableArrays(int zero, int one, int limit) {
        this->limit = limit;
        dp.resize(zero + 1, vector<vector<int>>(one + 1, vector<int>(2, -1)));
        return (dfs(zero, one, 0) + dfs(zero, one, 1)) % MOD;
    }
};
```

``` Java []
class Solution {
    private static final int MOD = (int) (1e9 + 7);
    private int[][][] dp;
    private static int limit = -1;

    public int numberOfStableArrays(int zero, int one, int limit) {
        this.limit = limit;
        dp = new int[zero + 1][one + 1][2];
        for (int[][] arr : dp) {
            for (int[] row : arr) {
                Arrays.fill(row, -1);
            }
        }
        return (dfs(zero, one, 0) + dfs(zero, one, 1)) % MOD;
    }

    private int dfs(int zero, int one, int useOne) {
        if (zero == 0 && one == 0) {
            return 1;
        }
        if (dp[zero][one][useOne] != -1) {
            return dp[zero][one][useOne];
        }

        int totalArrays = 0;
        
        if (useOne == 1) {
            for (int oneStreak = 1; oneStreak <= Math.min(one, limit); oneStreak++) {
                totalArrays = (totalArrays + dfs(zero, one - oneStreak, 0)) % MOD;
            }
        } else {
            for (int zeroStreak = 1; zeroStreak <= Math.min(zero, limit); zeroStreak++) {
                totalArrays = (totalArrays + dfs(zero - zeroStreak, one, 1)) % MOD;
            }
        }

        dp[zero][one][useOne] = totalArrays;
        return totalArrays;
    }
}
```


``` Javascript []
const MOD = 1e9 + 7
let dp = []
let limit = -1

function dfs(zero, one, useOne) {
    if (zero === 0 && one === 0) {
        return 1
    }

    if (dp[useOne][one][zero] !== -1) {
        return dp[useOne][one][zero]
    }
    
    let totalArrays = 0
    if (useOne) {
        for (let oneStreak = 1; oneStreak <= Math.min(one, limit); oneStreak++) {
            totalArrays = (totalArrays + dfs(zero, one - oneStreak, 0)) % MOD
        }
    } else {
        for (let zeroStreak = 1; zeroStreak <= Math.min(zero, limit); zeroStreak++) {
            totalArrays = (totalArrays + dfs(zero - zeroStreak, one, 1)) % MOD
        }
    }

    dp[useOne][one][zero] = totalArrays
    return totalArrays
}

/**
 * @param {number} zero
 * @param {number} one
 * @param {number} _limit
 * @return {number}
 */
function numberOfStableArrays(zero, one, _limit) {
    limit = _limit
    dp = new Array(2)
        .fill(0)
        .map(() => new Array(one + 1)
            .fill(0)
            .map(() => new Array(zero + 1).fill(-1)))
    return (dfs(zero, one, 0) + dfs(zero, one, 1)) % MOD
}
```

``` Typescript []
const MOD = 1e9 + 7
let dp: number[][][] = []
let limit: number = -1

function dfs(zero: number, one: number, useOne: 0 | 1): number {
    if (zero === 0 && one === 0) {
        return 1
    }

    if (dp[useOne][one][zero] !== -1) {
        return dp[useOne][one][zero]
    }

    let totalArrays = 0
    if (useOne) {
        for (let oneStreak = 1; oneStreak <= Math.min(one, limit); oneStreak++) {
            totalArrays = (totalArrays + dfs(zero, one - oneStreak, 0)) % MOD
        }
    } else {
        for (let zeroStreak = 1; zeroStreak <= Math.min(zero, limit); zeroStreak++) {
            totalArrays = (totalArrays + dfs(zero - zeroStreak, one, 1)) % MOD
        }
    }

    dp[useOne][one][zero] = totalArrays
    return totalArrays
}

function numberOfStableArrays(zero: number, one: number, _limit: number): number {
    limit = _limit
    dp = new Array(2)
        .fill(0)
        .map(() => new Array(one + 1)
            .fill(0)
            .map(() => new Array(zero + 1).fill(-1)))

    return (dfs(zero, one, 0) + dfs(zero, one, 1)) % MOD
}
```