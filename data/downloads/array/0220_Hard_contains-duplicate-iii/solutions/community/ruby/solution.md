# Ruby bucket O(n) time because we need more ruby solutions

**Author:** terrificP
**Votes:** 0
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/4179420/](https://leetcode.com/problems/contains-duplicate-iii/solutions/4179420/)

---

If you think I should have used `Array#each_with_index` instead, fair enough, but [while loops are faster](https://github.com/fastruby/fast-ruby#enumerableeach_with_index-vs-while-loop-code) unfortunately.
```ruby
def contains_nearby_almost_duplicate(nums, index_diff, value_diff)
  b = {}
  d = value_diff + 1
  i = 0
  while i < nums.length
    num = nums[i]
    k = num / d
    return true if b[k] ||
      (b[k - 1] && (b[k - 1] - num).abs <= value_diff) ||
      (b[k + 1] && (b[k + 1] - num).abs <= value_diff)
    b[k] = num
    b.delete(nums[i - index_diff] / d) if index_diff <= i
    i += 1
  end
  false
end
```