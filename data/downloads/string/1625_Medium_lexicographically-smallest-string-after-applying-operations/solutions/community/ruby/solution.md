# [Ruby] O(n^2)

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/900320/](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/900320/)

---

```
# @param {String} s
# @param {Integer} a
# @param {Integer} b
# @return {String}
def find_lex_smallest_string(s, a, b)
  digits = s.chars.map(&:to_i)
  digits_count = digits.count
  
  @a = 10.gcd(a)
  @b = digits_count.gcd(b)

  min_digits = digits
  
  (0...digits_count).step(@b) do |i|
    shifted_digits = digits[i..-1] + digits[0...i]
    
    even_shift = @b % 2 != 0 ? minimizing_shift(shifted_digits[0]) : 0
    odd_shift = minimizing_shift(shifted_digits[1])

    digits_count.times.each do |j|
      shifted_digits[j] += j % 2 != 0 ? odd_shift : even_shift
      shifted_digits[j] %= 10
    end

    min_digits = [min_digits, shifted_digits].min
  end
  
  min_digits.join
end

def minimizing_shift(digit)
  min_digit, shift = digit, 0
  
  (0...10).step(@a) do |i|
    shifted_digit = (digit + i) % 10
    
    if shifted_digit < min_digit
      min_digit, shift = shifted_digit, i
    end
  end
  
  shift
end

```