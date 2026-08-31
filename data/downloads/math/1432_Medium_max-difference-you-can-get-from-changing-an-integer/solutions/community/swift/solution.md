# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/5083763/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/5083763/)

---

# Intuition
The problem is asking to find the maximum difference between two numbers that can be obtained by replacing digits in the original number. The intuition here is that we can maximize a number by replacing its smallest non-nine digit with 9, and we can minimize a number by replacing its largest non-zero and non-one digit with 0 or 1.

# Approach
1. Convert the number into a string for easy manipulation.
2. To get the maximum number (a), iterate through the string and replace the first non-nine digit with 9.
3. To get the minimum number (b), if the first digit is not 1, replace it with 1. If the first digit is 1, iterate through the rest of the string and replace the first non-zero and non-one digit with 0.
4. Convert a and b back to integers and return the difference.


# Complexity
- Time complexity: The time complexity is O(n) , where n is the number of digits in the number. This is because we are iterating through the string representation of the number once.

- Space complexity: The space complexity is also O(n) , where n is the number of digits in the number. This is because we are storing the string representation of the number. The rest of the space is used for constant space variables and does not scale with the input size. Therefore, the space complexity is linear.

# Code
```
class Solution {
    func maxDiff(_ num: Int) -> Int {
        let str = String(num)
        var a = str, b = str
        for char in str {
            if char != "9" {
                a = str.replacingOccurrences(of: String(char), with: "9")
                break
            }
        }
        if str.first! != "1" {
            b = str.replacingOccurrences(of: String(str.first!), with: "1")
        } else {
            for char in str.dropFirst() {
                if char != "0" && char != "1" {
                    b = str.replacingOccurrences(of: String(char), with: "0")
                    break
                }
            }
        }
        return Int(a)! - Int(b)!
    }
}

```