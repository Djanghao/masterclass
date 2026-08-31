# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 10
**Link:** [https://leetcode.com/problems/gas-station/solutions/1938470/](https://leetcode.com/problems/gas-station/solutions/1938470/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of gas stations.
    //   - space: O(1), only constant space is used.
    
    func canCompleteCircuit(_ gas: [Int], _ cost: [Int]) -> Int {
        let count = gas.count
        var dp: [Int] = Array(repeating: Int.min, count: count)
        var i = 0
        var loop = 0
        var start = -1
        
        while loop <= 1 {
            let index = i > 0 ? i - 1 : count - 1
            
            if dp[i] >= 0 && start == i { return start }
            
            if dp[index] >= 0 {
                dp[i] = dp[index] + gas[i] - cost[i]
            
            } else {
                dp[i] = gas[i] - cost[i]
                start = i
            }
            
            if dp[i] < 0 { start = i }
            i += 1
            if i == count { loop += 1 }
            i %= count
        }
        
        return -1
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.