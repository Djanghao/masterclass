# Ruby recursive solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/additive-number/solutions/5138774/](https://leetcode.com/problems/additive-number/solutions/5138774/)

---


# Code
```
# @param {String} num
# @return {Boolean}
def is_additive_number(num, i = 0, prev = [])
  n = num.size
  return prev.size > 2 if i == n
  ((i + 1)..n).each do |j|
    nxt = num[i...j].to_i
    if prev.size < 2 || nxt == prev[-1] + prev[-2]
      prev << nxt
      return true if is_additive_number(num, j, prev)
      prev.pop
    end
    return false if nxt == 0
  end
  return false
end
```