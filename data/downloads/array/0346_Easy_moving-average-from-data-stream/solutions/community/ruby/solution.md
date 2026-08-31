# [Ruby] Easy and short solution

**Author:** Hoaxis
**Votes:** 1
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/1331462/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/1331462/)

---

```
class MovingAverage

=begin
    Initialize your data structure here.
    :type size: Integer
=end
    def initialize(size)
      @q = SizedQueue.new(size)
      @size = size
      @sum = 0
    end


=begin
    :type val: Integer
    :rtype: Float
=end
    def next(val)
      @sum -= @q.pop if @q.size == @size
      
      @q << val 
      @sum += val
      @sum / @q.size.to_f
    end


end

# Your MovingAverage object will be instantiated and called as such:
# obj = MovingAverage.new(size)
# param_1 = obj.next(val)
```