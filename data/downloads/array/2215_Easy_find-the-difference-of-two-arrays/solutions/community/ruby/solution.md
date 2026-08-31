# 🍀🦋🍀 Ruby from junior: one-liner

**Author:** tataruty
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3029175/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3029175/)

---



# Code
```
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[][]}
def find_difference(nums1, nums2)
    [(nums1 - nums2).uniq, (nums2 - nums1).uniq]
end
```