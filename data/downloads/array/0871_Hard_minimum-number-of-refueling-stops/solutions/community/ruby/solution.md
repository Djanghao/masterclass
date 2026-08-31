# Ruby 100, 100

**Author:** AgentIvan
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2455897/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2455897/)

---

Ruby:
```ruby
# Runtime: 528 ms, faster than 100.00% of Ruby online submissions for Minimum Number of Refueling Stops.
# Memory Usage: 211.2 MB, less than 100.00% of Ruby online submissions for Minimum Number of Refueling Stops.
def min_refuel_stops(target, start_fuel, stations)
  dp = [start_fuel] + [0] * stations.size
  stations.each.with_index { |(location, capacity), i|
    i.downto(0) { |t| dp[t+1] = [dp[t+1], dp[t] + capacity].max if dp[t] >= location }
  }
  dp.each.with_index { |d, i| return i if d >= target }
  -1
end
```