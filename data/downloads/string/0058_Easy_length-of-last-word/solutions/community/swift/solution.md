# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 20
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/1912548/](https://leetcode.com/problems/length-of-last-word/solutions/1912548/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of s.
    //   - space: O(1), only constant space is used.

    func lengthOfLastWord(_ s: String) -> Int {
        var ans = 0

        for c in s.reversed() {
            if c != " " {
                ans += 1
            } else if ans > 0 {
                return ans
            }
        }

        return ans
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.