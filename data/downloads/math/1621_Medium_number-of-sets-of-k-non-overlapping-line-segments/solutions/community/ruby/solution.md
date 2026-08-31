# [Ruby] O(n*k)

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/899183/](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/899183/)

---

```
MOD = 10**9 + 7

# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def number_of_sets(n, k)
  dp = n.times.map{[0]*(k + 1)}
  dp[0][0] = 1

  (1..k).each do |j|
    s = 0
    (1...n).each do |i|
      s += dp[i - 1][j - 1]
      s %= MOD
      dp[i][j] = (dp[i-1][j] + s) % MOD
    end
  end

  dp.map(&:last).sum % MOD
end
```