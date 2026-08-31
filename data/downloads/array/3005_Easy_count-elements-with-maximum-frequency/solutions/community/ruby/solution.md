# Ruby one-liner

**Author:** DNNX
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4604467/](https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4604467/)

---

```
# @param {Integer[]} nums
# @return {Integer}
def max_frequency_elements(nums)
  nums.tally.values.sort.chunk(&:itself).to_a.last.last.sum
end
```