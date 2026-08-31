# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 13
**Link:** [https://leetcode.com/problems/insert-interval/solutions/1912542/](https://leetcode.com/problems/insert-interval/solutions/1912542/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of intervals.
    //   - space: O(n), where n is the number of intervals.

    func insert(_ intervals: [[Int]], _ newInterval: [Int]) -> [[Int]] {
        var ans = [[Int]]()
        var i = 0

        while i < intervals.count, intervals[i][1] < newInterval[0] {
            ans.append(intervals[i])
            i += 1
        }

        var newInterval = newInterval
        while i < intervals.count, intervals[i][0] <= newInterval[1] {
            newInterval[0] = min(intervals[i][0], newInterval[0])
            newInterval[1] = max(intervals[i][1], newInterval[1])
            i += 1
        }

        ans.append(newInterval)

        while i < intervals.count {
            ans.append(intervals[i])
            i += 1
        }

        return ans
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.