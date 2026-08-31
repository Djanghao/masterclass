# Ruby: Create pointer, move it in a loop.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/982329/](https://leetcode.com/problems/design-an-ordered-stream/solutions/982329/)

---

##### Leetcode: 1656. Design an Ordered Stream.

Create pointer at the first element in the array, on each insertion move pointer until meet an empty cell. Push each non empty cell value to the answer array for a current insert call. If pointer points at the empty cell return array would be empty one.

Ruby code:
```Ruby
# Leetcode: 1656. Design an Ordered Stream.
# https://leetcode.com/problems/design-an-ordered-stream/
# Runtime: 188 ms, faster than 60.00% of Ruby online submissions for Design an Ordered Stream.
# Memory Usage: 211.2 MB, less than 46.67% of Ruby online submissions for Design an Ordered Stream.

class OrderedStream

=begin
    :type n: Integer
=end
    def initialize(n)
       
        @a = Array.new(n)
        @next = 0
        
        
    end


=begin
    :type id: Integer
    :type value: String
    :rtype: String[]
=end
    def insert(id, value)
        @a[id-1] = value
        x = []
        if @a[@next].nil?
            x = []
        else
            while ! @a[@next].nil?
                x.push(@a[@next])
                @next += 1
            end
        end
        return x
    end


end

# Your OrderedStream object will be instantiated and called as such:
# obj = OrderedStream.new(n)
# param_1 = obj.insert(id, value)
```