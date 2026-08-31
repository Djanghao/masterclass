# ✅ O(n) 4 solutions

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5326417/](https://leetcode.com/problems/clear-digits/solutions/5326417/)

---

# Solutions
```String.Index []
struct Solution {
    @_optimize(speed)
    func clearDigits(_ s: String) -> String {
        var index = s.startIndex
        let endIndex = s.endIndex
        var output = ""

        while index < endIndex { 
            if s[index].isWholeNumber {
                output.removeLast()
            } else {
                output.append(s[index])
            }
            index = s.index(after: index)
        }
        return output
    }
}
```
```utf8CString []
struct Solution {
    @_optimize(speed)
    func clearDigits(_ s: String) -> String {
        var j = 0
        var ascii = s.utf8CString.dropLast()

        for i in ascii.indices {
            if (48...57).contains(ascii[i]) {
                j -= 1
            } else {
                ascii[j] = ascii[i]
                j += 1
            }
        }
        return ascii[..<j].reduce(into: "") { $0.append(Character(Unicode.Scalar(UInt8($1)))) }
    }
}
```
```Stack(Principle) []
struct Solution {
    @_optimize(speed)
    func clearDigits(_ s: String) -> String {
        var output = ""
        for c in s {
            if c.isWholeNumber {
                output.popLast()
            } else {
                output.append(c)
            }
        }
        return output
    }
}
```
```Collection []
struct Solution {
    @_optimize(speed)
    func clearDigits(_ s: String) -> String {
        var chars = ArraySlide(s)
        var j = 0
        
        for i in chars.indices {
            if chars[i].isNumber {
                j -= 1
            } else {
                chars[j] = chars[i]
                j += 1
            }
        }
        return String(chars[..<j])
    }
}
```