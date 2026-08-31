# Ruby || DP || Fastest ATM

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4516213/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4516213/)

---

# Code
```ruby
class Numeric
    def max(v) = (self < v ? v : self)
end

def job_scheduling(start_time, end_time, profit)
    se    = end_time.sort
    end_time.each_index.to_a.sort_by! {|i| 
        end_time[i] 
    }.each_with_index.each_with_object(Array.new(end_time.size.succ, 0)) {|(idx, i), dp|
        dp[i+1] = dp[i].max(profit[idx] + dp[se.bsearch_index {|w| w > start_time[idx]} || -1])
    }.last
end

```