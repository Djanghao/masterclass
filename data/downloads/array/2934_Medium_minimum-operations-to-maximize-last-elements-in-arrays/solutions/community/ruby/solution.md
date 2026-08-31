# Ruby O(N)

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4387952/](https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4387952/)

---

```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def min_operations(nums1, nums2)
  dp1, dp2 = 0, 0 # minOperations with nums1.last and nums2.last swapped or not
  for num1, num2 in nums1.zip(nums2)
    return -1 if [num1, num2].max > [nums1.last, nums2.last].max
    return -1 if [num1, num2].min > [nums1.last, nums2.last].min
    dp1 += 1 if num1 > nums1.last || num2 > nums2.last
    dp2 += 1 if num1 > nums2.last || num2 > nums1.last
  end
  [dp1, dp2].min
end
```