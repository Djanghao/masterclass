# Swift soltuion

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4383729/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4383729/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findIntersectionValues(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        let set1 = Set(nums1)
        let set2 = Set(nums2)
        var count1 = 0
        for int in nums1 where set2.contains(int) {
            count1 += 1
        }
        var count2 = 0
        for int in nums2 where set1.contains(int) {
            count2 += 1
        }
        return [count1, count2]
    }
}

```