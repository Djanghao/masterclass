# [Rust] One-line expression

**Author:** tiedyedvortex
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3606683/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3606683/)

---

If a bit is 0 in c, and that same bit is 1 in exactly 1 of a or b, then it takes 1 move to flip that bit. We can identify all of these bits with (a ^ b) & !c.

If a bit is 0 in c, and that same bit is 1 in both a and b, then it takes 2 moves to flip the bit in both a and b to be 0. We can identify these bits with (a & b) & !c.

If a bit is 1 in c, and that same bit is 0 in both a and b, then it takes 1 move to flip the bit in either a or b such that that bit is 1 in the OR-ed output. We can idenfity these bits with !(a | b) & c.


This would give us the expression:

```        
((a ^ b) & !c).count_ones()
+ ((a & b) & !c).count_ones() * 2
+ (!(a | b) & c).count_ones()
```

However, we can simplify further. Note that `(a^b)` and `(a & b)` have no bits in common. This means that, as long as we're just counting zeros, we can merge these into `(a|b)`, letting us change to:

```
((a | b) & !c).count_ones()
+ ((a & b) & !c).count_ones()
+ (!(a | b) & c).count_ones()
```

But then we also have both `((a | b) & !c)` and `(!(a | b) & c)`. Thes can be merged as well, into `((a | b) ^ c)`.

So our final answer is one line: `((a | b) ^ c).count_ones() + ((a & b) & !c).count_ones()`.

# Complexity
- Time complexity: O(1), we perform finitely many bitwise operations.

- Space complexity: O(1), no operations needed

# Code
```
impl Solution {
    pub fn min_flips(a: i32, b: i32, c: i32) -> i32 {  
        (((a | b) ^ c).count_ones()
        + ((a & b) & !c).count_ones()) as i32
    }
}
```