# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 14
**Link:** [https://leetcode.com/problems/decode-ways/solutions/1921947/](https://leetcode.com/problems/decode-ways/solutions/1921947/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of s.
    //   - space: O(n), where n is the length of s.

    func numDecodings(_ s: String) -> Int {
        let message = Array(s).compactMap { Int(String($0)) }
        let n = message.count
        
        guard n > 0, message[0] != 0 else { return 0 }
        guard n > 1 else { return 1 }
        
        var pre1 = 1
        var pre2 = 1
        var cur = 0
        
        for i in 1..<n {
            cur = 0
            if message[i] >= 1, message[i] <= 9 { cur += pre1 }
            
            let tmp = message[i-1] * 10 + message[i]
            if tmp >= 10, tmp <= 26 { cur += pre2 }
            
            pre2 = pre1
            pre1 = cur
        }
        
        return cur
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.