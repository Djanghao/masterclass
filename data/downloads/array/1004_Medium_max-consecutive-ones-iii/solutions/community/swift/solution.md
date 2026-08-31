# [Swift] - Sliding Window.

**Author:** slowsteady
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/582112/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/582112/)

---

To solve this problem the Sliding Window approach can be used.
```
func longestOnes(_ A: [Int], _ K: Int) -> Int {
    var windowStart = 0
    var maxLength = 0
    var maxOnesCount = 0
    
    for windowEnd in 0 ..< A.count {
        if A[windowEnd] == 1 { maxOnesCount += 1 }
        
        if (windowEnd - windowStart + 1 - maxOnesCount) > K {
            if A[windowStart] == 1 { maxOnesCount -= 1 }
            windowStart += 1
        }
        
        maxLength = max(maxLength, windowEnd - windowStart + 1)
    }
    
    return maxLength
}

```
Time Complexity: O(n).
Space Complexity: O(1).