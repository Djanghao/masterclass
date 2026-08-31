# ruby dp

**Author:** gen1321
**Votes:** 0
**Link:** [https://leetcode.com/problems/toss-strange-coins/solutions/5560261/](https://leetcode.com/problems/toss-strange-coins/solutions/5560261/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Float[]} prob
# @param {Integer} target
# @return {Float}
def probability_of_heads(prob, target)
  n = prob.size
  dp = Array.new(n + 1) { Array.new(target + 1, 0.0) }
  dp[0][0] = 1.0

  (1..n).each do |i|
    (0..target).reverse_each do |k|
      dp[i][k] = dp[i - 1][k] * (1 - prob[i - 1])
      dp[i][k] += dp[i - 1][k - 1] * prob[i - 1] if k > 0
    end
  end

  dp[n][target]
end

#[0.5, 0.5] half of coins up half down


```