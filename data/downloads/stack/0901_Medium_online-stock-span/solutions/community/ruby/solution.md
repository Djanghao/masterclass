# Ruby solution using stacks for prices and spans

**Author:** mahi3432
**Votes:** 0
**Link:** [https://leetcode.com/problems/online-stock-span/solutions/5009731/](https://leetcode.com/problems/online-stock-span/solutions/5009731/)

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
class StockSpanner
    def initialize()
        @prices = []
        @ans = []
        @spans = []
    end


=begin
    :type price: Integer
    :rtype: Integer
=end
    def next(price)
        span = 1

        while @prices.first && @prices[-1] <= price
           @prices.pop
           span += @spans.pop
        end

        @prices << price
        @spans << span
        span
    end


end

# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner.new()
# param_1 = obj.next(price)
```