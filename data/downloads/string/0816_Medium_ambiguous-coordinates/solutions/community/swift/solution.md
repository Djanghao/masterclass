# swift solution with explanation

**Author:** codeAWhile
**Votes:** 1
**Link:** [https://leetcode.com/problems/ambiguous-coordinates/solutions/1207736/](https://leetcode.com/problems/ambiguous-coordinates/solutions/1207736/)

---

```
class Solution {
    func ambiguousCoordinates(_ s: String) -> [String] {
        var str = Array(s)
        str.removeFirst()
        str.removeLast()
        var ans: [String] = []
        var lefts: [String] = []
        var rights: [String] = []
        for i in 0..<str.count-1 {
            lefts = makeStrings(str, 0, i)
            rights = makeStrings(str, i+1, str.count-1)
            for left in lefts {
                for right in rights {
                    let temp = "(" + left + ", " + right + ")"
                    ans.append(temp)
                }
            }
        }
        return ans
    }

    func makeStrings(_ s: [Character], _ i: Int, _ j: Int) -> [String] {
        var str = s[i...j]
        var result: [String] = []
        for idx in i...j { // Array.Slice is only a view of an original arran, so we use original index rather than 0..<str.count, which will cause index out of bounds error
            var left: [Character] = []
            var right: [Character] = []
            
            if idx == j { // reach the last index, do not need to split
                left.append(contentsOf: Array(str[i...j]))
                right = []
            } else {
                left = Array(str[i...idx])
                right = Array(str[idx+1...j])
            }
            if !(left.count > 1 && left.first! == "0") { // case like left =  "01" right = "23" we do not add dot
                if right.isEmpty {
                    result.append(String(left))
                } else {
                    var temp = left
                    temp.append(".")
                    temp.append(contentsOf: right)
                    if temp.last! != "0" { // case like "1.0" is not eligible
                        result.append(String(temp))
                    }
                    
                }
            }
        }
        return result
    }
}

```