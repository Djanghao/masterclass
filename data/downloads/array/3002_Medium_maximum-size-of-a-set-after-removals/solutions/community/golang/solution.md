# Go (Golang) simple solution with explanation and comments

**Author:** SlayerSv
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4558136/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4558136/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to remove half of items from ```nums1``` starting with those, that are present in ```nums2```. Then add items from ```nums2``` that are not in our modified ```nums1```. Added number of items from ```nums2``` cannot exceed half of ```nums2```.
# Approach
<!-- Describe your approach to solving the problem. -->
1) Get ```set1``` and ```set2``` with unique values from ```nums1``` and ```nums2```.
2) If length of ```set1``` is more than half of ```nums1``` then delete items from ```set1``` that are also present in ```set2```.
3) If length of ```set1``` is still higher than half, then just delete random items until length of ```set1``` is half of ```nums1```.
4) Add number of items of ```set2``` that are not present in our modified ```set1```, not exceeding half of items of ```nums2```.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
func maximumSetSize(nums1 []int, nums2 []int) int {
  n := len(nums1)
  set1 := make(map[int]bool, n)
  set2 := make(map[int]bool, n)
  // setting unique values of nums1 and nums2 in set1 and set2
  for i := 0; i < n; i++ {
    set1[nums1[i]] = true
    set2[nums2[i]] = true
  }
  half := n / 2
  // deleting items from set1 that are also present in set2
  // until length of set1 does not exceed half of nums1
  for num := range set1 {
    if len(set1) <= half {break}
    if set2[num] {
      delete(set1, num)
    }
  }
  // if length of set1 still higher than half,
  // then delete random elements
  for num := range set1 {
    if len(set1) > half {
      delete(set1, num)
    } else {
      break
    }
  }
  ans := len(set1)
  count := 0
  // add items from set2 that are not present in set1
  // not exceeding half of nums2.
  for num := range set2 {
    if !set1[num] && count < half {
      ans++
      count++
    }
  }
  return ans
}
```