# Sliding window

**Author:** caovanbi235
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/6072245/](https://leetcode.com/problems/longest-nice-subarray/solutions/6072245/)

---

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def longest_nice_subarray(nums)
  max_length = 0
  current_and = 0
  left = 0

  nums.each_with_index do |num, right|
    while current_and & num != 0
      current_and ^= nums[left]
      left += 1
    end

    current_and |= num
    max_length = [max_length, right - left + 1].max
  end

  max_length
end

```