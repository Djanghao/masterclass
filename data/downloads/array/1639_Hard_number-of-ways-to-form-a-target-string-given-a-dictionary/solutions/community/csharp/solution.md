# ✅Bottom-up Dynamic Programming | Go | C#✅

**Author:** shukhratutaboev
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3421400/](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3421400/)

---


# Complexity
- Time complexity: $$O((n + m) * k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m * k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
Go
```
func numWays(words []string, target string) int {
    alphabet := 26
    mod := 1000000007
    m := len(target)
    k := len(words[0])
    cnt := make([][]int, alphabet)
    for i := range cnt {
        cnt[i] = make([]int, k)
    }
    for j := 0; j < k; j++ {
        for _, word := range words {
            cnt[word[j]-'a'][j]++
        }
    }
    dp := make([][]int64, m+1)
    for i := range dp {
        dp[i] = make([]int64, k+1)
    }
    dp[0][0] = 1
    for i := 0; i <= m; i++ {
        for j := 0; j < k; j++ {
            if i < m {
                dp[i+1][j+1] += int64(cnt[target[i]-'a'][j]) * dp[i][j] % int64(mod)
                dp[i+1][j+1] %= int64(mod)
            }
            dp[i][j+1] += dp[i][j]
            dp[i][j+1] %= int64(mod)
        }
    }
    return int(dp[m][k])
}

```
C#
```
public class Solution {
    public int NumWays(string[] words, string target) {
        int alphabet = 26;
        int mod = 1000000007;
        int m = target.Length, k = words[0].Length;
        int[,] cnt = new int[alphabet, k];
        for (int j = 0; j < k; j++) {
            foreach (string word in words) {
                cnt[word[j] - 'a', j]++;
            }
        }
        long[,] dp = new long[m + 1, k + 1];
        dp[0, 0] = 1;
        for (int i = 0; i <= m; i++) {
            for (int j = 0; j < k; j++) {
                if (i < m) {
                    dp[i + 1, j + 1] += cnt[target[i] - 'a', j] * dp[i, j];
                    dp[i + 1, j + 1] %= mod;
                }
                dp[i, j + 1] += dp[i, j];
                dp[i, j + 1] %= mod;
            }
        }
        return (int)dp[m, k];
    }
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)