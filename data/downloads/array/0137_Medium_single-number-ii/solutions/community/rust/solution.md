# [Rust] Concise solution with Ternary logic || Explained

**Author:** lambda_doll
**Votes:** 2
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/2389678/](https://leetcode.com/problems/single-number-ii/solutions/2389678/)

---

Looking back at "136. Single Number" problem, why did XOR operation have worked, really?
Sometimes, XOR can also be viewed as "addition modulo 2", thus cancelling bits that appear twice. But in current problem, we are required to cancel bits that appear 3 times, thus it would be reasonable consider "addition modulo 3". 
What kind of operator would satisfy such requirement? Obviously, in binary logic that would be impossible, but not in *ternary*!

Let's say we have a ternary variable `s`, which can take either of `{0, 1, 2}` states. An analogous XOR operator for ternary logic would look as following: `(s1 + s2) mod 3`
```
 s1\\s2 | 0 | 1 | 2 |
-------+---+---+---+
     0 | 0 | 1 | 2 |
     1 | 1 | 2 | 0 |
     2 | 2 | 0 | 1 |
-------+---+---+---+
```

Having achieved that, now there is a more practical question: how to best represent a ternary number (with many digits) on a binary computer? There are multiple ways to do so. In our case, we will model it with two binary numbers `a` and `b`:
```
 s | a | b |
---+---+---+
 0 | 0 | 0 |
 1 | 1 | 0 |
 2 | 0 | 1 |
---+---+---+
```

Let's apply addition modulus 3, and see how they behave:
```
 (a,b) | (0,0) | (1,0) | (0,1) |
-------+-------+-------+-------+
 (0,0) | (0,0) | (1,0) | (0,1) |
 (1,0) | (1,0) | (0,1) | (0,0) |
 (0,1) | (0,1) | (0,0) | (1,0) |
-------+-------+-------+-------+
```
Quite complex. But there is a resque: since we are adding only one binary number to a ternary one, truth table can  be simplified:
```
(a,b)\\x |   0   |   1   |
--------+-------+-------+
 (0,0)  | (0,0) | (1,0) |
 (1,0)  | (1,0) | (0,1) |
 (0,1)  | (0,1) | (0,0) |
--------+-------+-------+
```
Can you deduce the propositional formulas for both `a` and `b`? Here they are:
```asciidoc
a' = (a ^ x) & !b
b' = (a & x) | (b & !x)
```

After processing the entire array of numbers, since `a` represents the binary number as is, it can be returned as the result, and `b` is discarded.

Final code:
```rust
impl Solution {
  pub fn single_number(nums: Vec<i32>) -> i32 {
    nums.into_iter()
      .fold([0, 0], |[a, b], x|
        [ a ^ x & !b,
          a & x | b & !x ]
      )[0]
  }
}
```
