# [Ruby] O(n) time, DP Solution

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/811177/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/811177/)

---

```
def mincost_tickets(days, costs)
  is_travels = (days.last + 1).times.map{|day| days.include?(day) ? true : false}
  dp = [0]*(days.last + 1)

  (1..days.last).each do |day|
    dp[day] = if is_travels[day]
      dp[day] = [
        dp[day-1] + costs[0],
        dp[[day-7, 0].max] + costs[1],
        dp[[day-30, 0].max] + costs[2]
      ].min
    else
      dp[day-1]
    end
  end
    
  dp[days.last]
end
```