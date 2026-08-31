# Ruby O(n)

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3840459/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3840459/)

---

```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @param {Integer} k
# @return {Integer}
def min_operations(nums1, nums2, k)
  return (nums1 == nums2 ? 0 : -1) if k == 0
  return -1 if nums1.sum != nums2.sum
  res = 0
  for idx in 0...nums1.length
    diff = nums1[idx] - nums2[idx]
    return -1 if diff % k != 0
    res += diff / k if diff > 0
  end
  res
end
```