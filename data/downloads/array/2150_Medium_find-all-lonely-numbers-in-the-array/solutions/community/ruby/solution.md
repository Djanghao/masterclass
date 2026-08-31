# Simple solution

**Author:** caovanbi235
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/6076896/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/6076896/)

---

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer[]}
def find_lonely(nums)
  freq = nums.tally
  nums.select { |num| freq[num] == 1 && freq[num + 1].nil? && freq[num - 1].nil? }
end

```