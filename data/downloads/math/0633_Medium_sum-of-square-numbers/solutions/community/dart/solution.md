# 🟢🔴🟢 Best Approach 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/5812986/](https://leetcode.com/problems/sum-of-square-numbers/solutions/5812986/)

---

# Intuition

The problem asks whether a given number `c` can be expressed as the sum of two squares, i.e., if there exist two integers `a` and `b` such that:

\\[ a^2 + b^2 = c \\]

The key idea is that if two integers' squares sum up to `c`, we can find them using a two-pointer approach. We can start with `a = 0` (the smallest possible square) and `b = sqrt(c)` (the largest possible square smaller than or equal to `c`), then adjust the values of `a` and `b` based on the sum of their squares.

# Approach

1. **Two-pointer technique**:
   - Set `lower = 0` and `bigger = sqrt(c)`. 
   - Compute `sum = lower^2 + bigger^2` and compare it with `c`:
     - If `sum == c`, return `true`, as we have found the two numbers whose squares sum to `c`.
     - If `sum < c`, increment `lower` to increase the sum.
     - If `sum > c`, decrement `bigger` to decrease the sum.
   - Repeat this process until `lower > bigger`.

2. **Stop Condition**:
   - If no such pair is found by the time `lower` exceeds `bigger`, return `false`.

# Complexity

- **Time Complexity**:  
  The time complexity is \\(O(\\sqrt{c})\\) because we are iterating with two pointers. In the worst case, we check values from `0` to `sqrt(c)`.

- **Space Complexity**:  
  The space complexity is \\(O(1)\\) as we are only using a few variables (`lower`, `bigger`, `sum`) and not storing any additional data structures.

# Example Walkthrough

Let's walk through an example with `c = 5`:

1. **Initial Setup**:
   - `lower = 0` and `bigger = sqrt(5) \u2248 2`.
   
2. **Step 1**:
   - Calculate `sum = 0^2 + 2^2 = 0 + 4 = 4`, which is less than `5`.
   - Since `sum < 5`, increment `lower` to `1`.

3. **Step 2**:
   - Calculate `sum = 1^2 + 2^2 = 1 + 4 = 5`, which equals `c`.
   - Return `true`, as we have found that `1^2 + 2^2 = 5`.

# Code

```dart
class Solution {
  bool judgeSquareSum(int c) {
    int lower = 0;
    int bigger = sqrt(c).toInt();
    
    // Use two-pointer approach to find if the sum of squares equals c
    while (lower <= bigger) {
      int sum = lower * lower + bigger * bigger;
      
      // If the sum matches c, return true
      if (sum == c) return true;
      // If the sum is less than c, increment lower pointer
      else if (sum < c) lower++;
      // If the sum is greater than c, decrement bigger pointer
      else bigger--;
    }
    
    // If no match found, return false
    return false;
  }
}
