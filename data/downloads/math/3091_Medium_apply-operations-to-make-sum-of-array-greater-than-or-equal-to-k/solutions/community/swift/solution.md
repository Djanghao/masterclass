# 3ms Beats 100%

**Author:** chenchewei
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/5626366/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/5626366/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minOperations(_ k: Int) -> Int {
        guard k > 1 else { return 0 }

        var operation: Int = .max

        for i in 1...(k / 2) {
            var temp = 0
            if k.isMultiple(of: i) {
                temp = k / i
            } else {
                temp = k / i + 1
            }
            operation = min(operation, (temp + i - 2))
        }
        
        return operation
    }
    
}
```