# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/5308425/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/5308425/)

---


# Code
```
# @param {Integer} arrival_time
# @param {Integer} delayed_time
# @return {Integer}
def find_delayed_arrival_time(arrival_time, delayed_time)
    arrival_with_delay = arrival_time + delayed_time
    arrival_with_delay % 24

    
end
```