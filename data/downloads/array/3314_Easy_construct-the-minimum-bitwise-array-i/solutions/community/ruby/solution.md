# Ruby one-liner, beats 100%/100%

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5912370/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5912370/)

---

```ruby []
# @param {Integer[]} nums
# @return {Integer[]}
def min_bitwise_array(nums)
  nums.map { |n| n == 2 ? -1 : n - (((n ^ (n + 1)) + 1) / 4) }  
end
```