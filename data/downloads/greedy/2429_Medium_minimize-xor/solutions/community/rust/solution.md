# ✅ [C++, Rust] || Bit manipulation || Faster 100% || 4 lines only

**Author:** t86
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/3039079/](https://leetcode.com/problems/minimize-xor/solutions/3039079/)

---

**Intuition**
To calculate x
- At first, `num1` will be the `x` for which `x XOR num1` is minimal
- Now, to make bit counts same as `num2`, we either have to add `1` or remove `1`  in `num1`'s bit representation from least significant.

**Solution**
**C++**

```c++
class Solution {
public:
    int minimizeXor(int num1, int num2, int traverse = -1) {
        auto toAddInX = __builtin_popcount(num2) - __builtin_popcount(num1);
        while (toAddInX != 0) {
            auto isOne = num1 & (1 << ++traverse);
            if (toAddInX > 0 && !isOne) num1 |= 1 << traverse, toAddInX--;
            if (toAddInX < 0 && isOne) num1 ^= 1 << traverse, toAddInX++;
        }
        return num1;
    }
};
```

Above implementation is a more compact form of the approach below. Same logic.
```c++
class Solution {
public:
    // Method to minimize the xor value between num1 and num2
    int minimizeXor(int num1, int num2) {
        // num1 will be the `x` for which `x XOR num1` is minimal
        auto x = num1;
        // Calculate the difference in set bits between num2 and x. Can be positive or negative.
        auto toAddInX = __builtin_popcount(num2) - __builtin_popcount(x);
        // Initialize a variable to keep track of the current bit position
        int traverse = 0;
        // Loop until the difference in set bits is 0
        while (toAddInX != 0) {
            // Check if the current bit in x is set
            auto isOne = x & (1 << traverse);
            // If the difference in set bits is positive and the current bit is not set, set the bit and decrement the difference
            if (toAddInX > 0 && !isOne) {
                x |= 1 << traverse;
                toAddInX--;
            }
            // If the difference in set bits is negative and the current bit is set, unset the bit and increment the difference
            if (toAddInX < 0 && isOne) {
                x ^= 1 << traverse;
                toAddInX++;
            }
            // Move to the next bit
            traverse++;
        }
        // Return the modified value of x
        return x;
    }
};
```

**Rust**

```rust
impl Solution {
    pub fn minimize_xor(num1: i32, num2: i32) -> i32 {
        let (mut traverse, mut x) = (0, num1);
        let mut to_add_in_x = num2.count_ones() as i32 - num1.count_ones() as i32;
        while to_add_in_x != 0 {
            let is_one = x & (1 << traverse);
            if to_add_in_x > 0 && is_one == 0 {
                x |= 1 << traverse;
                to_add_in_x -= 1;
            }
            if to_add_in_x < 0 && is_one != 0 {
                x ^= 1 << traverse;
                to_add_in_x += 1;
            }
            traverse += 1;
        }
        x 
    }
}
```

**For more solutions, check out this \uD83C\uDFC6  [GITHUB REPOSITORY](https://github.com/MuhtasimTanmoy/playground) with over 1500+ solutions.**