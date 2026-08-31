# Ruby one-liner solution

**Author:** user0589f
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/2570608/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/2570608/)

---

```
# @param {Integer[]} nums
# @param {Integer} key
# @return {Integer}
def most_frequent(nums, key)
    nums.select.with_index{|_, i| nums[i-1] == key}.tally.sort_by{|_, v| v}.to_h.keys[-1]
end
```