# Simple Swift solution ✅

**Author:** bakhtishoddev
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/6120303/](https://leetcode.com/problems/alternating-digit-sum/solutions/6120303/)

---

# Intuition
The problem involves alternately adding and subtracting the digits of a number. This suggests iterating through the digits and using their index to determine whether to add or subtract. This alternating pattern can be achieved efficiently with a simple loop.

# Approach
1.	Convert the integer n into its string representation to easily access each digit.
2.	Use a loop to traverse the string representation of the number.
3.	For each character, check its position (even or odd index):
	\u2022	If the index is even, add the digit to the result.
	\u2022	If the index is odd, subtract the digit from the result.
4.	Convert each character to its numeric value before performing the arithmetic.
5.	Return the final result after the loop completes.

This approach ensures that the digits are processed sequentially, and the alternating sum is computed in a single pass.

# Complexity
- Time complexity:
$$O(d)$$, where d is the number of digits in n. Converting the integer to a string and traversing the string both require linear time relative to the number of digits.

- Space complexity:
$$O(d)$$, due to the string representation of the number. Other variables use constant space.

# Code
```swift []
class Solution {
    func alternateDigitSum(_ n: Int) -> Int {
        var result: Int = 0
        let nString = String(n)
        for (i, c) in nString.enumerated() {
            if let digit = c.wholeNumberValue {
                if i % 2 == 0 {
                    result += digit
                } else {
                    result -= digit
                }
            }
        }
        return result
    }
}
```