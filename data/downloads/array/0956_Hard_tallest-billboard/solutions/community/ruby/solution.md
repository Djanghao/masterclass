# Ruby solution

**Author:** ozovalihasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/tallest-billboard/solutions/3676437/](https://leetcode.com/problems/tallest-billboard/solutions/3676437/)

---

Thanks to [yidong_w](https://leetcode.com/yidong_w) for [the solution](https://leetcode.com/problems/tallest-billboard/discuss/219700/Python-DP-clean-solution(1D)).

# Code
```ruby []
# @param {Integer[]} rods
# @return {Integer}
def tallest_billboard(rods)
  max_sum = rods.sum / 2
  dp = {0 => 0}
  dp.default = 0
  
  rods.each do |rod|
    cur = {}
    cur.default = 0

    dp.keys.each do |key|
      cur[key + rod] = [dp[key] + rod, cur[key + rod]].max unless key + rod > max_sum
      cur[key] = [dp[key], cur[key]].max
      cur[key - rod] = [dp[key], cur[key - rod]].max unless key - rod < -max_sum
    end

    dp = cur
  end
  
  dp[0]
end
```