# Easy, readable Swift.

**Author:** hyperfine
**Votes:** 0
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/4668105/](https://leetcode.com/problems/task-scheduler-ii/solutions/4668105/)

---

# Approach
Lookup last day task was done. Wait more days if needed.

# Complexity
- Time complexity: O(n) in number of tasks

- Space complexity: O(n)

# Code
```
class Solution {
    func taskSchedulerII(_ tasks: [Int], _ space: Int) -> Int {
        var dayMap = [Int:Int]()
        var day = 0
        let diff = space + 1
        for t in tasks {
            day += 1
            if let prevDay = dayMap[t], day < prevDay + diff  {
                day = prevDay + diff
            } 
            dayMap[t] = day
        }
        return day
    }
}
```