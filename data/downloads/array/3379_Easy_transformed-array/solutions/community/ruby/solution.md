# Ruby one-liner

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/transformed-array/solutions/6133372/](https://leetcode.com/problems/transformed-array/solutions/6133372/)

---

```ruby []
# @param {Integer[]} nums
# @return {Integer[]}
def construct_transformed_array(nums)
  Array.new(nums.size) { |i| nums[(i + nums[i]) % nums.size] }
end
```