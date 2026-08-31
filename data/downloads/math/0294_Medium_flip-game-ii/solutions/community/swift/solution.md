# [Swift] Memoization

**Author:** alptekin35
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game-ii/solutions/553394/](https://leetcode.com/problems/flip-game-ii/solutions/553394/)

---

```
class Solution {
    var memo:[String:Bool] = [:]
    func canWin(_ s: String) -> Bool {
        if s.count < 2 { return false }
        var arr = Array(s)
        return helper(&arr)
    }
    
    func helper(_ sarr: inout[Character])->Bool{
        let key = String(sarr)
        if let exist = memo[key]{
            return exist
        }
        for i in 0..<sarr.count-1{
            if sarr[i] == "+" && sarr[i+1] == "+"{
                sarr[i] = "-"
                sarr[i+1] = "-"
                let other =  helper(&sarr)
                sarr[i] = "+"
                sarr[i+1] = "+"
                if !other {
                    memo[key] = true
                    return true
                }
            }
        }
        memo[key] = false
        return false
    }
}
```