# Ruby - Two Stack approach

**Author:** eggtart1210
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-stack/solutions/1761308/](https://leetcode.com/problems/max-stack/solutions/1761308/)

---

```
class MaxStack
    def initialize()
        @stack = []
        @maxStack = []
    end


=begin
    :type x: Integer
    :rtype: Void
=end
    def push(x)
        @stack << x
        
        if @maxStack.empty?
            @maxStack[0] = x
        else
            prevMax = peek_max()
            @maxStack << x if x >= peek_max()
        end
    end


=begin
    :rtype: Integer
=end
    def pop()
        @maxStack.pop if peek_max() == @stack[-1]
        return @stack.pop
    end


=begin
    :rtype: Integer
=end
    def top()
        return @stack[-1]
    end


=begin
    :rtype: Integer
=end
    def peek_max()
        return @maxStack[-1]
    end


=begin
    :rtype: Integer
=end
    def pop_max()

        maxVal = peek_max()  
        
        buffer = []
        
        while top() != maxVal
            buffer.push(pop())
        end
        
        pop()
        
        while !buffer.empty? 
            push(buffer.pop())
        end
		
        return maxVal
		
    end
end

# Your MaxStack object will be instantiated and called as such:
# obj = MaxStack.new()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.peek_max()
# param_5 = obj.pop_max()
```