# [Ruby] DP, O(nk)

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-inverse-pairs-array/solutions/1283845/](https://leetcode.com/problems/k-inverse-pairs-array/solutions/1283845/)

---

```
# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def k_inverse_pairs(n, k)
  dp = (n + 1).times.map{[1] * (k+1)}
  sp = (n + 1).times.map{[1] * (k+1)}
  
  mod = 10**9 + 7

  (1...n+1).each do |i|
    (1...k+1).each do |j|
      dp[i][j] = j < i ? sp[i-1][j] : (sp[i-1][j] - sp[i-1][j-i]) % mod
      sp[i][j] = (sp[i][j-1] + dp[i][j]) % mod
    end
  end

  dp[-1][-1]
end
```