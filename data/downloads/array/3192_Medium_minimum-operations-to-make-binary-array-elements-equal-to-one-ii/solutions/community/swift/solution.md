# Runtime 291ms solution

**Author:** ChouChien
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5365745/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5365745/)

---

Sorry for my poor English.

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Msut flip from index 0 to nums.count-1, Because front index couldn't be changed by behind index. We can record flip state for behind index.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![\u622A\u5716 2024-06-25 \u4E0B\u53482.46.12.png](./images/0.png)


# Code
```
class Solution {
    func minOperations(_ nums: [Int]) -> Int {
        // let numsCount = nums.count
        var ret: Int = 0
        var isFlipped: Bool = false
        for i in 0 ..< nums.count {
            if (nums[i] == 0 && !isFlipped) || (nums[i] == 1 && isFlipped) {
                isFlipped = !isFlipped
                ret += 1
            }
        }
        return ret
    }
}
```