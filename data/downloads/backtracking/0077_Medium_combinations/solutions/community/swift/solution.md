# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/combinations/solutions/1918860/](https://leetcode.com/problems/combinations/solutions/1918860/)

---

```
class Solution {
    func combine(_ n: Int, _ k: Int) -> [[Int]] {
        var res: [[Int]] = []
        
        
        func backtrack(_ path: [Int], _ max: Int) {
            if path.count == k {
                res.append(path)
                return
            
            }
            
            var path = path
            if max + 1 > n { return }
            
            for i in max+1...n {
                if n - i < k - path.count - 1 {
                    continue
                }
                
                path.append(i)
                backtrack(path, i)
                path.remove(at: path.count - 1)
            }
        }
        
        backtrack([], 0)
        return res
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.