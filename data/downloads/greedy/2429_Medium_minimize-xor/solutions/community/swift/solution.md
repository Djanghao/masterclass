# Swift Solution

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/3008454/](https://leetcode.com/problems/minimize-xor/solutions/3008454/)

---

# Approach
1. Find the number of 1's in num1 and num2.
2. Create a variable called "a" equal to the number of 1's in num1, and a variable called "b" equal to the number of 1's in num2.
3. Create a variable called "res" equal to num1.
4. Create a for loop that iterates through the 32 bits of num1.
5. If the number of 1's in num1 is greater than the number of 1's in num2, and the bit at the index of the for loop is 1, then XOR the bit at the index of the for loop with the result variable and subtract 1 from the number of 1's in num1.
6. If the number of 1's in num1 is less than the number of 1's in num2, and the bit at the index of the for loop is 0, then XOR the bit at the index of the for loop with the result variable and add 1 to the number of 1's in num1.
7. Return the result variable.

# Complexity
- Time complexity: O(1)

- Space complexity: O(1)

# Code
```
class Solution {
    func minimizeXor(_ num1: Int, _ num2: Int) -> Int {
        var a = num1.nonzeroBitCount, b = num2.nonzeroBitCount, res = num1
        for i in 0..<32 {
            if a > b && (1 << i & num1) > 0 {
                res ^= 1 << i
                a -= 1
            }
            if a < b && (1 << i & num1) == 0 {
                res ^= 1 << i
                a += 1
            }
        }
        return res
    }
}
```