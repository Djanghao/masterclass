# [Ruby] Recursion

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-array/solutions/1369076/](https://leetcode.com/problems/beautiful-array/solutions/1369076/)

---

```
# @param {Integer} n
# @return {Integer[]}
def beautiful_array(n)
  @cache = {}
  solve(n)
end

def solve(n)
  return [1] if n == 1
  return @cache[n] if @cache[n]
  
  even_index = n/2
  odd_index = n - even_index
  even = solve(even_index)
  odd = solve(odd_index)
  even = even.map{|v| 2*v}
  odd = odd.map{|v| 2*v-1}
  @cache[n] = even + odd
end
```