# [Swift] O(n)

**Author:** oldrookie
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3624140/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3624140/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Do one operation depending on the position of "a".

# Approach
<!-- Describe your approach to solving the problem. -->

First, separate the string $$s$$ by character "a" and collect all substring in $$components$$.

Do one operation on the first non-empty substring in $$components$$.

Join the $$components$$ with "a" and assign to $$res$$. If the $$res$$ equal to $$s$$, replace the last character of $$res$$ to "z".

Return $$res$$.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
class Solution {
    func smallestString(_ s: String) -> String {
        var components = s.components(separatedBy: "a") // O(n)
        let n = components.count
        for i in 0..<n { // O(n)
            if !components[i].isEmpty {
                var str = ""
                for c in components[i] {
                    let code = (index(of: c) - 1 + 26) % 26
                    str.append(letter(code))
                }
                components[i] = str
                break
            }
        }
        var res = components.joined(separator: "a") // O(n)
        if res == s { // O(n)
            var temp = Array(res)
            temp[temp.count - 1] = "z"
            res = String(temp)
        }
        return res
    }
    private func index(of c: Character) -> Int {
        Int(c.asciiValue! - Character("a").asciiValue!)
    }
    private func letter(_ i: Int) -> Character {
        let code = UnicodeScalar(Character("a").asciiValue! + UInt8(i))
        return Character(code)
    }
}
```