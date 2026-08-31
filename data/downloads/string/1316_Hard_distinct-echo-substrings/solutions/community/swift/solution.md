# Rolling hash

**Author:** abhiraj
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/4983214/](https://leetcode.com/problems/distinct-echo-substrings/solutions/4983214/)

---

# Note
Getting mod right might be challenging for beginner

# Code
```
class Solution {
    func distinctEchoSubstrings(_ text: String) -> Int {
        var visited = Set<Int>()
        var array = Array(text)
        var p1 = 31
        var mod = Int(1e9+7)
        var result = 0
        var hash1 = 0
        var hash2 = 0
        var p1a = Array(repeating:1, count:array.count)
        for i in 1..<p1a.count {
            p1a[i] = (p1a[i-1] * p1) % mod
        }
        func intchar(_ i:Int) -> Int {
            let char = array[i]
            return Int(char.asciiValue! - 96)
        }

        func helper(_ len: Int) {
            var s1 = 0
            var s2 = len
            hash1 = 0
            hash2 = 0
            for i in 0..<len {
                hash1 = (hash1 * p1 + intchar(i)) % mod
                hash2 = (hash2 * p1 + intchar(i+s2)) % mod
            }
            if hash1 == hash2 && !visited.contains(hash1) {
                
                visited.insert(hash1)
                result += 1
            }
            while s2+len < array.count {
                
                hash1 = (hash1 * p1 - (intchar(s1) * p1a[len]) % mod +   mod  + intchar(s1+len)) % mod
                hash2 = (hash2 * p1 - (intchar(s2) * p1a[len]) % mod +   mod  + intchar(s2+len)) % mod
                s1 += 1
                s2 += 1
                 if hash1 == hash2 && !visited.contains(hash1) {
                   
                    visited.insert(hash1)
                    result += 1
                }
                
            }
            
        }
        for i in 1...array.count/2 {
        helper(i)
        }
        return result


        
        
    }
}
```