# Ruby recursive 88ms

**Author:** alanparmenter
**Votes:** 1
**Link:** [https://leetcode.com/problems/min-max-game/solutions/3950385/](https://leetcode.com/problems/min-max-game/solutions/3950385/)

---

```
# @param {Integer[]} nums
# @return {Integer}
def min_max_game(nums)
  return nums[0] if nums.size == 1
  nums = nums.each_slice(2).to_a.map.with_index{|a, i| i.even? ? a.min : a.max}
  min_max_game(nums)
end
```