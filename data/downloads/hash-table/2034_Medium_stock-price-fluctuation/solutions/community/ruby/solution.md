# Ruby double heap and hashmap solution.

**Author:** davich
**Votes:** 0
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/4751298/](https://leetcode.com/problems/stock-price-fluctuation/solutions/4751298/)

---

# Intuition
Inspired by one of the other solutions here

# Approach
A min heap and a max heap to keep track of the min and max (constant time lookup for top, O(log n) for insertion). A HashMap to ensure that we're pulling one of the current values for a timestamp. And a @latest variable to keep track of the price at the latest timestamp.

# Complexity
- Time complexity:
$$O(1)$$ reads
$$O(log(n))$$ insertions

- Space complexity:
$$O(n)$$

# Code
```
require 'algorithms'
class StockPrice
    def initialize()
        @max_heap = Containers::MaxHeap.new
        @min_heap = Containers::MinHeap.new
        @lookup = {}
        @latest = nil
    end

=begin
    :type timestamp: Integer
    :type price: Integer
    :rtype: Void
=end
    def update(timestamp, price)
        @max_heap.push([price, timestamp])
        @min_heap.push([price, timestamp])
        @lookup[timestamp] = price
        if @latest.nil? || timestamp >= @latest[0]
            @latest = [timestamp, price]
        end
    end


=begin
    :rtype: Integer
=end
    def current()
        @latest ? @latest[1] : nil
    end


=begin
    :rtype: Integer
=end
    def maximum()
        while !@max_heap.empty?
            price, timestamp = @max_heap.max
            if @lookup[timestamp] != price
                @max_heap.pop
            else
                return price
            end
        end
    end


=begin
    :rtype: Integer
=end
    def minimum()
        while !@min_heap.empty?
            price, timestamp = @min_heap.min
            if @lookup[timestamp] != price
                @min_heap.pop
            else
                return price
            end
        end
    end
end

# Your StockPrice object will be instantiated and called as such:
# obj = StockPrice.new()
# obj.update(timestamp, price)
# param_2 = obj.current()
# param_3 = obj.maximum()
# param_4 = obj.minimum()
```