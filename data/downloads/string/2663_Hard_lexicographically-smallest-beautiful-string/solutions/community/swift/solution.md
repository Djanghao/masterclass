# Swift

**Author:** vasiliyfedotov
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/4104438/](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/4104438/)

---

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {

    var chrs = [Character]()
    var res = ""

    func ascii(_ c: Character) -> UInt8 { c.asciiValue! - 97 }
    func sym(_ ascii: UInt8) -> Character { Character(UnicodeScalar(ascii + 97)) }

    func isPalindrome(_ idx: Int, _ newChar: Character) -> Bool {
        if idx > 0, chrs[idx - 1] == newChar { return true }
        if idx > 1, chrs[idx - 2] == newChar { return true }

        return false
    }

    func checkAllSymbols(_ idx: Int, _ from: UInt8, _ to: UInt8) -> Bool {

        if idx == chrs.count {
            res = String(chrs)
            return true
        }

        for k in from..<to {
            let sym1 = sym(k)
            if isPalindrome(idx, sym1) { continue }

            let prevSym = chrs[idx]
            chrs[idx] = sym1

            if checkAllSymbols(idx + 1, .zero, to) { return true }

            chrs[idx] = prevSym
        }

        return false
    }

    func smallestBeautifulString(_ s: String, _ k: Int) -> String {
        let kk = UInt8(k)
        let origin = [Character](s)
        chrs = origin

        var minIdx = chrs.count - 1

        while minIdx >= 0 {

            defer { minIdx -= 1 }

            let currentChrAscii = ascii(chrs[minIdx])
            if currentChrAscii + 1 >= kk { continue }

            let rr = checkAllSymbols(minIdx, currentChrAscii + 1, kk)
            if rr { return res }
        }

        return ""
    }
}
```