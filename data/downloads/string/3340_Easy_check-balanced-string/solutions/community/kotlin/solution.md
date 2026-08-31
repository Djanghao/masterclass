# Beginners friendly, Beats 100 % of other submissions' runtime.

**Author:** ali_juma
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6027880/](https://leetcode.com/problems/check-balanced-string/solutions/6027880/)

---

# Intuition
Iterate over the indices, adding the value if the index is odd and subtracting it if the index is even. Finally, check if the resulting total equals 0.

# Approach
Loop through each digit in the num, add or substract it based on its position (index).

1. Initialize a Difference Counter: 
We start with a variable (diff) set to zero. This will keep track of the cumulative sum of the digits as we process each one.
2. Loop Through Each Digit by Index: 
Using a loop, we go through each character in the string by its position (or index).
3. For each digit, we check if its position (index) is even or odd: 
- Even index: Add the digit\u2019s value to the diff counter.
- Odd index: Subtract the digit\u2019s value from the diff counter.
4. Calculate the Alternating Sum:
By alternating between addition and subtraction based on the index, we create an alternating sum, where each digit affects the total depending on its position.
5. Check the Final Result:
After processing all digits, we check if the cumulative diff equals zero. If it does, this means that the additions and subtractions of each digit have balanced out to zero.
6. Return the Result:
If diff equals zero, we return true (indicating the string is balanced); otherwise, we return false.


# Complexity
The time complexity is O(n), where n is the length of the num.

This is because we need to iterate through each character in the string once.

# Space complexity: 
The space complexity is O(1), as we are only using a variable (diff) and not any additional data structures that grow with input size.

# Code
```kotlin []
class Solution {
    fun isBalanced(num: String): Boolean {
        var diff = 0

        for (i in num.indices) {
            val digit = num[i] - '0'
            diff += if (i % 2 == 0) digit else -digit 
        }

        return diff == 0;
    }
}
```