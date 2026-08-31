# Swift | Slide window | Comments

**Author:** tinhpv
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/3643575/](https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/3643575/)

---

# Code
```
class Solution {
    func charIndex(_ char: Character) -> Int {
        switch char {
            case "Q": return 0
            case "W": return 1
            case "E": return 2
            case "R": return 3
            default: return 4 // << never happen
        }
    }

    func balancedString(_ s: String) -> Int {
        let s = s.map { $0 }
        let requiredOccurrence = s.count / 4
        var occurrence: [Int] = Array(repeating: 0, count: 4)

        // calculate the occurrence array
        for char in s {
            occurrence[charIndex(char)] += 1
        }

        // get the count of odd character
        var oddCount = 0
        for i in 0..<occurrence.count {
            if occurrence[i] > requiredOccurrence {
                oddCount += occurrence[i] - requiredOccurrence
            }
        }

        // the input is balanced string
        if oddCount == 0 { return 0 }

        // slide the window to find the min substring
        // move the right end, till we find the valid result, move the left end
        // until the result is invalid >> [l -> r] is the minimum length
        var l = 0, r = 0, ans = s.count + 1
        while r < s.count {
            if occurrence[charIndex(s[r])] > requiredOccurrence {
                oddCount -= 1
            }
            occurrence[charIndex(s[r])] -= 1

            while oddCount == 0 {
                ans = min(ans, r - l + 1)
                occurrence[charIndex(s[l])] += 1
                if occurrence[charIndex(s[l])] > requiredOccurrence {
                    oddCount += 1
                }
                l += 1
            }

            r += 1
        }

        return ans == s.count + 1 ? 0 : ans
    }
}


```