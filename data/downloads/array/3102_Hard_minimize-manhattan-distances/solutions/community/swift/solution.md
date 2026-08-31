# Swift Solution

**Author:** user1383Yl
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-manhattan-distances/solutions/5828787/](https://leetcode.com/problems/minimize-manhattan-distances/solutions/5828787/)

---

# Thoughts


We compute the maximum and second maximum, as well as the minimum and second minimum for both transformations:


This ensures that if a point contributes to either the maximum or the minimum, we can easily replace it with the second largest or second smallest value.

# Efficient Removal:

During the iteration, when a point is removed, we check if it was contributing to the current maximum or minimum.

If it was, we use the second largest (or smallest) value.
This allows us to calculate the new maximum distance in constant time for each point, reducing the overall complexity.

# Code
```swift []
class Solution {
    func minimumDistance(_ points: [[Int]]) -> Int {
        // We will store the max/min and second max/min for (x + y) and (x - y)
        var max1 = Int.min, secondMax1 = Int.min
        var min1 = Int.max, secondMin1 = Int.max
        
        var max2 = Int.min, secondMax2 = Int.min
        var min2 = Int.max, secondMin2 = Int.max
        
        // Step 1: Calculate the max and min for both (x + y) and (x - y)
        for i in 0..<points.count {
            let x = points[i][0]
            let y = points[i][1]
            
            let sum = x + y
            let diff = x - y
            
            // Update max1 and secondMax1 for (x + y)
            if sum > max1 {
                secondMax1 = max1
                max1 = sum
            } else if sum > secondMax1 {
                secondMax1 = sum
            }
            
            if sum < min1 {
                secondMin1 = min1
                min1 = sum
            } else if sum < secondMin1 {
                secondMin1 = sum
            }
            
            // Update max2 and secondMax2 for (x - y)
            if diff > max2 {
                secondMax2 = max2
                max2 = diff
            } else if diff > secondMax2 {
                secondMax2 = diff
            }
            
            if diff < min2 {
                secondMin2 = min2
                min2 = diff
            } else if diff < secondMin2 {
                secondMin2 = diff
            }
        }
        
        var minMaxDistance = Int.max
        
        // Step 2: Iterate through points and calculate the max Manhattan distance
        for i in 0..<points.count {
            let x = points[i][0]
            let y = points[i][1]
            
            let sum = x + y
            let diff = x - y
            
            // Calculate the new max and min if this point is removed
            let maxSum = (sum == max1) ? secondMax1 : max1
            let minSum = (sum == min1) ? secondMin1 : min1
            
            let maxDiff = (diff == max2) ? secondMax2 : max2
            let minDiff = (diff == min2) ? secondMin2 : min2
            
            // Calculate the maximum distance without this point
            let maxDistance = max(maxSum - minSum, maxDiff - minDiff)
            minMaxDistance = min(minMaxDistance, maxDistance)
        }
        
        return minMaxDistance
    }
}

```