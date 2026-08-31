# Swift Solution

**Author:** codeAWhile
**Votes:** 2
**Link:** [https://leetcode.com/problems/super-palindromes/solutions/1197799/](https://leetcode.com/problems/super-palindromes/solutions/1197799/)

---

Note edge case: the i should be **smaller** than the **MAGIC(100000)** else it will cause an overflow
```
class Solution {
    func superpalindromesInRange(_ left: String, _ right: String) -> Int {
        var ans = 0
        var lowerBar = UInt64(left)!
        var higherBar = UInt64(right)! 
        
        for i in 1..<100000 {
            var s = Array(String(i))
            var j = s.count-2
            while j >= 0 {
                s.append(s[j])
                j -= 1
            }
            let ss = String(s)
            let square: UInt64 = UInt64(ss)!*UInt64(ss)!
            if square > higherBar {
                break
            } 
            if square >= lowerBar && isPalindromes(square) {
                ans += 1
            }
        }
        
        for i in 1..<100000 {
            var s = Array(String(i))
            var j = s.count-1
            while j >= 0 {
                s.append(s[j])
                j -= 1
            }
            let ss = String(s)
            let square: UInt64 = UInt64(ss)!*UInt64(ss)!
            if square > higherBar {
                break
            }
            if square >= lowerBar && isPalindromes(square) {
                ans += 1
            }
        }
        return ans
    }
    
    private func isPalindromes(_ n: UInt64) -> Bool {
        let s = Array(String(n))
        return s == s.reversed()
    }
}
```