# Prefix and Postfix Sum. O(n) O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/4392486/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/4392486/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    # Create Prefix Sum Array
    prefix = [0]
    lowest_val = prices[0]
    i = 1
    while i < prices.size
        if prices[i] < lowest_val
            prefix << 0
            lowest_val = prices[i]
        elsif prices[i] == lowest_val
            prefix << 0
        else
            prefix << prices[i] - lowest_val
        end
        i += 1
    end

    # Create Postfix Sum Array
    post_fix = [0]
    highest_val = prices[-1]
    max_profit = 0
    i = prices.size - 2
    while i > -1
        if highest_val == prices[i]
            post_fix.unshift(max_profit)
        elsif highest_val < prices[i]
            post_fix.unshift(max_profit)
            highest_val = prices[i]
        else
            if max_profit < highest_val-prices[i] 
                max_profit = highest_val-prices[i] 
            end
            post_fix.unshift(max_profit)
        end

        i -= 1
    end

    # Collect answer using both prefix and postfix sum array.
    max_profit = 0
    prefix.each_with_index do |p, i|
        # Get max profit up to current day from prefix.
        val = p 
        # Get max profit possible after current day from postfix.
        post = post_fix[i + 1]
        # Total both values.
        val = p + post.to_i
        if max_profit < val
            max_profit = val
        end
    end
    
    max_profit
end
```