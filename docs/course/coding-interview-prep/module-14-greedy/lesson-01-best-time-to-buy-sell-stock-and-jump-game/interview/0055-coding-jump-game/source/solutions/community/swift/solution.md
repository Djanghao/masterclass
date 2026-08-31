# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 24
**Link:** [https://leetcode.com/problems/jump-game/solutions/1912523/](https://leetcode.com/problems/jump-game/solutions/1912523/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of the nums.
    //   - space: O(1), only constant space is used.

    func canJump(_ nums: [Int]) -> Bool {
        var reach = 0
        var i = 0

        while i <= reach {
            reach = max(reach, i + nums[i])
            i += 1
            if reach >= nums.count - 1 { return true }
        }

        return false
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.