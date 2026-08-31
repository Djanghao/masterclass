# Swift Simple & MathHack Solutions

**Author:** Usiantsev
**Votes:** 3
**Link:** [https://leetcode.com/problems/power-of-three/solutions/1096425/](https://leetcode.com/problems/power-of-three/solutions/1096425/)

---

**Simple solution:**
```
class Solution {
    func isPowerOfThree(_ n: Int) -> Bool {
        var x = n
        if n == 0 { return false }
        while x % 3 == 0 {
            x /= 3
        }
    
        return x == 1
    }
}
```

**MathHack solution:**
```
class Solution {
    func isPowerOfThree(_ n: Int) -> Bool {
        let t = [1,3,9,27,81,243,729,2187,6561,19683,59049,177147,531441,1594323,4782969,14348907,43046721,129140163,387420489,1162261467,3486784401]
    
        if t.contains(n) {
            return true
        }
    
        return false
    }
}
```