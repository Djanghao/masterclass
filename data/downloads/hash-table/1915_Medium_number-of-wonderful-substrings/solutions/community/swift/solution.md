# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5091303/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5091303/)

---

# Complexity\r
- Time complexity: $$O(n)$$\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: $$O(n)$$\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
class Solution {\r
    func wonderfulSubstrings(_ word: String) -> Int {\r
        let firstAsciiValue = Character("a").asciiValue!\r
        \r
        var maskCount = [Int: Int]()\r
        var curMask = 0\r
        maskCount[curMask, default: .zero] += 1\r
        var result = 0\r
        for char in word {\r
            let offset = char.asciiValue! - firstAsciiValue\r
            curMask ^= 1 << offset\r
            \r
            result += maskCount[curMask, default: .zero]\r
            maskCount[curMask, default: .zero] += 1 // number of substrings with the same mask\r
\r
            for i in 0 ..< 10 {\r
                result += maskCount[curMask ^ (1 << i), default: .zero] // number of substrings with a mask that differs in one position\r
            }\r
        }\r
\r
        return result\r
    }\r
}\r
```