# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 13
**Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/1921900/](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/1921900/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of heights.
    //   - space: O(n), where n is the length of heights.

    func largestRectangleArea(_ heights: [Int]) -> Int {
        var stack = [Int]()
        let n = heights.count
        var ans = 0
        
        for i in 0..<n {
            while let curHeight = stack.last, heights[curHeight] >= heights[i] {
                stack.removeLast()
                let curWidth = stack.last ?? -1
                ans = max(ans, heights[curHeight] * (i - curWidth - 1))
            }
            stack.append(i)
        }
        
        while !stack.isEmpty {
            let curHeight = stack.removeLast()
            let curWidth = stack.last ?? -1
            ans = max(ans, heights[curHeight] * (n - curWidth - 1))
        }
        
        return ans
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.