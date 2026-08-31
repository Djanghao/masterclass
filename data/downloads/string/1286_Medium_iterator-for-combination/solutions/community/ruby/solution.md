# [Ruby] Bit masking

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/789433/](https://leetcode.com/problems/iterator-for-combination/solutions/789433/)

---

```
class CombinationIterator
  def initialize(characters, combination_length)
    @characters = characters
    @combination_length = combination_length
    @length = characters.length
    
    bit_masking
    
    @current_index = @bit_combinations.count - 1
  end

  def next
    combination = ""
    
    @length.times do |i|
      if @bit_combinations[@current_index][i] != "0"
        combination += @characters[i]
      end
    end
    
    @current_index -= 1
    
    combination
  end

  def has_next
    @current_index > -1
  end
  
  private
  
  def bit_masking
    @bit_combinations = []
  
    (2**@length).times do |i|
      bit_i = i.to_s(2)
      if bit_i.count('1') == @combination_length
        @bit_combinations << bit_i.rjust(@length, "0")
      end
    end
  end
end
```