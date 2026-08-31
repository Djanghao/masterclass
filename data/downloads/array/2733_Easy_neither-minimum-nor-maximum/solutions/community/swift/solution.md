# Swift O(n) Solution

**Author:** farial_mahmod
**Votes:** 1
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/4052019/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/4052019/)

---

# Intuition
To return a number that is in between the largest and the smallest, else to return -1 .


# Complexity
- Time complexity:
$$O(n)$$

# Code
```
class Solution {
    func findNonMinOrMax(_ nums: [Int]) -> Int {
        for i in nums {
            if i < nums.max()! && i > nums.min()! {
                return i
            }
        }
        return -1
    }
}
```