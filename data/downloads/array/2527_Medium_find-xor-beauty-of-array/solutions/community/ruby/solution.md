# Ruby Solution

**Author:** yalanin
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3121905/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3121905/)

---

```
# @param {Integer[]} nums
# @return {Integer}
def xor_beauty(nums)
    result = 0
    nums.each { |n| result = result ^ n }
    result
end
```