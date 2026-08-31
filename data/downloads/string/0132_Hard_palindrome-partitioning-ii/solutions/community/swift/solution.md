# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 10
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/1935382/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/1935382/)

---

```
class Solution {
    func minCut(_ s: String) -> Int {
        let chars = Array(s)
        var dp0: [[Bool]] = Array(repeating: Array(repeating: false, count: s.count), count: s.count)
		
        for i in (0..<s.count).reversed() {
			for j in (i..<s.count).reversed() {
				if i == j {
					dp0[i][j] = true
				
                } else if chars[i] == chars[j] {
					dp0[i][j] = i + 1 == j || dp0[i+1][j-1]
				}
			}
		}

		var dp1: [Int] = Array(repeating: Int.max, count: s.count + 1)
		
        dp1[0] = -1
		for i in 1...s.count {
			for j in 0..<i {
				if dp0[j][i-1] == true {
					dp1[i] = min(dp1[j] + 1, dp1[i])
				}
			}
		}
        return dp1[s.count]
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.