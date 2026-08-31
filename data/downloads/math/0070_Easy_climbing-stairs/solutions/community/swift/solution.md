# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 24
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/1915720/](https://leetcode.com/problems/climbing-stairs/solutions/1915720/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of steps.
    //   - space: O(1), only constant space is used.

    func climbStairs(_ n: Int) -> Int {
        if n == 0 || n == 1 { return 1 }

        var first = 1
        var second = 1
        var third = 0
        
        for _ in 2...n {
            third = first + second
            first = second
            second = third
        }

        return second
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.