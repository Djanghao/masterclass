# Swift base on KMP algorithm O(n)

**Author:** zip520123
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/1145920/](https://leetcode.com/problems/longest-happy-prefix/solutions/1145920/)

---

Use KMP algorithm to generate a longest prefix's length which is also suffix table.
Although we can use this table to find substring in another string with O(n) time.
We only need the last suffix in this problem.
```swift
    func longestPrefix(_ s: String) -> String {
        let sArr = Array(s)
        var i = 1, len = 0

        var table = [0]  //create a longest prefix's length which is also suffix table
        while i < sArr.endIndex {
            if sArr[i] == sArr[len] {
                len += 1
                table.append(len)
                i += 1
            } else {
                if len == 0 {
                    table.append(len)
                    i += 1
                } else {
                    len = table[len - 1]
                }
            }
        }

        len = table.last!  //We only need the last suffix
        
        return String(sArr[i-len..<i])
    }
```