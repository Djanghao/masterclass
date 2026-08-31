# Exclusively DP solution

**Author:** user8272RT
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-partitions/solutions/4313278/](https://leetcode.com/problems/number-of-beautiful-partitions/solutions/4313278/)

---

# Intuition
At an index `i` in `s`, if `s[i]` is prime and `s[i+1]` is composite, then we can either make a split, or skip it. Since we need to determine all possible combinations of beautiful partitions (with added constraints), dynamic programming can be used.

# DP transition formula
Let `dp[split_count][index]` represent the number of ways to split the subarrays `s[:i]` (inclusive of `i`) into `split_count` parts.


If a split is possible at index `i`.
```
dp[j][i] = dp[j][i-1] + dp[j-1][i-minLength]
```
If not, 
```
dp[j][i] = dp[j][i-1]
```

The final answer can be obtained with `dp[k-1][n-minLength]`, as it is the number of ways to obtain k splits following the restrictions.

# Initial states
When the split count is 0, there is only 1 possible way to accomplish it, by having 0 elements in the substring.

# Complexity
- Time complexity: $$O(k*n)$$

- Space complexity: $$O(k*n)$$

# Code
```
func beautifulPartitions(s string, k int, minLength int) int {
    M:=1000000007
    n:=len(s)
    dp:=make([][]int, k+1)
    for i:=range dp{
        dp[i]=make([]int, n+1)
    }
    for i:=range dp[0]{
        dp[0][i]=1
    }
    if !isPrime(s[0]) || isPrime(s[n-1]){
        return 0
    }
    for j:=1;j<=k;j++{
        for i:=1;i<=n;i++{
            if i==n || (!isPrime(s[i-1]) && isPrime(s[i])) && i-minLength>=0{
                dp[j][i] = (dp[j][i-1]+dp[j-1][i-minLength])%M
            }else{
                dp[j][i] = dp[j][i-1]
            }
        }
    }
    return dp[k-1][n-minLength]
}

func isPrime(i byte) bool{
    if strings.ContainsRune("2357", rune(i)){
        return true
    }
    return false
}
```