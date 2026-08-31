# Ruby one-liner

**Author:** DNNX
**Votes:** 1
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3065720/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3065720/)

---

```
# @param {Integer[]} nums
# @return {Integer}
def difference_of_sum(nums)
  nums.sum - nums.flat_map(&:digits).sum
end
```