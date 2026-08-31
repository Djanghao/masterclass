# Swift solution | Sort digits

**Author:** athulsai
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/1750880/](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/1750880/)

---

Given number is converted to a string.

If it is a positive number then sort in ascending order.
If it is negative then sort in descending order and exclude the sign.

In case of leading zero, swap it with the first non-zero number.

```
class Solution {
    func smallestNumber(_ num: Int) -> Int {
        var numArr = Array(String(num))
        
        guard numArr.count > 1 else {
            return num
        }
        
        if num < 0 {
            _ = numArr.removeFirst() // Remove '-' sign
            numArr.sort(by: >)
        } else {
            numArr.sort()
        }
        
        if numArr[0] == "0", let i = numArr.firstIndex(where: { $0 != "0" }) {
            numArr.swapAt(0, i)
        }
        
        var numString = ""
        _ = numArr.map{ numString += "\\($0)" }
        var result = Int(numString)!
        
        return num < 0 ? -1 * result : result
    }
}
```