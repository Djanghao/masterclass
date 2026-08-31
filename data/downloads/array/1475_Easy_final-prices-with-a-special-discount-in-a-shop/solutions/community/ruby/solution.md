# Stack approach Beats 100% in Ruby

**Author:** tmpasipanodya
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/4796897/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/4796897/)

---

# Intuition
The naive solution is to iterate through the list and for each price, search ahead to find the next smallest calc. This solution is O(n**2) unfortunately. My intuition was to iterate through the list in reverse order keeping track of the "next smallest price" whigh would reduce time complexity to O(n).

# Approach

Use an increasing monotonic stack to keep track of the "next smallest prices" whilst iterating through the list in reverse order.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n) in the worst case but the average case is very good.

# Code
```
# @param {Integer[]} prices
# @return {Integer[]}
def final_prices(prices)
    result = Array.new(prices.size)
    stack = []
    i = prices.size - 1

    while i >= 0
        price = prices[i]

        if stack.empty?
            result[i] = price
            stack << price

        elsif stack.last <= price
            result[i] = price - stack.last
            stack << price

        else
            while stack.last && stack.last > price
                stack.pop
            end

            if stack.last
                result[i] = price - stack.last
            else
                result[i] = price
            end

            stack << price
        end

        i -= 1
    end

    result
end
```