# Swift - Sliding window

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/6046003/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/6046003/)

---

# Code
```swift []
class Solution {
    func numberOfSubstrings(_ s: String) -> Int {
        guard s.count > 2 else { return 0 }
        //it says s contains only a, b, c 
        var count = Array(repeating: 0, count: 3)
        var result = 0
        var left = 0
        var s = Array(s)

        for (index, char) in s.enumerated() {
            count[char.indexAsciiValue] += 1

            while count[0] > 0 && count[1] > 0 && count[2] > 0 {
                //then this substring contains all three characters
                //the substring x is ending at index, so every string ending with index + 1 .. s.count also includes a,b,c
                result += s.count - index
                count[s[left].indexAsciiValue] -= 1
                left += 1
            }
        }

        return result
    }
}

extension Character {
    var indexAsciiValue: Int {
        Int(self.asciiValue! - Character("a").asciiValue!)
    }
}
```