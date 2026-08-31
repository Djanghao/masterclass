# My Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/928510/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/928510/)

---

My Swift solution
```
class Solution {
    func findSubstringInWraproundString(_ p: String) -> Int {
        let alphabet = 26, p = Array(p).map({ Int($0.asciiValue ?? 97) - 97 }), c = p.count
        var maxs = [Int](repeating: 0, count: alphabet), start = c > 0 ? p[0] : 0, last = start == 0 ? 25 : start - 1, len = 0
        func check() {
            for i in 0..<min(len, alphabet) {
                let letter = (start + i) % alphabet
                maxs[letter] = max(maxs[letter], len - i)
            }
        }
        for char in p {
            if char - last == 1 || char - last == -25 {
                len += 1
            } else {
                check()
                start = char
                len = 1
            }
            last = char
        }
        check()
        return maxs.reduce(0, +)
    }
}
```