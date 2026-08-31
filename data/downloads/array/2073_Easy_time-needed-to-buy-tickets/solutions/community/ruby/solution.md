# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/3444522/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/3444522/)

---

```
# @param {Integer[]} tickets
# @param {Integer} k
# @return {Integer}
def time_required_to_buy(tickets, k)
    iterations = tickets[k]
    time = 0
    
    tickets.each_with_index do |ticket, i|
        # add up time each person will take to buy their tickets (while kth person is still here)
        time += [ticket, iterations].min
        
        # kth person will leave before people behind them will buy their "last" ticket
        time -= 1 if i > k && ticket >= iterations
    end
    
    time
end
```