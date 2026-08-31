# Ruby 100% Bottom Up DP | Short | Tabulation

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/4934925/](https://leetcode.com/problems/burst-balloons/solutions/4934925/)

---

RUBY | 100% | FAST | BOTTOM-UP DP | TABULATION | SHORT
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def max_coins(nums)
  nums = [1] + nums + [1]
  n = nums.length
  dp = Array.new(n) { Array.new(n, 0) }

  (2...n).each do |r|
    (r - 2).downto(0) do |l|
      temp = nums[l] * nums[r]
      dp[l][r] = (l + 1...r).map { |m| temp * nums[m] + dp[l][m] + dp[m][r] }.max
    end
  end

  dp[0][n - 1]
end

```