# Ruby one-liner, beats 100%/100%

**Author:** DNNX
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/3710268/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/3710268/)

---

```
# @param {Integer[]} nums
# @param {Integer} threshold
# @return {Integer}
def longest_alternating_subarray(nums, threshold)
  nums.map { _1 > threshold ? ?? : _1[0] }.join.scan(/(?:01)*0?/).map(&:size).max
end
```