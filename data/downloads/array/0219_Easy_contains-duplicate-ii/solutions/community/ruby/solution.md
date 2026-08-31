# Ruby solution

**Author:** tapiabo
**Votes:** 4
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/1793248/](https://leetcode.com/problems/contains-duplicate-ii/solutions/1793248/)

---

```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def contains_nearby_duplicate(nums, k)
  h = Hash.new

  nums.each_with_index do |num, index|
    return true if h[num] != nil && (h[num] - index).abs <= k

    h[num] = index
  end

  false
end
```