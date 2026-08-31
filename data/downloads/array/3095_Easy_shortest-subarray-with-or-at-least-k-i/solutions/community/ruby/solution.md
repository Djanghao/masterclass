# Slow O(n^3) Ruby solution, beats 100%/100%

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4956934/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4956934/)

---

```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def minimum_subarray_length(nums, k)
  (1..nums.size).find do |l|
    (0..nums.size-l).any? do |s|
      nums[s, l].reduce(0, :|) >= k
    end
  end || -1
end
```