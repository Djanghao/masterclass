# Simple two pointer solution

**Author:** ifelsethenthat
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/4845271/](https://leetcode.com/problems/minimum-common-value/solutions/4845271/)

---

# Approach
- Keep two pointers, and increment the one which is smaller

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
def get_common(nums1, nums2)
  i = j = 0

  while i < nums1.count && j < nums2.count
    return nums1[i] if nums1[i] == nums2[j]
      
    nums1[i] > nums2[j] ? j += 1 : i += 1
  end

  -1
end

```