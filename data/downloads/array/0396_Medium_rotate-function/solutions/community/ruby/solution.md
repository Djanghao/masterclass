# Ruby 1-line RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotate-function/solutions/5405595/](https://leetcode.com/problems/rotate-function/solutions/5405595/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def max_rotate_function(nums, sum = nums.sum, sz = nums.size)
  nums.inject(res = nums.each_with_index.sum{ _1 * _2 }) { [(res += sz * _2 - sum), _1].max }  
end
```