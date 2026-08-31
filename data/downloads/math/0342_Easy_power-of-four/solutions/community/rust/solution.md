# Rust | O(1) | With Comments

**Author:** wallicent
**Votes:** 7
**Link:** [https://leetcode.com/problems/power-of-four/solutions/2462582/](https://leetcode.com/problems/power-of-four/solutions/2462582/)

---

OK, let's establish first that what we are looking for is numbers that are (in binary) a single one followed by an even number of zeros. This can be understood by, e.g. 4^0 = 1, and 4*x = x << 2. To check that we have a single one we have a few options:

* `n > 0 && n & (n-1) == 0` works because `n-1` clears the lowest set bit in `n`, and sets the bits below that. So any set bits remaining after the `&` operation are those above the lowest set bit in `n`. Zero is a false positive for this test, so we have to include a test for that special case.
* `n.count_ones()` can translate into the `POPCNT` instruction on modern x86 processors, so a single instruction. Also more explicit and more readable in Rust, so I prefer that.

Then we we have to test if we have an even number of trailing zeros. Again a few options:

* `n & 0x55555555 != 0` or `n & 0xAAAAAAAA == 0` works because we are explicitly testing the allowed positions for the single set bit (`0x55555555` is ...0101 binary, and `0x55555555 == !0xAAAAAAAA`).
* `n.trailing_zeros()` can translate to the `TZCNT` instruction on modern x86 processors. Again a single instruction and more readable. Cheching that this number is even can be done by bit twiddling, e.g. `... & 1 == 0` (testing that the least significant bit is cleared), or by a modulo operation `... % 2 == 0`. Since the modulo operation is less cryptic to some, and translates to the same machine code as the explicit bit twiddling, I prefer that.

```
impl Solution {
    pub fn is_power_of_four(n: i32) -> bool {
        n.count_ones() == 1 && n.trailing_zeros() % 2 == 0
    }
}
```

If you try the code above in [Compiler Explorer](https://godbolt.org/), the `POPCNT` and `TZCNT` instructions are not used, even for optimized builds (e.g. `-C opt_level=2`). I don't actually know if the generated code is faster than it would be using the dedicated instructions. By the way, if you instead use the solution

```
impl Solution {
    pub fn is_power_of_four(n: i32) -> bool {
        n.leading_zeros() + n.trailing_zeros() == 31 && n.trailing_zeros() % 2 == 0
    }
}
```

you get a very short assembly output with dedicated bit-counting instructions (`BSR` and `BSF`).

