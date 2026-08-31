# One Line C# Solution

**Author:** safiiitju47
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4344784/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4344784/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Need to covert n to 0 with specific rules.
Here we can apply gray code to solve this.
we will just do xor with shifted rightmost bit of  n and we count this as one operation .

# Example:1
**Step 1: Initial State**

n = 11 in binary is 1011.

**Step 2: Recursive Call 1**

n >> 1 shifts the bits to the right: 1011 >> 1 = 0101.
Recursive call: MinimumOneBitOperations(0101).
XOR operation: 1011 ^ 0101 = 1110.

**Step 3: Recursive Call 2**

n >> 1 shifts the bits to the right: 0101 >> 1 = 0010.
Recursive call: MinimumOneBitOperations(0010).
XOR operation: 0101 ^ 0010 = 0111.

**Step 4: Recursive Call 3**

n >> 1 shifts the bits to the right: 0010 >> 1 = 0001.
Recursive call: MinimumOneBitOperations(0001).
XOR operation: 0010 ^ 0001 = 0011.

**Step 5: Recursive Call 4**

n >> 1 shifts the bits to the right: 0001 >> 1 = 0000.
Recursive call: MinimumOneBitOperations(0000), and the base case is reached.
The base case returns 0.

**Step 6: Backtracking**

Backtracking through the recursive calls:
0011 ^ 0001 = 0010
0111 ^ 0010 = 0101
1110 ^ 0101 = 1011

**Step 7: Result**
# Example:2

**Step 1: Initial State**

n = 18 in binary is 10010.

**Step 2: Recursive Call 1**

Shift right: 10010 >> 1 = 01001.
XOR: 10010 ^ 01001 = 11011.

**Step 3: Recursive Call 2**

Shift right: 01001 >> 1 = 00100.
XOR: 01001 ^ 00100 = 01101.

**Step 4: Recursive Call 3**

Shift right: 00100 >> 1 = 00010.
XOR: 00100 ^ 00010 = 00110.

**Step 5: Recursive Call 4**

Shift right: 00010 >> 1 = 00001.
Recursive call with 00001, and the base case returns 0.

**Step 6: Backtracking**

Backtrack through XOR operations:
00110 ^ 00010 = 00100
01101 ^ 00100 = 01001
11011 ^ 01001 = 10010

**Step 7: Result**

The final result is 10010 in binary, which is 18 in decimal.


# How Requirements Are Fulfilled:
1. **Changing the Rightmost Bit:**

- In each recursive call, the rightmost set bit is effectively flipped through the XOR operation.
- Example: The rightmost set bit in 1011 is flipped to 0101, then to 0010, and so on.
2. **Changing the ith Bit:**

- The XOR operations also affect other bits based on their positions.
- Example: The second bit (1st index) is flipped in the transition from 1011 to 1110.



# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
 public class Solution
 {
     public int MinimumOneBitOperations(int n)
     {
          if (n == 0) return 0;
          return n ^ MinimumOneBitOperations(n >> 1);
     }
 }
```