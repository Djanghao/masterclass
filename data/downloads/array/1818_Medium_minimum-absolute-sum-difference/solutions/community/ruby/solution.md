# Ruby - Use binary search to find closest number in nums2 for each nums1[i]

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1141478/](https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1141478/)

---

```ruby
def min_absolute_sum_diff(nums1, nums2)
  n = nums1.size
  diff = nums1.zip(nums2).map { |(a, b)| (a - b).abs }
  res = sum = diff.sum
  return 0 if res == 0
  nums1.sort!
  for i in 0...nums1.size
    j = nums1.bsearch_index { |x| x >= nums2[i] } || n
    res = [res, sum + (nums2[i] - nums1[j]).abs - diff[i]].min if j < n
    res = [res, sum + (nums2[i] - nums1[j - 1]).abs - diff[i]].min if j > 0
  end
  res % 1000000007
end
```

Time complexity: `O(N * log N)`