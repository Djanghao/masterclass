# 🟢🔴🟢 100% Beats. 🔥Best Approach to solve problem 💯💯

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5462438/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5462438/)

---

# Intuition
The problem requires reversing substrings within every pair of parentheses in the given string. This involves repeatedly identifying the innermost parentheses, reversing the substring they enclose, and then removing the parentheses.

# Approach
1. **Initialization**:
   - Initialize two variables, `startParentheses` and `endParentheses`, to track the positions of the opening and closing parentheses, respectively.
   - Use a variable `i` to iterate through the string.

2. **Processing the String**:
   - Use a `while` loop to iterate through the string `s` while it's not empty and `i` is less than the length of `s`.
   - For each character in the string:
     - If the character is `"("`, update `startParentheses` to the current index `i`.
     - If the character is `")"`:
       - Update `endParentheses` to the current index `i`.
       - If `endParentheses` is the last character in the string and `startParentheses` is the first, reverse the entire string between these two indices and break out of the loop.
       - Otherwise, create a temporary string `temp` to hold the reversed substring between `startParentheses` and `endParentheses`.
       - Replace the substring from `startParentheses` to `endParentheses` (inclusive) in `s` with the reversed `temp`.
       - Reset `i` to 0 and continue processing the string from the beginning.
   - Continue the loop until all parentheses are processed.

3. **Completion**:
   - Return the modified string `s` after all the parentheses and their enclosed substrings have been processed and reversed.

# Complexity
- **Time complexity**: The time complexity is $$O(n^2)$$. In the worst case, each replacement operation involves creating a new string and can be proportional to the size of the string. If this occurs multiple times, the overall complexity becomes quadratic.
- **Space complexity**: The space complexity is $$O(n)$$ due to the space required to store the temporary string `temp` and the updated string `s`.

# Code
```dart
class Solution {
  String reverseParentheses(String s) {
    int startParentheses = 0;
    int endParentheses = 0;
    int i = 0;
    
    // Loop through the string while it's not empty and 'i' is within bounds
    while (s.isNotEmpty && i < s.length) {
      // Identify the start of a parenthesis
      if (s[i] == "(") {
        startParentheses = i;
      } 
      // Identify the end of a parenthesis
      else if (s[i] == ")") {
        endParentheses = i;
        String temp = "";
        
        // Special case: if the entire string is within one pair of parentheses
        if (endParentheses == s.length - 1 && startParentheses == 0) {
          s = s.substring(1, s.length - 1).split("").reversed.join();
          break;
        }
        
        // Reverse the substring within the parentheses
        for (int j = endParentheses - 1; j > startParentheses; j--) {
          temp += s[j];
        }

        // Replace the original substring with the reversed substring
        s = s.replaceRange(startParentheses, endParentheses + 1, temp);
        
        // Reset 'i' to 0 to reprocess the string
        i = 0;
        continue;
      }
      i++;
    }
    
    // Return the final modified string
    return s;
  }
}
