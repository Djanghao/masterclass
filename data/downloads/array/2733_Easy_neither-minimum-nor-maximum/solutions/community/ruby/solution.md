# Ruby one-liner

**Author:** DNNX
**Votes:** 1
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3646563/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3646563/)

---

```
# @param {Integer[]} nums
# @return {Integer}
def find_non_min_or_max(nums)
  (nums - nums.minmax)[0] || -1  
end
```