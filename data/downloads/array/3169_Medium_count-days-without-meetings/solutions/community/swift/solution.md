# Swift

**Author:** sunitamnit
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-without-meetings/solutions/5254179/](https://leetcode.com/problems/count-days-without-meetings/solutions/5254179/)

---

# Intuition 
<!-- Describe your first thoughts on how to solve this problem. -->
merge interval
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: nlog(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func countDays(_ days: Int, _ meetings: [[Int]]) -> Int {
        var meetings = meetings.sorted{$0[0]<$1[0]}
        var d = 0
        var lastDay = 0
        var count = 0
        for meeting in meetings {
            if meeting[0] > lastDay {
                count += (meeting[0] - lastDay - 1)
                lastDay = meeting[1]
            } else {
                lastDay = max(lastDay, meeting[1])
            }
        }
        if lastDay < days {
            count += (days - lastDay)
        }

        return count
    }
}
```