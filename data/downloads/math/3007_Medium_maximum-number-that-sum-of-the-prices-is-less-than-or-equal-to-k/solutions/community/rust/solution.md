# 3ms Rust, beats 100% | Explaination, Binary search (kinda)

**Author:** enderlord36
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/5368662/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/5368662/)

---

# Intuition
If we fix x and model the problem as a function of k, realise that f(k) is monotonically increasing function. Thus, binary search is a viable option. Here I have implemented a variation that constructs the result directly.

# Approach
We start with the most significant bit, at position i. If this bit is part of the result, then the result must be at least 2^i. If we can find the total price of 0 to 2^i, then we can compare against k to determine if the bit should be set. We repeat this until we reach the last bit.

## Part 1

The bit at position 0 has cycle length 2 (0, 1).
The bit at position 1 has cycle length 4 (0, 0, 1, 1).
...
\u2234The bit at position i has cycle length 2^(i + 1).

## Part 2
```txt
 dec |  bin
  0  | 0 | 00
  1  | 0 | 01
  2  | 0 | 10
  3  | 0 | 11
-----+---+----
  4  | 1 | 00
```

Consider the case i=2. This corresponds to the number 4 = 2^i, so all the bits before the ith bit would have just completed a cycle as their cycle lengths are all divisible by 2^i (4 and 2 are divisible by 4). Thus, there are an equal number of 0s and 1s in the top right rectangle. The number of 1s is:

```
1/2 * (width/x) * height
= 1/2 * i / x * 2^i
= (i / x * 2^i) >> 1
= (i / x) << i >> 1
```

We also need to add the number of 1s in 2^i. Since 2^i is a power of 2, it only has 1 bit set, so we add 1 if the bit is at one of the positions where it will count towards the price, as determined by x. The logic is encapsulated in `new_bits_price`.

## Part 3

```txt
 dec |  bin
  0  | 0 | 00
  1  | 0 | 0-
  2  | 0 | -0
  3  | 0 | --
-----+---+----
  4  | - | 00
  5  | 1 | 0-
-----+---+---
  6  | 1 | -0
```

The formula above only calculates the number of 1s on the right side of the numbers (which have been replaced with dashes). Let's say the result is currently 4 (100 base 2), and we want to know if we should incrase it to 6 (110 base 2). Now, we also need to calculate the number of 1s on the left side to get the total price increase.

After the first bit of the result has been set at index i, the possible range of result is now $$[2^i, 2^{i+1})$$. Notice that this means that the bit pattern of the first 63 - i bits are always fixed, and this applies even after multiple bits in the result have been set. We take advantage of this by keeping count of the number of 1s in this fixed pattern that count towards the price,

```rust
if (i + 1) % x == 0 {
    count += 1;
}
```

and since setting the ith bit corresponds to increasing the result by 2^i, we multiply it by 2^i before adding it to the total price increase. QED

```rust
let price = ... + (count << i);
```

# Complexity
- Time complexity:
$$O(d)$$, where d is the bit-width of the integer type

- Space complexity:
$$O(1)$$

# Code
```rust
impl Solution {
    pub fn find_maximum_number(mut k: i64, x: i32) -> i64 {
        let mut result: u64 = 0;
        let mut count: u64 = 0;
        // 2^45 * (45 + 1) > k <= 10^15
        // 49 is the smallest number bigger than or equal to all multiples
        // of 1 thru 8 that are smaller than or equal to 45
        let mut i: i32 = 49;
        while (i >= 0) {
            let price = new_bits_price(i as u32, x as u32) + (count << i);
            // If price is within budget, set the bit and reduce budget
            if (price <= k as u64) {
                result |= 1 << i;
                k -= price as i64;
                if (i + 1) % x == 0 {
                    count += 1;
                }
            }
            i -= 1;
        }
        result as i64
    }
}

fn new_bits_price(i: u32, x: u32) -> u64 {
    let mut price = u64::from(i / x) << i >> 1;
    if (i + 1) % x == 0 {
        price += 1
    }
    price
}

```