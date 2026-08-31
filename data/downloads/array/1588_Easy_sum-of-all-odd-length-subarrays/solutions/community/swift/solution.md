# Swift fastest solution with 6L demonstration

**Author:** YogiV07
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/5148502/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/5148502/)

---



# Code
```
class Solution {
    func sumOddLengthSubarrays(_ arr: [Int]) -> Int {
        var n = arr.count
        var sum = 0
        for (ind, ar) in arr.enumerated() {
            var rep = (n-ind)*(ind+1)
            rep = (rep+1)/2
            sum += ar*rep
        }
        return sum
    }
}


// 1 2 3 4 5 6
// 12 23 34 45 56
// 123 234 345 456
// 1234 2345 3456 
// 12345 23456
// 123456

// 3 5 6 6 5 3
// 3 5 6 6 5 3

// 6 10 12 12 10 6
```