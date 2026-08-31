# [Rust] 3 solutions explained, one O(log(n)), and two O(1) one-liners. (0 ms, faster than 100%.)

**Author:** marccarre
**Votes:** 13
**Link:** [https://leetcode.com/problems/power-of-two/solutions/677042/](https://leetcode.com/problems/power-of-two/solutions/677042/)

---

### Brute force

We compute all powers of two until we have found one greater than or equal to `n`.
If it is equal, then `n` is a power of two, otherwise, it isn't.
N.B.: this solution works for negative values of `n` as `n <= 0 < 1 = 2^0`. 

```rust
impl Solution {
    pub fn is_power_of_two(n: i32) -> bool {
        let mut i = 0;
        while 2_i32.pow(i) < n {
            i += 1;
        }
        2_i32.pow(i) == n
    }
}
```

##### Performance

While the above `O(log(n))` solution is accepted in other languages (e.g. Python), in Rust, it fails with:

> Time Limit Exceeded

Let's try to optimise this.

### Counting bits

We can observe that if the bitwise representation of a _positive_ integer only has one bit set to 1, then it is a power of two, e.g.:

```
8 = 1000
4 = 0100
2 = 0010
1 = 0001
```

Note that negative integers have an additional bit set to 1 to encode their sign, so we need to check for that explicitly. This yields the following `O(1)` solution:

```rust
impl Solution {
    pub fn is_power_of_two(n: i32) -> bool {
        n > 0 && n.count_ones() == 1
    }
}
```

##### Performance

> Runtime: 0 ms, faster than 100.00% of Rust online submissions for Power of Two.

### Bitwise AND

We can observe that a power of two and its previous value have no bit in common, hence `&`-ing them should yield zero, e.g.:

```
8 = 1000
7 = 0111
  & ----
    0000
```

This yields the following `O(1)` solution:

```rust
impl Solution {
    pub fn is_power_of_two(n: i32) -> bool {
        n > 0 && (n & (n - 1)) == 0
    }
}
```

##### Performance

> Runtime: 0 ms, faster than 100.00% of Rust online submissions for Power of Two.
