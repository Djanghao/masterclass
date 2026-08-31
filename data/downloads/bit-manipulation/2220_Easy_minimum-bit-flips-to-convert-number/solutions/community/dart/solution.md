# 🟢🔴🟢 Most Efficient Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5772795/](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5772795/)

---

## Intuition
The task is to determine the number of bit flips required to convert one integer (`start`) into another integer (`goal`). The key insight is that the XOR operation can help identify the differing bits between two numbers. Once the differing bits are known, counting the number of set bits (1s) in the result will give the number of flips required.

## Approach
1. **XOR Operation**:
   - Perform `start ^ goal`. This XOR operation highlights the differing bits between the two numbers, where the result will have a `1` for each position where the bits differ and `0` where they are the same.

2. **Count the Set Bits**:
   - Count how many 1s are present in the result of the XOR. Each `1` represents a bit that needs to be flipped to convert `start` to `goal`.

3. **Optimized Counting**:
   - Use the trick `xor = xor & (xor - 1)` to clear the lowest set bit in each iteration, which allows counting the set bits efficiently.

## Complexity

- **Time Complexity**: $$O(\\log n)$$, where `n` is the number of bits in the integers. We iterate over the number of set bits in the XOR result, which is at most the number of bits in the integer.

- **Space Complexity**: $$O(1)$$, as we only use a constant amount of extra space.

## Example Walkthrough

### Example 1
- **Input**: `start = 10`, `goal = 7`
- **Output**: `3`

#### Step-by-Step Execution:
1. XOR: `10 ^ 7 = 1100 ^ 0111 = 1011` (which is 11 in decimal).
2. Count the number of set bits in `1011`:
   - First iteration: `1011 & 1010 = 1010`, count = 1.
   - Second iteration: `1010 & 1001 = 1000`, count = 2.
   - Third iteration: `1000 & 0111 = 0000`, count = 3.
   
   The number of flips required is `3`.

### Example 2
- **Input**: `start = 3`, `goal = 4`
- **Output**: `3`

#### Step-by-Step Execution:
1. XOR: `3 ^ 4 = 0011 ^ 0100 = 0111` (which is 7 in decimal).
2. Count the number of set bits in `0111`:
   - First iteration: `0111 & 0110 = 0110`, count = 1.
   - Second iteration: `0110 & 0101 = 0100`, count = 2.
   - Third iteration: `0100 & 0011 = 0000`, count = 3.
   
   The number of flips required is `3`.

## Code
```dart
class Solution {
  int minBitFlips(int start, int goal) {
    int xor = start ^ goal;
    int count = 0;
    while (xor > 0) {
      xor = xor & (xor - 1);
      count++;
    }
    return count;
  }
}
