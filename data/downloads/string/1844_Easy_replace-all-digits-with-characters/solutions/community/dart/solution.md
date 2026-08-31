# 🟢🔴🟢 Beats 100.00%👏 || Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/5656771/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/5656771/)

---

# Intuition
The problem asks us to replace every digit in the string with a character that is obtained by shifting the character before the digit by the value of the digit. This can be done by iterating through the string and applying the shift wherever necessary.

# Approach
1. **Identify Characters and Digits**:
   - The string contains alternating letters and digits. For every digit in the string, we need to find the letter that comes right before it.

2. **Calculate the Shift**:
   - For each digit at position `i` in the string, determine how many positions we need to move forward in the alphabet from the letter at position `i-1`.
   - For example, if the letter is `'a'` and the digit is `2`, then we need to move 2 positions forward from `'a'` to get `'c'`.

3. **Replace the Digit**:
   - Replace the digit in the string with the new letter obtained from the shift.
   - We continue this for all digits in the string.

4. **Final String**:
   - After processing all the digits in the string, the result is a string where all digits have been replaced by letters.

### Steps:
- **Step 1**: Start at the beginning of the string and check each character.
- **Step 2**: Whenever you find a digit:
  - Identify the letter right before it.
  - Convert the digit to an integer.
  - Move forward in the alphabet from the identified letter by the number of positions given by the digit.
- **Step 3**: Replace the digit in the string with the new letter.
- **Step 4**: Continue until the entire string has been processed.
- **Step 5**: Return the modified string.

# Example Walkthrough
Let's go through an example to see how this works:

### Example:
- **Input**:
  - `s = "a1c1e1"`

### Steps:
1. **First Digit** (`1` at index 1):
   - The character before `1` is `'a'`.
   - Shift `'a'` by `1` position in the alphabet, which gives us `'b'`.
   - Replace `1` with `'b'`.
   - String becomes `"abc1e1"`.

2. **Second Digit** (`1` at index 3):
   - The character before `1` is `'c'`.
   - Shift `'c'` by `1` position in the alphabet, which gives us `'d'`.
   - Replace `1` with `'d'`.
   - String becomes `"abcde1"`.

3. **Third Digit** (`1` at index 5):
   - The character before `1` is `'e'`.
   - Shift `'e'` by `1` position in the alphabet, which gives us `'f'`.
   - Replace `1` with `'f'`.
   - String becomes `"abcdef"`.

### Final Output:
- The final modified string is `"abcdef"`.

# Complexity
- **Time complexity**: $$O(n)$$
  - Where `n` is the length of the string `s`. We iterate through the string once.

- **Space complexity**: $$O(n)$$
  - The space complexity is linear due to the space required for the resulting string, especially if string operations are implemented in a way that copies the string.

# Code
```dart
class Solution {
  String replaceDigits(String s) {
    for(int i = 0; i < s.length; i++){
        if(i.isOdd){
            int shift = s.codeUnitAt(i-1) + int.parse(s[i]);
            String char = String.fromCharCode(shift);
            s = s.replaceRange(i,i+1,char);
        }
    }
    return s;
  }
}
