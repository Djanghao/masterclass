# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 10
**Link:** [https://leetcode.com/problems/gray-code/solutions/1921930/](https://leetcode.com/problems/gray-code/solutions/1921930/)

---

```
class Solution {
    func grayCode(_ n: Int) -> [Int] {
        var arr: [Int] = [0]
        var e = -1
        
        func povv(_ n: Int, _ e: Int) -> Int { return Int(pow(Double(n), Double(e))) }
        
        for i in 1..<povv(2, n) {
            if i == povv(2, e + 1) { e += 1 }
            
            let index = povv(2, e + 1) - i - 1
            let num = povv(2, e) + arr[index]
            arr.append(num)
        }
        
        return arr
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.