# Swift💯Explained

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5783212/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5783212/)

---

**Good Interview Answer (accepted answer)**
The greatest sequence of values **AND**-ed together is just a tricky way of saying:
"Return the **longest streak** of `num`'s  maximum value."
(**AND**-ing the max value with smaller values, reduces it, and eliminates it from consideration) 
```
class Solution { // "Return the longest streak of `num`'s  maximum value."
    func longestSubarray(_ nums: [Int]) -> Int {
        var maxN = 0
        var streak = 0 
        var longestStreak = 0
		
        for n in nums {
            if n > maxN {
                maxN = n
                streak = 1
                longestStreak = 1
            } else if n < maxN {
                streak = 0 
            } else {
                streak += 1
                longestStreak = max(longestStreak, streak)
            }
        }
        return longestStreak        
    }
}
```

---

**BONUS: One-Liner, terse (accepted answer)**
```
class Solution { // Just for fun -- Lousy Interview Answer!
  func longestSubarray(_ nums: [Int]) -> Int {
    [(nums,nums.max()!)].map{n,m in n.map{$0<m ? 0:$0}}[0].split(separator:0).map(\\.count).max()!
  }
}
```