# Recursion -> 3D-DP -> 2D-DP -> bottom up 2D-DP

**Author:** nacoward
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-permutations/solutions/3651891/](https://leetcode.com/problems/special-permutations/solutions/3651891/)

---

Firstly use recursion to make sure we understand this question.

1. Use `flag` as a bitmap to record which indices of nums that have been visited, as the size of nums <=14
2. Use `prev` to denote the previous number we have just visited
3. `idx` is the index that currently has been marched. So if idx==(size of nums), it means the way out of the recursion. Under this situation, return 1 because it is a way that meets all the requirements, that is to say, if there is any wrong during the way, it would not get here.
4. Take a look at the code below, the thought of the question should be clear so far. The left is the details about how to operate on bitmap.

```
func specialPerm(nums []int) int {
    n, MOD := len(nums), int(1e9+7)
    var helper func(int, int, int) int
    helper = func(idx, flag, prev int) int {
        if idx == n {return 1}
        ans := 0
        for i:=0; i<n; i++ {
            if flag == 0 {
                ans = (ans + helper(idx+1, flag | (1<<i), nums[i])) % MOD
                continue
            }
            // the i-th of nums already has been visited.
            if flag & (1<<i) > 0 {continue}
            if nums[i] % prev == 0 || prev % nums[i] == 0 {
                ans = (ans + helper(idx+1, flag | (1<<i), nums[i])) % MOD
            }
        }
        return ans
    }
    return helper(0, 0, -1)
}
```

The above code would exceed the time limit definately.
Dive into the code and take advantage of Memoization to reduce the time.
An eye on that: prev is an index of nums, denoting the index of nums is the previous number that been visited.
```
func specialPerm(nums []int) int {
    n, MOD := len(nums), int(1e9+7)
    dp := make([][][]int, n)
    for i:=0; i<n; i++ {
        dp[i] = make([][]int, n)
        for j:=0; j<n; j++ {
            dp[i][j] = make([]int, 1<<n)
            for k:=0; k<1<<n; k++ {dp[i][j][k] = -1}
        }
    }
    var helper func(int, int, int) int
    helper = func(idx, flag, prev int) int {
        if idx == n {return 1}
        if dp[idx][prev][flag] >= 0 {return dp[idx][prev][flag]}
        ans := 0
        for i:=0; i<n; i++ {
            if flag == 0 {
                ans = (ans + helper(idx+1, flag | (1<<i), i)) % MOD
                continue
            }
            if flag & (1<<i) > 0 {continue}
            if nums[i] % nums[prev] == 0 || nums[prev] % nums[i] == 0 {
                ans = (ans + helper(idx+1, flag | (1<<i), i)) % MOD
            }
        }
        //fmt.Printf("idx:%v, flag:%v, ans:%v\
", idx, flag, ans)
        dp[idx][prev][flag] = ans
        return ans
    }
    return helper(0, 0, 0)
}
```

Observe `dp[idx][prev][flag]`, we can deduce the `index` from `flag`.
Why?
Because according to the above introduction, if idx==(size of numbers), it is a way out of the recursion. At that time, flag must be equal to (1<<n)-1, denoting all the indices of nums have already been visited.
So the meaning of `idx` can be represented by `flag`, and by omitting the `idx`, reduce the array from 3D to 2D.
```
func specialPerm(nums []int) int {
    n, MOD := len(nums), int(1e9+7)
    dp := make([][]int, n)
    for i:=0; i<n; i++ {
        dp[i] = make([]int, 1<<n)
        for j:=0; j<1<<n; j++ {dp[i][j] = -1}
    }
    var helper func(int, int) int
    helper = func(prev, flag int) int {
        if flag == (1<<n)-1 {return 1}
        if dp[prev][flag] >= 0 {return dp[prev][flag]}
        ans := 0
        for i:=0; i<n; i++ {
            if flag == 0 {
                ans = (ans + helper(i, flag | (1<<i))) % MOD
                continue
            }
            if flag & (1<<i) > 0 {continue}
            if nums[i] % nums[prev] == 0 || nums[prev] % nums[i] == 0 {
                ans = (ans + helper(i, flag | (1<<i))) % MOD
            }
        }
        //fmt.Printf("idx:%v, flag:%v, ans:%v\
", idx, flag, ans)
        dp[prev][flag] = ans
        return ans
    }
    return helper(0, 0)
}
```

At last, we can use the way of bottom-up DP.
Previous way out of the recursion is idx == (size of nums), and now the beginning of the way is :
1, at first, we have no `prev`, as we have not explored it yet.
2, pick one index arbitrarily, let's say `prev=i`, and at that time`flag` == `1<<i`, and next procedures are based on this. 
So `dp[i][1<<i] = 1`, it's just like `if idx==n {return 1}` of the top-down way.

# Code
```
func specialPerm(nums []int) int {
    n, MOD, ans := len(nums), int(1e9+7), 0
    dp := make([][]int, n)
    for i:=0; i<n; i++ {
        dp[i] = make([]int, 1<<n)
        dp[i][1<<i] = 1
    }
    for mask := 0; mask < 1<<n; mask++ {
        for cur := 0; cur < n; cur++ {
            if dp[cur][mask] == 0 {continue}
            for nxt := 0; nxt < n; nxt++ {
                if nxt==cur || ((1<<nxt) & mask) > 0 {continue}
                if nums[nxt] % nums[cur] == 0 || nums[cur] % nums[nxt] == 0 {
                    dp[nxt][mask | (1<<nxt)] = (dp[nxt][mask | (1<<nxt)] + dp[cur][mask]) % MOD
                }
            }
        }
    }
    for i:=0; i<n; i++ {
        ans = (ans + dp[i][(1<<n) - 1]) %  MOD
    }
    return ans
}

```
Hope you enjoy it.