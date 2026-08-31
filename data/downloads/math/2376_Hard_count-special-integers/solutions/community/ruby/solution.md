# Ruby O(logn) - 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/2422724/](https://leetcode.com/problems/count-special-integers/solutions/2422724/)

---

```
# @param {Integer} n
# @return {Integer}
def count_special_numbers(n)
  result = 0

  1.upto(9) do |i|
    if n >= 10 ** i
      count = 9
      0.upto(i - 2) do |j|
        count *= (9 - j)
      end

      result += count
    else
      return result + count_sn(n, i)
    end
  end

  result + count_sn(n, 9)
end

def count_sn(n, i)
  digits = n.digits.reverse
  result = 0
  0.upto(i - 1) do |j|
    digit = digits[j]
    ds = digits[0, j]
    if ds && ds.size != ds.uniq.size
      next
    end
    
    if j < i - 1
      if j == 0
        count = digit - 1
      else
        count = ((0..(digit - 1)).to_a - digits[0, j]).size
      end
      0.upto(i - j - 2) do |k|
        count *= 9 - j - k
      end
    else
      if i == 1
        count = ((1..digit).to_a - digits[0, i - 1]).size
      else
        count = ((0..digit).to_a - digits[0, i - 1]).size
      end
    end
    result += count
  end
  
  result
end