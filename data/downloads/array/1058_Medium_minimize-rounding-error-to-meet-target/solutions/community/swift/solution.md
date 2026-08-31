# Swift - with explanations of top solutions

**Author:** JRK_GNT
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/3826070/](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/3826070/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I break this problem down in two three parts:

 1. Determine possibility of a solution -> If target falls between these two values **(minSum, maxSum)** the solution is possible **where**
 `minSum = sum(floor(p) for p in prices)`

 `maxSum = sum(ceil(p) for p in prices)`
 
 
 2. Determine operations to reach target : Each ceil operation instead of floow will add 1, so doing **(target - minSum)** ceil operations will help us reach $$target$$
 If K = target - minSum i.e K number of ceiling operations on the floored_prices_sorted will give us target;
 
 3. Minimize Error:
 need to pick the ones that will give us the lowest error i.e if u sort by floored_error and pick larger floored error first; we are essentially adding error with lower ceil_errors

# Approach
<!-- Describe your approach to solving the problem. -->
https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/382275/greedy-python-with-different-explanation/ 


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minimizeError(_ prices: [String], _ target: Int) -> String {
        // gather minSum, maxSum and floor_errors
        let pricesAsFloats = prices.map { s in
            (s as? NSString ?? "0").floatValue
        }
        var minSum: Float = 0
        var maxSum: Float = 0
        var floored_errors: [Float] = []
        for p in pricesAsFloats {
            let floored = floor(p)
            let ceiled = ceil(p)
            minSum += floored
            maxSum += ceiled
            floored_errors.append(p - floored)
        }
        
        if Float(target) < minSum || Float(target)  > maxSum {
            return "-1"
        }
        
        // The number of prices that need to be rounded up (rest are rounded down)
        let ceilCount = target - Int(minSum)
        
        // Floor errors in descending are enough to give us what we need
        let floored_errors_sorted = floored_errors.sorted(by: >)
        
        // to calculate minimum error, gather top K from floored_errors_sorted and convert them to ceil_error i.e 1 - floor_error
        var minErr: Float = 0
        
        for (i, floored_error) in floored_errors_sorted.enumerated() {
            if i < ceilCount {
                let ceilErr = 1 - floored_error
                minErr += ceilErr
            } else {
                minErr += floored_error
            }
        }
        
        return String(format: "%.3f", minErr)
    }
}
```