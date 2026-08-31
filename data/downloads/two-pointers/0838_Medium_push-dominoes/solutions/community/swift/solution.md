# Swift fast solution O(n), O(1)

**Author:** Nam-Namazov
**Votes:** 1
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/2930080/](https://leetcode.com/problems/push-dominoes/solutions/2930080/)

---

# Complexity
- Time complexity:
**O(n)**

- Space complexity:
**O(1)**

# Code
```
class Solution {
    func pushDominoes(_ dominoes: String) -> String {
        var dominoes = Array(dominoes)
        var L = 0
        var R = 0
        
        for i in 0..<dominoes.count where dominoes[i] == "." {
            L = i - 1
            R = i + 1
            
            while L >= 0 && dominoes[L] == "." {
                L -= 1
            }
            
            while R < dominoes.count && dominoes[R] == "." {
                R += 1
            }
            
            if L == -1 {
                L = 0
            }
            
            if R == dominoes.count {
                R = dominoes.count - 1
            }
            
            switch (dominoes[L], dominoes[R]) {
            case (".", "L"), ("L", "L"):
                while L < R {
                    dominoes[L] = "L"
                    L += 1
                }
            case ("R", "R"), ("R", "."):
                while L < R {
                    dominoes[R] = "R"
                    R -= 1
                }
            case ("R", "L"):
                while L < R {
                    dominoes[L] = "R"
                    L += 1
                    dominoes[R] = "L"
                    R -= 1
                }
            default:
                break
            }
        }
        return String(dominoes)
    }
}

```