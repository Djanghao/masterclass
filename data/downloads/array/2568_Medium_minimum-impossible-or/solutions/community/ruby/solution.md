# 5 Lines in Ruby

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/3901203/](https://leetcode.com/problems/minimum-impossible-or/solutions/3901203/)

---

```ruby
# @param {Integer[]} nums
# @return {Integer}
def min_impossible_or(nums)
  uniq_nums, res = nums.to_set, 1
  while uniq_nums.include?(res)
    res *= 2
  end
  res
end
```