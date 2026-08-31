# Ruby T: O(n) S: O(1) 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/2645213/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/2645213/)

---

```
# @param {Integer[]} nums
# @return {Integer}
def minimum_deletions(nums)
  n = nums.size
  return 1 if n == 1

  min = max = nums[0]
  min_i = max_i = 0

  1.upto(n - 1) do |i|
    num = nums[i]

    if num > max
      max = num
      max_i = i
    elsif num < min
      min = num
      min_i = i
    end
  end

  i1, i2 = [min_i, max_i].sort
  [i2 + 1, n - i1, i1 + 1 + n - i2].min
end