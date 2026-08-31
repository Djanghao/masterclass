# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/1938486/](https://leetcode.com/problems/single-number-ii/solutions/1938486/)

---

```
class Solution {
    func singleNumber(_ nums: [Int]) -> Int {
        var a = 0
        var b = 0
        
        for num in nums {
            let newA = a & ~b & ~num + ~a & b & num
            let newB = ~a & b & ~num + ~a & ~b & num
            
            (a, b) = (newA, newB)
        }
        
        return a | b
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.