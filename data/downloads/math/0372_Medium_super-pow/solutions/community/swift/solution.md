# Swift Easy Solution || 100% beat

**Author:** rekhalilapara
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-pow/solutions/3812713/](https://leetcode.com/problems/super-pow/solutions/3812713/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func superPow(_ a: Int, _ b: [Int]) -> Int {
    
        if b.count == 0 { return 1 }
        
        func powerWithMode(_ a: Int, _ b: Int, _ mod: Int = 1337) -> Int {
            if b == 0 { return 1 }
            if b == 1 { return a % mod }
            
            let power = powerWithMode(a, b / 2, mod)
            let powerWithMode = (power * power) % mod
            return b % 2 == 0 ? powerWithMode : (powerWithMode * a) % mod
            
        }
        
        var b = b
        let last = b.removeLast()
        return powerWithMode(a, last) * powerWithMode(superPow(a, b), 10) % 1337
        
    }
}
```