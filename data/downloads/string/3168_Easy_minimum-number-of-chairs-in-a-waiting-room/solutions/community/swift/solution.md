# Easy approach

**Author:** user6738t
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5977624/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5977624/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```swift []
class Solution {
    func minimumChairs(_ s: String) -> Int {
        var chairs = 0
        var ECount = 0
        for char in s {
            if(char == "E") {
                ECount = ECount + 1
            }
            if(char == "L") {
                if(ECount>0) {
                    ECount = ECount-1
                }
            }
            chairs = max(ECount,chairs)
        }
        return chairs
    }
}
```