# Moduler Inversion Solution

**Author:** amkumar0301
**Votes:** 0
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/5256541/](https://leetcode.com/problems/fancy-sequence/solutions/5256541/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
MODULER plays a very important role here, 
the main part to look here is the moduler multiplicative inverse of a number. It is the number multipling with which it will satisfy the following equation
```
ax = 1(mod m)
```

One more theorem to look here is Fermat's Little theorem which states that,
if m is prime, the inverse of a is a^(m-2) % m. Which is what we are doing here.

- Start @adder at 0 and @multiplier at 1
- Increase @adder whenever using add_all
- Multiply both @adder and @multiplier when you call mult_all (use mod to keep the numbers from getting too large)
When appending, use inverse operations so that multiplying the number by @multiplier and adding @adding will result in the original number
- Find a number at the index, then multiply, add, and mod


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class Fancy
  
    MODULER  = 10**9 + 7

    def initialize()
        @sequence = []
        @adder = 0
        @multiplier = 1
    end

=begin
    :type val: Integer
    :rtype: Void
=end
    def append(val)
        @sequence << (val - @adder) * @multiplier.pow(MODULER - 2, MODULER)
    end
    
    # def sequence
    #   @sequence
    # end
    
    # def sequence_adder
    #   @sequence_adder
    # end
    
    # def sequence_multiplier
    #   @sequence_multiplier
    # end


=begin
    :type inc: Integer
    :rtype: Void
=end
    def add_all(inc)
        @adder += inc
        # # req_length = @sequence.length - @sequence_adder.length
        # # @sequence_adder << Array.new(req_length, 0)
        # # @sequence_adder.flatten!
        # # @sequence_adder = @sequence_adder.map{ |x| x + inc}
        # @sequence = @sequence.map{ |x| }
    end


=begin
    :type m: Integer
    :rtype: Void
=end
    def mult_all(m)
        @multiplier = (@multiplier * m) % MODULER
        @adder = (@adder * m) % MODULER
        # req_length = @sequence.length - @sequence_multiplier.length
        # @sequence_multiplier << Array.new(req_length, 1)
        # @sequence_multiplier = @sequence_multiplier.flatten.map{ |x| x * m}
    end

    # def module(n)
    #     n %= 10**9 +7
    # end


=begin
    :type idx: Integer
    :rtype: Integer
=end
    def get_index(idx)
        return -1 if idx > @sequence.length - 1
        (@sequence[idx] * @multiplier + @adder) % MODULER
        # (@sequence[idx] + (@sequence_adder[idx] || 0)) * (@sequence_multiplier[idx] || 1)
    end


end

# Your Fancy object will be instantiated and called as such:
# obj = Fancy.new()
# obj.append(val)
# obj.add_all(inc)
# obj.mult_all(m)
# param_4 = obj.get_index(idx)
```