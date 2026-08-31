# 🟢🔴🟢 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/5899705/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/5899705/)

---

# Find the Second Highest Digit in a String

## Intuition
The problem asks to find the second-highest digit from a given string. The string contains alphanumeric characters, so we need to extract the digits and identify the second-largest one. If there is no second-highest digit (i.e., fewer than two distinct digits), return `-1`.

## Approach
1. **Extract Digits**: 
   - Traverse the string character by character, attempting to convert each character to a digit.
   - Use a `Set<int>` to store unique digits because a set automatically handles duplicate digits.
   
2. **Find Second-Highest Digit**:
   - Convert the set to a list and sort it in ascending order.
   - If the list contains at least two elements, return the second-to-last element as the second-highest digit.
   - Otherwise, return `-1` if there aren't enough digits.

## Example Walkthrough

Consider the input string `s = "dfa12321afd"`:

- **Step 1**: Extract digits from the string.
  - Traverse through each character of `s`.
  - Extract digits: `{1, 2, 3}`.

- **Step 2**: Sort the digits.
  - Convert the set to a list: `[1, 2, 3]`.
  - Sort the list (already sorted in this case): `[1, 2, 3]`.

- **Step 3**: Return the second-highest digit.
  - The second-highest digit is `2` (from the sorted list `[1, 2, 3]`).

- **Final Output**: `2`.

## Complexity

- **Time complexity**:  
  - **Extraction**: Iterating through the string takes $$O(n)$$ time, where `n` is the length of the string.
  - **Sorting**: Sorting the set of digits takes $$O(d \\log d)$$, where `d` is the number of unique digits. Since `d` is at most 10 (digits `0-9`), the sorting step is effectively constant time.
  - Overall, the time complexity is $$O(n)$$.

- **Space complexity**:  
  The space complexity is $$O(d)$$, where `d` is the number of unique digits stored in the set. Since `d` can be at most 10, the space complexity is effectively constant, i.e., $$O(1)$$.

## Solution Code

```dart
class Solution {
  int secondHighest(String s) {
    Set<int> digits = {};
    for (int i = 0; i < s.length; i++) {
      try {
        int digit = int.parse(s[i]);
        digits.add(digit);
      } catch (e) {
        // Non-digit character, ignore
      }
    }
    List<int> digits2 = digits.toList()..sort();
    return digits2.length > 1 ? digits2[digits2.length - 2] : -1;
  }
}
