# ✅ [Solution][Swift] Greedy (beats 100%)

**Author:** adanilyak
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/2653636/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/2653636/)

---

**TC:** O(n)
**SC:** O(1)
```
class Solution {
    
    func minCost(_ colors: String, _ neededTime: [Int]) -> Int {
        
        let colors = Array(colors)
        
		// Running sum of time needed to remove all baloons
        var sum = neededTime[0]
        
		// Sum of time needed to remove baloons that we want to stay in place
        var sumOfRemaining = 0
		
		// Color of current batch of same-color-baloons
        var current = colors[0]
		// Max neededTime in the current batch 
		// (the baloon with max neededTime should stay, others should be removed)
        var currentMax = neededTime[0]
        
        for i in 1..<colors.count {
            sum += neededTime[i]
            
			// Check if current batch is ended
            if colors[i] == current {
                currentMax = max(neededTime[i], currentMax)
            } else {
                sumOfRemaining += currentMax
                current = colors[i]
                currentMax = neededTime[i]
            }
        }
        
		// Max in the last batch
        sumOfRemaining += currentMax
        
        return sum - sumOfRemaining
    }
}
```