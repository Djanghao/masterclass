# [Ruby] O(n)

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/global-and-local-inversions/solutions/1144355/](https://leetcode.com/problems/global-and-local-inversions/solutions/1144355/)

---

```
# @param {Integer[]} a
# @return {Boolean}
def is_ideal_permutation(a)
  global_inversion = 0
  local_inversion = 0
  n = a.count
  
  a.each_with_index do |num, i|
    if num > i
      global_inversion += num - i
    elsif num < i
      global_inversion += i - num - 1
    end
    
    if i < n - 1 && a[i] > a[i + 1]
      local_inversion += 1
    end
  end
  
  global_inversion == local_inversion
end
```