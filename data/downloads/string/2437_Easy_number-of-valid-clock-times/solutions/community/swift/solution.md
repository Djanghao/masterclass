# Beats 166.67% of users with Swift

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/5165346/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/5165346/)

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
    func countTime(_ time: String) -> Int {
        var hour = 1
        var minute = 1
        let arr = Array(time)

        switch (arr[0], arr[1]){
            case ("?" , "?") : hour = 24
        case ("?" , "0"..<"4"): hour = 3
        case ("?" , "4"...): hour = 2
        case ("0"..."1", "?"): hour = 10
        case ("2", "?"): hour = 4
        default: hour = 1
        }

        switch (arr[3], arr[4]){
            case ("?", "?") : minute = 60
            case ("?", _) : minute = 6
            case (_, "?") : minute = 10
        default: minute = 1
        }
        
        return hour * minute    
    }
}
```