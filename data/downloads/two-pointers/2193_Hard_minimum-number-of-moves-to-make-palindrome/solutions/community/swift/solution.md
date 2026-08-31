# Swift two pointer solution | 100% efficient.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/2347480/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/2347480/)

---

```
class Solution {
    func minMovesToMakePalindrome(_ s: String) -> Int {
        let n = s.count
        var s = Array(s)
        var lptr = 0
        var rptr = n - 1
        var res = 0
        while lptr < rptr {
            var r = rptr
            if s[lptr] == s[r] {
                lptr += 1
                rptr -= 1
                continue
            }
            while s[lptr] != s[r] {
                r -= 1
            }
            if lptr == r {
                swap(&s, lptr, lptr + 1)
                res += 1
            } else {
                while r != rptr {
                    swap(&s, r, r + 1)
                    r += 1
                    res += 1
                }
            }
        }
        return res
    }
    
    func swap(_ s: inout [Character], _ l: Int, _ r: Int) {
        let temp = s[l]
        s[l] = s[r]
        s[r] = temp
    }
}
```