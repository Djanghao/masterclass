# Find Median from Data Stream - min heap + min heap

**Author:** marcodes_tech
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/4845267/](https://leetcode.com/problems/find-median-from-data-stream/solutions/4845267/)

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
class MedianFinder
    def initialize()
        @small = MaxHeap.new
        @large = MinHeap.new
    end


=begin
    :type num: Integer
    :rtype: Void
=end
    def add_num(num)
        @small << num

        if @small.size > 0 && @large.size > 0 && @small.max > @large.min
            @large << @small.pop
        end

        if @small.size > @large.size + 1
            @large << @small.pop
        end

        if @large.size > @small.size + 1
            @small << @large.pop
        end
    end


=begin
    :rtype: Float
=end
    def find_median()
        if @small.size > @large.size
            @small.max
        elsif @large.size > @small.size
            @large.min
        else
            (@small.max + @large.min) / 2.0
        end
    end
end

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder.new()
# obj.add_num(num)
# param_2 = obj.find_median()
```