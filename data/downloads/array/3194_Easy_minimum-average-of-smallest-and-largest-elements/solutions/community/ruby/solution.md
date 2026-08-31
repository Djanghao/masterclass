# Ruby one-liner

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5393406/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5393406/)

---

```
# @param {Integer[]} nums
# @return {Float}
def minimum_average(nums)
  nums.sort.zip(nums.sort.reverse).map(&:sum).min / 2.0  
end
```