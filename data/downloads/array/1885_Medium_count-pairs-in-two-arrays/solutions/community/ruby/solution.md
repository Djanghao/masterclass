# Ruby, Two Pointer, Sort (Editorial Approach #2)

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5165896/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5165896/)

---

# Code
```
def count_pairs(nums1, nums2)
  difference = nums1.zip(nums2).map { |a, b| a - b }
  difference.sort!

  result = 0
  left = 0
  right = difference.length - 1
  while left < right
    if difference[left] + difference[right] > 0
      result += right - left
      right -= 1
    else
      left += 1
    end
  end
  result
end
```