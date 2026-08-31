# Ruby one-liner

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6092810/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6092810/)

---

```ruby []
# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def has_increasing_subarrays(nums, k)
  nums.chunk_while(&:<).map(&:size).push(0).each_cons(2).any? { _1 >= k && _2 >= k || _1 >= 2 * k }
end
```