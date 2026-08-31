# Ruby Knapsack

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/5990630/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/5990630/)

---

# Code
```ruby []
# @param {Integer} target
# @param {Integer[][]} types
# @return {Integer}
def ways_to_reach_target(target, types)
    dp = Array.new(target + 1) { 0 }
    dp[0] = 1
    max = 0
    types.each do |count, val|
        (target).downto(0) do |t|
            1.upto(count) do |c|
                break if t - c * val < 0
                dp[t] ||= 0
                dp[t] = (dp[t - c * val] + (dp[t] || 0)) % 1_000_000_007
            end
        end
    end
    (dp[target] || 0)
end
```