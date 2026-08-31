# scala code with detailed comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number/solutions/4378813/](https://leetcode.com/problems/confusing-number/solutions/4378813/)

---

This code effectively checks each digit of the input number. If a digit cannot be rotated (i.e., it's not in the rotatable map), the function immediately returns false. If all digits are rotatable, it constructs the rotated number and then checks if this rotated number is different from the original number. If they are different, it returns true, indicating the number is confusing; otherwise, it returns false.

# Code
```
object Solution {
    // Function to check if a number is confusing
    def confusingNumber(n: Int): Boolean = {
        // Map of rotatable digits to their 180-degree rotated counterparts
        val rotatable = Map(0 -> 0, 1 -> 1, 6 -> 9, 8 -> 8, 9 -> 6)

        var number = n        // Copy of the input number
        var confusingNumber = 0  // Variable to store the rotated number

        // Loop until all digits are processed
        while(number != 0) {
            val remainder = number % 10  // Extract the last digit

            // Check if the digit can be rotated
            rotatable.get(remainder) match {
                case None => return false // If digit is not rotatable, return false
                case Some(rotated) =>       // If digit is rotatable
                    // Build the rotated number
                    confusingNumber = confusingNumber * 10 + rotated
                    number /= 10  // Remove the last digit from the number
            }
        }

        // Check if the original number and the rotated number are different
        confusingNumber != n
    }
}

```