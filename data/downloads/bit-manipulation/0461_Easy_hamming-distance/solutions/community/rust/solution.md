# [Rust] 2 solutions explained, O(1) using XOR, O(n) counting differences using bitwise operators.

**Author:** marccarre
**Votes:** 2
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/657935/](https://leetcode.com/problems/hamming-distance/solutions/657935/)

---

#### XOR

We can observe that:

```
    0011 = bin(3)
XOR 0101 = bin(5)
    ----
	0110 // -> the number of bits set to 1 gives us the hamming distance
```

This yields the following solution based on the [`count_ones()` method](https://doc.rust-lang.org/std/primitive.i32.html#method.count_ones):

```rust
impl Solution {
    pub fn hamming_distance(x: i32, y: i32) -> i32 {
        (x ^ y).count_ones() as i32
    }
}
```

As `count_ones()` is most likely implemented using a divide'n'conquer, `O(1)`, [SWAR algorithm](https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetParallel), this is likely to be the most efficient solution.

#### Counting differences

We can compare two numbers one bit (e.g. the least significant bit) at a time, and count differences, e.g.:

```
x = bin(3) = 0011
y = bin(5) = 0101

x & 1 = 0011 & 0001 = 1  ==  y & 1 = 0101 & 0001 = 1  // equal
x >>= 1; y >>= 1; // both are non-zero, continue:
x & 1 = 0001 & 0001 = 1  !=  y & 1 = 0010 & 0001 = 0  // NOT equal
x >>= 1; y >>= 1; // y is non-zero, continue:
x & 1 = 0000 & 0001 = 0  !=  y & 1 = 0001 & 0001 = 1  // NOT equal
x >>= 1; y >>= 1; // both are zero, stop.
```

This yields the following `O(n)` solution:

```rust
impl Solution {
    pub fn hamming_distance(mut x: i32, mut y: i32) -> i32 {
        let mut distance = 0;
        while x != 0 || y != 0 {
            if (x & 1) != (y & 1) {
                distance += 1;
            }
            x >>= 1;
            y >>= 1;
        }
        distance
    }
}
```