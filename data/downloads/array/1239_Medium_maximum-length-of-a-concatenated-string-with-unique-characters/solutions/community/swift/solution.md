# swift solution

**Author:** davidvoronoff
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/1128271/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/1128271/)

---

```swift
class Solution {
    func maxLength(_ arr: [String]) -> Int {
        var map = [String: Set<Character>](), ans = 0
        for str in arr {
            let chars = Set<Character>(str)
            if chars.count == str.count {
                for (key, existedChars) in map {
                    if existedChars.intersection(chars).isEmpty {
                        let str = ""  + key  + str
                        map[str] = existedChars.union(chars)
                        ans = max(ans, str.count)
                    }
                }
                map[str] = chars
                ans = max(ans, str.count)
                if ans == 26 { return 26 }
            }
        }
        return ans
    }
}
```