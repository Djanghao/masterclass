# 🟢🔴🟢 Beats 100.00% 👏 || Easiest Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-break/solutions/5812495/](https://leetcode.com/problems/integer-break/solutions/5812495/)

---

# Intuition

The problem asks us to break an integer `n` into at least two positive integers and maximize their product. Our task is to find the maximum product we can get from these integers. 

The key insight is that breaking the integer into parts of `3` leads to the largest product. This is because the product of `3`s yields a higher result compared to dividing the number into `2`s or larger parts. Special care must be taken for smaller numbers (`2` and `3`), where the result needs to be handled separately.

# Approach

1. **Handle Base Cases**: 
   - If `n` is `2` or `3`, we return `n - 1` because splitting into smaller numbers gives the highest possible product.
   
2. **Maximize Product Using 3s**: 
   - For larger numbers, the best strategy is to keep dividing `n` by `3` because multiplying by `3` gives the highest possible product.
   - Keep subtracting `3` from `n` and multiplying the result into a `count` variable, which holds the running product.
   
3. **Handle the Remainder**: 
   - Once `n` is reduced to `4` or less, we stop dividing and multiply the remaining number with the product. This is because for values of `n <= 4`, it's better to multiply them directly than to split further.

# Complexity

- **Time Complexity**:  
  The time complexity is \\(O(n)\\), where we repeatedly subtract `3` from `n`. In the worst case, the number of operations is proportional to `n/3`, which simplifies to \\(O(n)\\).

- **Space Complexity**:  
  The space complexity is \\(O(1)\\) since we are only using a few variables to store the result and intermediate values.

# Example Walkthrough

Let's walk through an example with `n = 10`:

1. **Step 1: Initial Setup**:
   - Initialize `count = 1`.
   - Begin dividing `n = 10` by `3`.

2. **Step 2: Division Process**:
   - First iteration: `n = 10 - 3 = 7`, `count = 1 * 3 = 3`.
   - Second iteration: `n = 7 - 3 = 4`, `count = 3 * 3 = 9`.

3. **Step 3: Handle Remainder**:
   - Now, `n = 4`. Multiply the remaining value with `count`, i.e., `count = 9 * 4 = 36`.

4. **Return the Result**:
   - The maximum product is `36`.

# Code

```dart
class Solution {
  int integerBreak(int n) {
    // Handle base cases where n is 2 or 3
    if (n == 2 || n == 3) return n - 1;
    
    int count = 1;
    
    // Keep dividing n by 3 and multiply the result
    while (n > 4) {
      count *= 3;
      n -= 3;
    }
    
    // Multiply the remaining n with the count
    return count * n;
  }
}
