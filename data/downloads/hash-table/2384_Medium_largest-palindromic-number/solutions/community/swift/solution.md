# ensures the solution is both time and space efficient

**Author:** orazz
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/5276719/](https://leetcode.com/problems/largest-palindromic-number/solutions/5276719/)

---


# Code
```
class Solution {
    func largestPalindromic(_ num: String) -> String {
        var digitsCount = [Int](repeating: 0, count: 10)
        var leftHalf = ""
        var center = ""
        
        for digitCh in num {
            if let digit = digitCh.wholeNumberValue {
                digitsCount[digit] += 1
            }
        }
        
        for digit in stride(from: 9, to: -1, by: -1) {
            if digitsCount[digit] >= 2 {
                leftHalf += String(repeating: String(digit), count: digitsCount[digit]/2)
            }
            
            if digitsCount[digit] % 2 == 1, center.isEmpty {
                center = String(digit)
            }
        }
        
        if !leftHalf.isEmpty && leftHalf.first == "0" {
            leftHalf = leftHalf.filter { $0 != "0" }
        }
    
        let res = "\\(leftHalf)\\(center)\\(String(leftHalf.reversed()))"
        return res.isEmpty ? "0" : res
    }
}
```