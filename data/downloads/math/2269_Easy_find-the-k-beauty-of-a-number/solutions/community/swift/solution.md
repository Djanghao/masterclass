# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/3029337/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/3029337/)

---

```
class Solution {
    func divisorSubstrings(_ num: Int, _ k: Int) -> Int {
        
        let s = String(num)
        
        var i = 0
        var res = 0
        
        while i <= s.count - k {
            let n = Int(String(s.dropFirst(i).prefix(k)))!
            if n != 0, num % n == 0 { res += 1 }
            i += 1
        }
        
        return res
    }
}
```