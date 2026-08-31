# Ruby

**Author:** blrB
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3015181/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3015181/)

---


# Code
```
class DataStream
=begin
  :type value: Integer
  :type k: Integer
=end
  def initialize(value, k)
    @value = value
    @k = k
    @count = 0
  end

=begin
  :type num: Integer
  :rtype: Boolean
=end
  def consec(num)
    if num == @value
      @count += 1
      @count >= @k
    else
      @count = 0
      false
    end
  end
end

# Your DataStream object will be instantiated and called as such:
# obj = DataStream.new(value, k)
# param_1 = obj.consec(num)
```