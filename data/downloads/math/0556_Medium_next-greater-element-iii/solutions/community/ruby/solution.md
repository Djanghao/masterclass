# [Ruby] O(n)

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/983427/](https://leetcode.com/problems/next-greater-element-iii/solutions/983427/)

---

```
# @param {Integer} n
# @return {Integer}
def next_greater_element(n)
  digits = n.to_s.chars

  i = digits.count - 1
  while i - 1 >= 0 && digits[i] <= digits[i-1]
    i -= 1
  end
  
  return -1 if i == 0
  
  j = i
  while j + 1 < digits.count && digits[j+1] > digits[i-1]
    j += 1
  end

  digits[i-1], digits[j] = digits[j], digits[i-1]
  digits[i..-1] = digits[i..-1].reverse
  
  result = digits.join.to_i
  result < 1<<31 ? result : -1
end
```