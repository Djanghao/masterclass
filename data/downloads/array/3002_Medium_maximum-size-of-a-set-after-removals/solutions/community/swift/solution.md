# Beginner friendly solution using Set difference

**Author:** Gman4291
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4530576/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4530576/)

---

# Approach
First get all unique elements from `nums1` then all unique elements from `nums2`.

The maximum unique elements you can get from `set1` are all the elements not present in `set2`. Also keep in mind that we cannot take more than `nums1.count / 2`.
Same operation for `set2`.

So in the end the maximum amount of elements is all the unique elements plus the remaining ones (the intersection of both sets) without going over the size of the original array.

# Complexity
- Time complexity:  O(n)
- Space complexity: O(n)

# Code
```
class Solution {
    func maximumSetSize(_ nums1: [Int], _ nums2: [Int]) -> Int {
        let set1 = Set(nums1)
        let set2 = Set(nums2)
        let diff1 = min(set1.subtracting(set2).count, nums1.count / 2)
        let diff2 = min(set2.subtracting(set1).count, nums2.count / 2)
        return min(diff1 + diff2 + set1.intersection(set2).count, nums1.count)
    }
}
```