# 🟢🔴🟢 Easiest Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/5781680/](https://leetcode.com/problems/number-of-1-bits/solutions/5781680/)

---

## Intuition
The Hamming weight of a number is simply the count of `1` bits in its binary representation. To solve this, the idea is to inspect each bit of the number, count how many of them are set to `1`, and return the total count.

## Approach
1. **Bitwise Operation**:
   - We can repeatedly examine the least significant bit of the number by performing a bitwise AND operation with `1` (`n & 1`). If the result is `1`, that bit is set.
   - After checking each bit, shift the number to the right (`n >>= 1`) to move on to the next bit.
   
2. **Counting the Bits**:
   - While the number is not `0`, continue checking each bit, counting how many `1`s are present, and shift the number to the right until all bits are checked.

3. **Return the Count**:
   - Once the number has been fully shifted, return the count of `1`s.

## Complexity
- **Time Complexity**: $$O(\\log n)$$, where `n` is the integer input. The time complexity depends on the number of bits in the integer, which is proportional to the logarithm of the number.
  
- **Space Complexity**: $$O(1)$$, as we only use a constant amount of space regardless of the input size.

## Example Walkthrough

### Example 1
- **Input**: `n = 11` (binary `1011`)
- **Output**: `3`

#### Step-by-Step Execution:
1. `11 & 1 = 1`, so count increases to `1`, shift `n` to `101`.
2. `5 & 1 = 1`, count increases to `2`, shift `n` to `10`.
3. `2 & 1 = 0`, no change in count, shift `n` to `1`.
4. `1 & 1 = 1`, count increases to `3`, shift `n` to `0`.

Final result: 3 set bits.

## Code
```dart
class Solution {
  int hammingWeight(int n) {
    int ans = 0;
    while (n != 0) {
      ans += n & 1;
      n >>= 1;
    }
    return ans;
  }
}
