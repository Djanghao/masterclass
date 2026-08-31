# Official Solution

**Link:** [https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solution/](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solution/)

---

[TOC]

## Solution

---

### Overview

To find the minimum number of bit flips needed to convert `start` to `goal`, we first need to understand a few key concepts. Grasping these concepts is essential for following the approaches, as it will help clarify how the solution works.

##### XOR Operator (`^`):

The `XOR` (exclusive `OR`) operator is a bitwise operator that compares each bit of two operands. The result is `1` if the bits are different, and `0` if they are the same. Here’s a truth table for the `XOR` operator:

| A | B | A ^ B |
|---|---|-------|
| 0 | 0 |   0   |
| 0 | 1 |   1   |
| 1 | 0 |   1   |
| 1 | 1 |   0   |

Properties:
- `A ^ A = 0` (any number XORed with itself is `0`)
- `A ^ 0 = A` (XORing with `0` leaves the number unchanged)
- `A ^ B = B ^ A` (order doesn’t matter)
- `(A ^ B) ^ C = A ^ (B ^ C)` (grouping doesn’t matter)
- `(A ^ B) ^ B = A` (XORing twice cancels out)

##### Right Shift Operator (`>>`):

The right shift operator (`>>`) shifts the bits of a number to the right by a specified number of positions. The `>>=` operator is a compound assignment operator that performs the right shift and assigns the result to the variable.

For example, with the number `14` (binary `1110`), performing a right shift by 1 position (`>> 1`) shifts the binary number `1110` to the right. The result is `0111`, where the last bit is dropped, and a `0` is added to the left.

---

### Approach 1: Brute Force

#### Intuition

The simplest method is to check each bit of both numbers, one by one. For each bit position, we check if the bits differ. If they do, we need to flip that bit in the `start` number to match the `goal`. We count how many bits need to be flipped as we move from the least significant bit to the most significant bit. Although simple, we need to check each bit individually, which can be slow for large numbers.

#### Algorithm

- Initialize a counter `count` to keep track of the number of bit flips needed.

- Loop while either `start` or `goal` has bits left to check:
  - Compare the least significant bits (rightmost bits) of `start` and `goal`:
    - Use the bitwise AND operation (`& 1`) to isolate the least significant bit of each number.
    - If the bits differ (`(start & 1) != (goal & 1)`), increment the `count` by 1.
  - Right shift both `start` and `goal` by one position (`>>= 1`) to move to the next bit.

- Return the total `count` after all bits have been checked.

#### Implementation

<iframe src="https://leetcode.com/playground/3nKBjaXV/shared" frameBorder="0" width="100%" height="327" name="3nKBjaXV"></iframe>

#### Complexity Analysis

- Time Complexity: $O(\text{max bits})$
  
  We need to compare each bit of `start` and `goal`. Given that $0 \leq \text{start}, \text{goal} \leq 10^9$, the maximum number of bits needed to represent these numbers is 30 (since $2^{30} \approx 10^9$). Thus, the time complexity is proportional to the number of bits, which is $O(30)$, effectively $O(1)$.

- Space Complexity: $O(1)$

  We use a fixed amount of extra space to store variables for the comparison. It does not require additional space that grows with the input size, so the space complexity is constant.

---

### Approach 2: Recursive Approach

#### Intuition

In the iterative approach, we compare each bit of `start` and `goal` to count the differences. This approach solves the problem by breaking it into smaller tasks. We start with the least significant bits, which are the rightmost bits in the binary numbers. If these bits differ, we need to flip the bit in `start` to match `goal`. Each flip is counted as one operation.

After addressing the least significant bits, we shift both `start` and `goal` to the right by one position, effectively discarding the bits we've already compared. This way, we reduce the size by one bit, allowing us to focus on the next pair of bits. We then apply the same logic: repeatedly strip away the smallest unit of the problem (the last bit), solve it, and then move on to the next, gradually building up the solution.

The process continues recursively, with each step reducing the problem by one bit until all bits have been processed and we reach the base case. At this point, both the `start` and `goal` become `0000`, and the recursion ends.

#### Algorithm

- Base Case: Check if both `start` and `goal` are 0:
    - If true, return 0, since both numbers have been fully processed, meaning there are no more bits left to compare.

- Compare the least significant bit (LSB) of `start` and `goal` using the bitwise `AND` operation (`start & 1` and `goal & 1`).
    - If the LSBs differ, set `flip` to 1 (indicating a flip is required).
    - If the LSBs are the same, set `flip` to 0 (indicating no flip is needed).

- Recursively call `minBitFlips` with both `start` and `goal` right-shifted by 1 bit to process the next bit.
    - Add the result of the recursive call to the `flip` value calculated for the current bit.

- Return the sum of flips required for all the bits to match `goal` from `start`.

#### Implementation

<iframe src="https://leetcode.com/playground/ETDzjU7x/shared" frameBorder="0" width="100%" height="276" name="ETDzjU7x"></iframe>

#### Complexity Analysis  

- Time complexity: $O(\text{max bits})$

  Each recursive call handles one bit and shifts the numbers right by one position. The depth of the recursion is determined by the number of bits in the integers. Given the maximum of 30 bits, the recursion will execute up to 30 times, resulting in a time complexity of $O(30)$, effectively $O(1)$.

- Space complexity: $O(\text{max bits})$

  The recursive approach uses stack space proportional to the recursion depth. Since the maximum depth is the number of bits (up to 30), the space complexity is $O(30)$, which is effectively $O(1)$.

---

### Approach 3: XOR Rules

#### Intuition

The general rule of the `XOR` operation is that `XOR` between two bits returns 1 if the bits differ and 0 if they are the same. This is perfect for this problem.

By applying `XOR` to the start and goal, we get a new number where each 1 represents a bit that differs between the start and goal. The problem now reduces to counting how many 1s are in the binary representation of this new number. This simplifies the entire process because we shift from comparing each bit individually to a single operation that captures all differences.

#### Algorithm

- XOR `start` and `goal` to find differing bits. Store the result in `xorResult`.
- Initialize a counter `count` to zero for counting differing bits.
- Iterate the entire `xorResult`:
  - While `xorResult` is not zero:
    - Increment `count` if the last bit of `xorResult` is 1.
    - Shift `xorResult` right by one bit to process the next bit.
- Return `count` as the number of bit flips needed to convert `start` to `goal`.

#### Implementation

<iframe src="https://leetcode.com/playground/87rrP23K/shared" frameBorder="0" width="100%" height="293" name="87rrP23K"></iframe>

#### Complexity Analysis

- Time complexity: $O(\text{number of bits})$

  This approach calculates the XOR of `start` and `goal`, then counts the number of set bits in the result. The XOR operation and bit counting are both linear with respect to the number of bits. Given a maximum of 30 bits, the time complexity is $O(30)$, effectively $O(1)$.

- Space complexity: $O(1)$

  The space used is constant, as we only need variables to store the XOR result and count the set bits. There are no additional data structures, so the space complexity is constant.

---

### Approach 4: Brian Kernighan’s Algorithm

#### Intuition

Brian Kernighan’s algorithm provides an efficient way to count the number of set bits (`1`s) in an integer by repeatedly eliminating the lowest set bit at each step. The algorithm leverages a clever trick: subtracting `1` from a number flips all the bits after the rightmost `1`, including the rightmost `1` itself. When we perform a bitwise `AND` between the original number and the result of subtracting `1`, this operation removes the lowest set bit. This is a nifty observation based on different examples.

If you start with:

- `n = 1101100 & n-1 = 1101011 => 1101000`
- `n = 1101000 & n-1 = 1100111 => 1100000`
- `n = 1100000 & n-1 = 1011111 => 1000000`
- `n = 1000000 & n-1 = 0111111 => 0000000`

So this iterates 4 times. Each iteration removes the least significant bit that is set to `1`.

Decrementing by one flips the lowest bit and every bit up to the first `1`. For example, if you have `1000000`, then `1000000 - 1 = 0111111`. This flips the lowest bit and all bits up to the first `1`, leaving any other bits unchanged. When you perform `n & (n - 1)`, only the lowest bit set becomes `0`.

To apply this to our problem, we first calculate the XOR of the `start` and `goal` values. The `XOR` operation gives us a binary number where each `1` represents a position where the bits of `start` and `goal` differ. Our task now is to count how many such positions exist, which corresponds to counting the `1`s in the `XOR` result.

Here's where Brian Kernighan’s algorithm shines. Instead of iterating through all the bits of the `XOR` result, which would involve checking each bit individually, we directly target the `1`s. We repeatedly remove the lowest set bit by performing the operation `x = x & (x - 1)` on the XOR result. Each time we remove a set bit, we know there was a difference at that bit position between `start` and `goal`. We count how many times we can perform this operation until the number becomes `0`.

This is efficient because it skips over the `0` bits entirely, focusing only on the positions that matter—the ones where the bits differ.

![Brian_Kernighan](../Figures/2220/Brian_Kernighan.png)

#### Algorithm

- XOR `start` and `goal` to find differing bits. Store the result in `xorResult`.
- Initialize a counter `count` to zero for counting differing bits.
- Count the number of 1s in `xorResult` (differing bits) using Brian Kernighan's algorithm:
  - While `xorResult` is not zero:
    - Clear the lowest set bit of `xorResult` by performing `xorResult &= (xorResult - 1)`.
    - Increment `count`.
- Return `count` as the number of bit flips needed to convert `start` to `goal`.

#### Implementation

<iframe src="https://leetcode.com/playground/fSQESEqd/shared" frameBorder="0" width="100%" height="293" name="fSQESEqd"></iframe>

#### Complexity Analysis

- Time complexity: $O(\text{number of set bits})$

  The algorithm iterates over the set bits in the XOR result. The number of iterations is equal to the number of set bits. For the worst case, where all bits are set, this is proportional to the number of bits, which is $O(30)$, effectively $O(1)$.

- Space complexity: $O(1)$

  Brian Kernighan’s Algorithm uses a constant amount of extra space regardless of the input size. It only requires space for variables and does not use additional data structures, so the space complexity is constant.

</br>

---

</br>

The problem can also be solved using built-in functions in different programming languages. These functions count the number of `1` bits in an integer, which directly gives us the number of bit flips needed.

1. C++: Use `__builtin_popcount(start ^ goal)`. This function counts the `1` bits in the result of `start ^ goal`. 
    - The code looks like this: `return __builtin_popcount(start ^ goal);`.

2. Java: Use `Integer.bitCount(start ^ goal)`. This method counts the `1` bits in the integer result of `start ^ goal`. 
    - The code looks like this: `return Integer.bitCount(start ^ goal);`.

3. Python: Use `(start ^ goal).bit_count()`. This method counts the 1 bits in the result of `start ^ goal`.
    - The code looks like this: `return (start ^ goal).bit_count()`.

---