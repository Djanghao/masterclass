# Swift Solution

**Author:** abhishekkapoor2000
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/5795063/](https://leetcode.com/problems/minimum-time-difference/solutions/5795063/)

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
```swift []
class Solution {
     
    func findMinDifference(_ timePoints: [String]) -> Int {
        if timePoints.isEmpty {
            return 0
        }
        
        var res = Int.max
        var timeInHour = [Int]()
        
        for timePoint in timePoints {
            let splitTimeList = timePoint.split(separator: ":")
            let hh = Int(splitTimeList[0])! * 60
            let mm = Int(splitTimeList[1])!
            timeInHour.append(hh + mm)
        }
        timeInHour.sort()
                
        for i in 1..<timeInHour.count {
            res = min(res, abs(timeInHour[i] - timeInHour[i-1]))
        }
        
        // find min as clockwise and anticlockwise.
        return min(res, (24 * 60) - timeInHour.last! + timeInHour.first!)
    }
    
}
```