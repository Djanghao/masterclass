# the fastest in dart

**Author:** ahmed___
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4344605/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4344605/)

---

# Intuition
The problem requires transforming an integer n into 0 using specific operations on its binary representation. The key observation is that changing the rightmost bit and applying operations based on certain conditions can be recursively performed. The intuition is to explore different combinations of bit operations to minimize the number of steps.
# Approach
The approach involves a recursive function rec that calculates the minimum number of operations for a given most significant bit (MSB) and the current value of n. The main function minimumOneBitOperations determines the MSB and initiates the recursive process.

1.Base Cases:

If n is already 0, return 0 as no operations are needed (base case).
If the MSB is at position 0, return 1, indicating that the rightmost bit needs to be changed.

2.Recursive Case:

Calculate the MSB and the rightmost bit of n.
If the rightmost bit is 0, call the recursive function with the rightmost bit cleared (bitwise AND with complement).
If the rightmost bit is 1, calculate the number of operations needed based on the recursive calls and return the result.

3.Main Function:

If n is already 0, return 0.
Calculate the MSB using the bitLength method.
Call the recursive function with the calculated MSB and return the result.
The recursive function explores different combinations of bit manipulations by changing the rightmost bit and applying operations based on certain conditions. The goal is to find the minimum number of steps to transform n into 0.

This approach explores the problem recursively, trying different combinations and calculating the minimum number of operations needed for each case. It leverages the properties of the binary representation of n to determine the most efficient sequence of operations.

# Complexity
- Time complexity:
O(2^n)
- Space complexity:
O(n)
# Code
```
class Solution {
  int rec(int msb, int n) {
    if (n == 0) {
      return 0;
    }
    if (msb == 0) {
      return 1;
    }

    int pw = 1 << msb;
    int bit = (n >> msb) & 1;
    if (bit == 0) {
      return rec(msb - 1, n & (~(pw)));
    }

    return pw + (pw - rec(msb - 1, n & (~(pw)))) - 1;
  }

  int minimumOneBitOperations(int n) {
    if (n == 0) {
      return 0;
    }
    int msb = 31 - (32 - n.bitLength);
    return rec(msb, n);
  }
}
```