# Explained and commented Kotlin Solution

**Author:** darian-catalin-cucer
**Votes:** 1
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/3107106/](https://leetcode.com/problems/alternating-digit-sum/solutions/3107106/)

---

This code defines a Solution class with a single function called alternateDigitSum. The function takes in a single integer argument n and returns an integer.

The function first converts the input integer n to a string so that we can iterate through each digit of the number. It then initializes a variable sum to store the sum of the alternate digits.

The function then iterates through each digit in the string using a for loop. For each digit, it checks if the current digit is at an even index or an odd index using an if-else statement. If the index is even, the digit is added to the sum. If the index is odd, the digit is subtracted from the sum. Finally, the function returns the final sum after the loop has completed.

```
class Solution {
    // Function to calculate the alternate digit sum of a given number 'n'
    fun alternateDigitSum(n: Int): Int {
        
        // Convert the number to a string to access individual digits
        val s = n.toString()
        
        // Initialize a variable to store the sum
        var sum = 0
        
        // Iterate through each digit in the string
        for (i in 0 until s.length) {
            
            // If the current digit is at an even index, add it to the sum
            // If the current digit is at an odd index, subtract it from the sum
            sum += if (i % 2 == 0) s[i] - '0' else (-1 * (s[i] - '0'))
        }
        
        // Return the final sum
        return sum
    }
}
```