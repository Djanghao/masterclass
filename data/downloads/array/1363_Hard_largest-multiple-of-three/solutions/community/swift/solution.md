# [Swift] Counting sort solution with O(n) time and O(1) space complexity

**Author:** sashkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/3840209/](https://leetcode.com/problems/largest-multiple-of-three/solutions/3840209/)

---

# Intuition
When you realize that if sum of digits mod 3 is 0, then you will come up to the solution to remove either 1 digit which has the same reminder when moduling 3 as the sum or 2 smallest digits which in sum have the same reminder moduling 3.

# Approach
When reminder of sum modulo 3 is 1 then we are looking for either 1 or 4 or 7. But if those are not found, then we are going to look for two smallest digits from 2,5,8. As their sum modulo 3 is also 1.
The same goes when the sum modulo 3 is 2. We are looking either 2 or 5 or 8 and then if not found we look for any pair of digits from the sequence 1,4,7. 

Initially I built this with O(nlogn) time complexity due to sorting digits with sorted function and O(n) space complexity as I needed an array to keep sorted digits and remove found digit(s). But then I realized since we only have 10 different values in digits array, we can sort them by using counting. Counting sort gives us O(n) time complexity and as we need an array of 10 elements it gives us O(1) space complexity.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    private let digitDividendsWithReminder = [[1, 4, 7, 2, 5, 8], [2, 5, 8, 1, 4, 7]]

    func largestMultipleOfThree(_ digits: [Int]) -> String {
        var sum = 0
        var frequencies = Array(repeating: 0, count: 10)
        
        digits.forEach {
            sum += $0
            frequencies[$0] += 1
        }
        
        let reminder = sum % 3
        if reminder > 0 {
            let sequence = digitDividendsWithReminder[reminder - 1]
            for digit in sequence {
                while sum % 3 > 0 && frequencies[digit] > 0 {
                    frequencies[digit] -= 1
                    sum -= digit
                }
            }
        }
            
        if sum % 3 > 0 { return "" }
        
        let sumOfFrequencies = frequencies.reduce(0, +)
        
        if sumOfFrequencies == 0 { return "" }
        
        if sumOfFrequencies == frequencies[0] { return "0" }
        
        return frequencies.enumerated().map { Array(repeating: "\\($0.offset)", count: $0.element) }.reversed().flatMap { $0 }.joined()
    }
}
```