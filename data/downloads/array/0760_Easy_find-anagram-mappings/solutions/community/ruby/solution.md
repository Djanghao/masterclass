# Two Line Ruby Solution

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/5834196/](https://leetcode.com/problems/find-anagram-mappings/solutions/5834196/)

---


# Code
```ruby []
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[]}
def anagram_mappings(nums1, nums2, ans = [])
    nums1.each_with_index { |n,i| ans << nums2.index(n) }
    return ans
end
```