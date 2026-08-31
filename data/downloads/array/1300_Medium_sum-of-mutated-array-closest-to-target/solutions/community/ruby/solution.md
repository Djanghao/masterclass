# Ruby with binary search

**Author:** ChengSeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/2903564/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/2903564/)

---

```ruby
def find_best_value(arr, target)
  right = arr.max
  left = (1..right).bsearch { |mid| val_sum(arr, mid) >= target } || right

  left_val_sum_diff = (val_sum(arr, left) - target).abs
  # left - 1 might have a difference smaller than left
  cand_val_sum_diff = (val_sum(arr, left - 1) - target).abs
   
  # if so, return left - 1 instead
  cand_val_sum_diff <= left_val_sum_diff ? left - 1 : left
end

def val_sum(arr, val)
  arr.map { |num| num > val ? val : num }.sum
end
```