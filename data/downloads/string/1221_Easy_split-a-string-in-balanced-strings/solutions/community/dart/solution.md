# 🟢🔴🟢 Best and Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/5617639/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/5617639/)

---

# Intuition
The problem asks for the maximum number of balanced substrings that can be obtained from a given string `s`, where a balanced string is defined as having an equal number of 'L' and 'R' characters. The idea is to traverse the string and keep track of the balance between 'L' and 'R' characters. Every time we achieve a balance, we can consider it a valid substring and increase our count.

# Approach
1. **Initialize Counters**:
   - Use two counters, `left` for counting 'L' characters and `right` for counting 'R' characters. Also, initialize a `count` variable to keep track of the number of balanced substrings.

2. **Iterate Through the String**:
   - Traverse each character in the string `s`.
   - If the character is 'L', increment the `left` counter.
   - If the character is 'R', increment the `right` counter.
   - Whenever `left` equals `right`, it indicates that the substring from the previous balanced point (or start) to the current point is balanced, so increment the `count`.

3. **Return the Result**:
   - After iterating through the string, return the value of `count`, which represents the maximum number of balanced substrings.

# Complexity
- **Time complexity**:
  - The time complexity is $$O(n)$$, where `n` is the length of the string `s`. This is because we only traverse the string once.

- **Space complexity**:
  - The space complexity is $$O(1)$$ since we are using only a constant amount of extra space for the counters.

# Example Walkthrough

Given the string:
- `s = "RLRRLLRLRL"`

### 1. **Initialize Counters**
   - Start with `count = 0`, `left = 0`, and `right = 0`.

### 2. **Iterate Through the String**
   - First character is 'R', so `right = 1`.
   - Second character is 'L', so `left = 1`. Now `left == right`, so increment `count` to 1.
   - Third character is 'R', so `right = 2`.
   - Fourth character is 'R', so `right = 3`.
   - Fifth character is 'L', so `left = 2`.
   - Sixth character is 'L', so `left = 3`. Now `left == right`, so increment `count` to 2.
   - Continue this process until the end of the string. After processing the entire string, `count` becomes 4.

**Output**: `4` (There are four balanced substrings: "RL", "RRLL", "RL", and "RL")

# Code
```dart
class Solution {
  int balancedStringSplit(String s) {
    int count = 0;
    int left = 0;
    int right = 0;
    for(int i = 0; i < s.length; i++){
        if(s[i] == "L") {
            left += 1;
        } else {
            right += 1;
        }
        if(left == right) count++;
    }
    return count;
  }
}
