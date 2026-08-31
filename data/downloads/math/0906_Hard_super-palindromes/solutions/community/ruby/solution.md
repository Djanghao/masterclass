# [Ruby] 10^5 complexity

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-palindromes/solutions/1198379/](https://leetcode.com/problems/super-palindromes/solutions/1198379/)

---

```
# @param {String} left
# @param {String} right
# @return {Integer}
def superpalindromes_in_range(left, right)
  n1 = Math.sqrt(left.to_i).floor.to_i.to_s.length
  n2 = Math.sqrt(right.to_i).ceil.to_i.to_s.length

  n1 = n1.even? ? n1/2 : n1/2 + 1
  n2 = n2.even? ? n2/2 : n2/2 + 1

  start = ('1' + '0'*(n1 - 1)).to_i
  finish = ('9'*n2).to_i + 1

  result = 0
  (start...finish).each do |i|
    x = i.to_s
    num1 = (x + x.reverse).to_i
    num2 = (x + x[0...-1].reverse).to_i
    [num1, num2].each do |num|
      cand = num*num
      if cand >= left.to_i &&
          cand <= right.to_i &&
          cand.to_s == cand.to_s.reverse
        result += 1 
      end
    end
  end
  
  result
end
```