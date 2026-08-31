# Easy Swift Solution with O(N LogN) time complexity

**Author:** rohity821
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-processing-time/solutions/6000612/](https://leetcode.com/problems/minimum-processing-time/solutions/6000612/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have to sort both the arrays in increasing order and match lowest from the processing time and highest from the tasks.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort both the arrays in increasing order
2. Pick the lowest from the processorTime Array and highest item from the tasks array. 
3. store the max of all the processTimeArray

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N LogN)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)

# Code
```swift []
class Solution {
    func minProcessingTime(_ processorTime: [Int], _ tasks: [Int]) -> Int {
        let processorTime = processorTime.sorted()
        let tasks = tasks.sorted()
        var ans = 0
        let tasksCount = tasks.count
        for i in 0..<processorTime.count {
            ans = max(ans, processorTime[i] + tasks[tasksCount - 4 * i - 1])
        }
        return ans
    }
}
```