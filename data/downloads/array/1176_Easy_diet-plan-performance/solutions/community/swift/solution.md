# could solve any screen size problem using this formular

**Author:** matchacafe
**Votes:** 0
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/5570836/](https://leetcode.com/problems/diet-plan-performance/solutions/5570836/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
define data for each requirement;here we have dietScoreSum but other issue could be greedy data like maxSum.

while interating array
1. update data at current screen size
2. once reached to the screen size, update data

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
    func dietPlanPerformance(_ calories: [Int], _ k: Int, _ lower: Int, _ upper: Int) -> Int {
        
        let n = calories.count
        
        var currentScreenSize = 1

        // data
        var previousScreenFirstValue = 0
        var currentScreenT = 0
        var dietScoreSum = 0

        for i in 0..<n {
            // update data at current screen size
            currentScreenT += calories[i] - previousScreenFirstValue
            
            // once reached to the screen size, update data
            if currentScreenSize == k {
                let dietScore = currentScreenT < lower ? -1 : ( currentScreenT > upper ? 1 : 0) 
                dietScoreSum += dietScore 
                previousScreenFirstValue = calories[i-k+1] // first element of the previous screen
            } else {
                currentScreenSize += 1
            }
        }
        return dietScoreSum
    }
}
```