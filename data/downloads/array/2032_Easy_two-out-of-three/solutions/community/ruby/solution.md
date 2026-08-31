# one line ruby

**Author:** lixinebo
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/1513443/](https://leetcode.com/problems/two-out-of-three/solutions/1513443/)

---

find intersection of arrays and make them unique
```
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @param {Integer[]} nums3
# @return {Integer[]}
def two_out_of_three(nums1, nums2, nums3)
    return ((nums1&nums2) | (nums1&nums3) |(nums2&nums3)).uniq
end
```