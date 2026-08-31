# [Ruby] O(k)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/949012/](https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/949012/)

---

```
# @param {Integer} k
# @return {Integer}
def smallest_repunit_div_by_k(k)
  return -1 unless [1, 3, 7, 9].include?(k%10)
  
  mod = 0
  mod_set = Set.new
  
  (1..k).each do |length|
    mod = (10*mod + 1)%k

    return length if mod == 0
    return -1 if mod_set.include?(mod)

    mod_set << mod
  end
  
  -1
end
```