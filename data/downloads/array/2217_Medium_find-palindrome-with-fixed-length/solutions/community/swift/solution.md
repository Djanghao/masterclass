# Simple Swift Solution

**Author:** MoSayedovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/4408826/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/4408826/)

---


# Code
```
class Solution {
    func kthPalindrome(_ queries: [Int], _ intLength: Int) -> [Int] {
        var results = [Int]()
        let isOdd = intLength%2 != 0
        let sigNum = (intLength+1)/2
        let leftBase = (pow(10, (sigNum - 1)) as NSDecimalNumber).intValue
        let maxPalindrom = (pow(10, sigNum) as NSDecimalNumber).intValue - 1
        let numsAvailableOfIntLength = maxPalindrom - leftBase + 1
        for q in queries { 
            if q > numsAvailableOfIntLength {
                results.append(-1)
                continue
            }
            
            let left = leftBase + q - 1
            let leftString = "\\(left)"
            var rightString = String(leftString.reversed())
            if isOdd {
                rightString.removeFirst()
            }
            let res = Int(leftString+rightString) ?? -1
            results.append(res)
            
        }

        return results
    }
}
```