# Ruby O(1)

**Author:** phahX0ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-bitset/solutions/2834565/](https://leetcode.com/problems/design-bitset/solutions/2834565/)

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
class Bitset

=begin
    :type size: Integer
=end
    def initialize(size)
      @bits=Array.new(size, 0)
      @sum=0
      @to_flip=false
      @string='0'*size
      @flippedString='1'*size        
    end


=begin
    :type idx: Integer
    :rtype: Void
=end
    def fix(idx)
        if @to_flip
            do_unfix(idx)
        else
            do_fix(idx)
        end        
    end

    def do_fix(idx)
      if @bits[idx] == 0
        @bits[idx]=1
        @sum += 1
        @string[idx]='1'
        @flippedString[idx]='0'
      end
        
    end

=begin
    :type idx: Integer
    :rtype: Void
=end
    def unfix(idx)
        if @to_flip 
            do_fix(idx)
        else
            do_unfix(idx)
        end
    end

    def do_unfix(idx)
        if @bits[idx] == 1
            @bits[idx]=0
            @sum -= 1
            @string[idx]='0'
            @flippedString[idx]='1'
        end
    end

=begin
    :rtype: Void
=end
    def flip()
        @to_flip = ! @to_flip
    end

=begin
    :rtype: Boolean
=end
    def all()
        if @to_flip
            return @sum == 0
        else
            return @sum==@bits.size
        end
    end


=begin
    :rtype: Boolean
=end
    def one()
        if @to_flip
            return @sum < @bits.size
        else
            return @sum > 0
        end
    end


=begin
    :rtype: Integer
=end
    def count()
        if @to_flip
            return @bits.size - @sum
        else
            @sum
        end
        
    end


=begin
    :rtype: String
=end
    def to_string()
        if  @to_flip
          return @flippedString
        end

        return @string
    end


end

# Your Bitset object will be instantiated and called as such:
# obj = Bitset.new(size)
# obj.fix(idx)
# obj.unfix(idx)
# obj.flip()
# param_4 = obj.all()
# param_5 = obj.one()
# param_6 = obj.count()
# param_7 = obj.to_string()
```