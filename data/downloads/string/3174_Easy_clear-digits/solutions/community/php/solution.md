# Short solution with stack

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5280585/](https://leetcode.com/problems/clear-digits/solutions/5280585/)

---

# Approach
The idea behind this approach is to keep track of the non-digit characters in the stack. Whenever a digit is encountered, if the top of the stack is not a digit, it means that the previous non-digit character is not part of a consecutive digit sequence, so it should be kept.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input string. This is because we iterate over each character in the string once.

- Space complexity:
$$O(n)$$, where n is the length of the input string. This is because we use a stack to store the non-digit characters, and in the worst case, all characters in the string could be non-digit, resulting in a stack of size n.

# Code
``` python3 []
class Solution:
    def clearDigits(self, s: str) -> str:
        # Create an empty stack to store the non-digit characters
        stack = []

        # Iterate over each character in the input string
        for char in s:
            # If the current character is a digit
            if char.isdigit():
                # If the stack is not empty and the top of the stack is not a digit
                if stack and not stack[-1].isdigit():
                    # Pop the top of the stack
                    stack.pop()
            else:
                # If the current character is not a digit, append it to the stack
                stack.append(char)

        # Join the elements in the stack to form the final result string
        return "".join(stack)
```
``` javascript []
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    // Create an empty stack to store the non-digit characters
    let stack = [];

    // Iterate over each character in the input string
    for (let i = 0; i < s.length; i++) {
        // If the current character is a digit
        if (!isNaN(s[i])) {
            // If the stack is not empty and the top of the stack is not a digit
            if (stack.length > 0 && isNaN(stack[stack.length - 1])) {
                // Pop the top of the stack
                stack.pop();
            }
        } else {
            // If the current character is not a digit, push it to the stack
            stack.push(s[i]);
        }
    }

    // Join the elements in the stack to form the final result string
    return stack.join("");
};
```
``` php []
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    // Create an empty stack to store the non-digit characters
    let stack = [];

    // Iterate over each character in the input string
    for (let i = 0; i < s.length; i++) {
        // If the current character is a digit
        if (!isNaN(s[i])) {
            // If the stack is not empty and the top of the stack is not a digit
            if (stack.length > 0 && isNaN(stack[stack.length - 1])) {
                // Pop the top of the stack
                stack.pop();
            }
        } else {
            // If the current character is not a digit, push it to the stack
            stack.push(s[i]);
        }
    }

    // Join the elements in the stack to form the final result string
    return stack.join("");
};
```