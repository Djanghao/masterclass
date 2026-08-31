# My one line Ruby solution

**Author:** IvanReyesO7
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-array-by-parity/solutions/1999974/](https://leetcode.com/problems/sort-array-by-parity/solutions/1999974/)

---

I'm very new to Ruby, any kind of feedback is more than welcome.
```
def sort_array_by_parity(nums)
  nums.select{|n| n.even?} + nums.select{|n| n.odd?}
end
```