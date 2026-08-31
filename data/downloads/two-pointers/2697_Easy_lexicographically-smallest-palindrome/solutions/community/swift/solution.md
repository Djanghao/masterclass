# Swift solution easy to understand ✅

**Author:** aldo_vernando
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/5059340/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/5059340/)

---


# Code
```
class Solution {
    func makeSmallestPalindrome(_ s: String) -> String {
        var stringArr = Array(s)

        let len = s.count
        for index in 0...(len / 2) {
            if (stringArr[index] != stringArr[len - index - 1]) {
                let leftChar = Int(stringArr[index].asciiValue!)
                let rightChar = Int(stringArr[len - index - 1].asciiValue!)

                if leftChar < rightChar {
                    stringArr[len - index - 1] = stringArr[index]
                } else {
                    stringArr[index] = stringArr[len - index - 1]
                }
            }
        }
        return String(stringArr)
    }
}
```