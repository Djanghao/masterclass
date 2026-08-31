# ✅ Top-down DP + Cached Binary Search

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766427/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766427/)

---

# Approach
We first sort the events by their starting time. This helps us better organize and navigate the events. Then for each event, we identify the next one that doesn't overlap with it. This helps us to avoid conflicts between events.
Next, we then start looking at different combinations of events to attend. We consider two options: either we attend the current event and then go to the next event that doesn't clash, or we skip the current event and move on to the next one. We use a technique called dynamic programming to store the best choice we've made so far for each scenario. This way, we don't have to calculate the same thing over and over again.
After we've explored all options, we look at our stored results and pick the combination of events that gives us the maximum total value.
Essentially, we're creating a game plan for the best events to attend to get the most value, while avoiding any overlap in events.

# Time Complexity
**O(n\u22C5k\u22C5log n)**
The time complexity of the code is dominated by two factors: `sorting the events`, and the `depth-first search`.

# Space complexity
**O(n\u22C5k)**
The space complexity is dominated by the storage needed for the `dp array` and the `nextIndices array`.

# Solution
```swift
final class Solution {
    private var dp: [[Int]]
    private var nextIndices: [Int]
    
    init() {
        dp = [[Int]]()
        nextIndices = [Int]()
    }
    
    func maxValue(_ events: [[Int]], _ k: Int) -> Int {
        let sortedEvents = events.sorted(by: { $0[0] < $1[0] })
        let n = sortedEvents.count
        nextIndices = [Int](repeating: 0, count: n)

        for curIndex in 0..<n {
            nextIndices[curIndex] = bisectRight(sortedEvents, sortedEvents[curIndex][1])
        }
        dp = Array(repeating: Array(repeating: -1, count: n), count: k + 1)
        return dfs(0, k, sortedEvents)
    }
    
    private func dfs(_ curIndex: Int, _ count: Int, _ events: [[Int]]) -> Int {
        if count == 0 || curIndex == events.count { return 0 }
        if dp[count][curIndex] != -1 { return dp[count][curIndex] }
        
        let nextIndex = nextIndices[curIndex]
        dp[count][curIndex] = max(
            dfs(curIndex + 1, count, events), 
            events[curIndex][2] + dfs(nextIndex, count - 1, events)
        )
        return dp[count][curIndex]
    }
    
    private func bisectRight(_ events: [[Int]], _ target: Int) -> Int {
        var left = 0, right = events.count
        while left < right {
            let mid = (left + right) / 2
            events[mid][0] <= target ? (left = mid + 1) : (right = mid)
        }
        return left
    }
}

```