# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 2
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/3133663/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/3133663/)

---

```
# @param {Integer[]} arr
# @return {Boolean}
def can_make_arithmetic_progression(arr)
    arr.sort!
    diff = arr[1] - arr[0]
    arr.each_cons(2) { |a, b| return false if b - a != diff }
    
    true
end
```