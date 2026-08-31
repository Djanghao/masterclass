# Swift | 80% 🚀

**Author:** photocopy
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/5794672/](https://leetcode.com/problems/linked-list-components/solutions/5794672/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
count consequetive numbers if is belong to subset

# Approach
<!-- Describe your approach to solving the problem. -->
Loop and check is each node val belong to subset if yes then also check if it is part of sequence of new.
count such groups and return it

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: $$O(1)$$ (+ subset size storage if that counts)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Code
```swift []
class Solution {
    func numComponents(_ head: ListNode?, _ nums: [Int]) -> Int {
        var runner = head
        var numbers = Set(nums)
        var groups = 0
        var isNew = true

        while runner != nil {
            if numbers.contains(runner!.val) {
                if isNew {
                    groups += 1
                    isNew = false
                }
            } else {
                isNew = true
            }

            runner = runner?.next
        }

        return groups
    }
}
```