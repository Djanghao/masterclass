# O(n) one liner (fastest solution on leetcode)

**Author:** marktyrkba
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4948416/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4948416/)

---

> .. almost oneliner

# Complexity
- Time complexity:
$$O(n)$$

# Code
```rust
macro_rules! c {
    ($ret: expr) => {{
        let r = $ret;
        if r.eq(&i32::MAX) { -1 } else { r }
    }};
}

impl Solution {
    pub fn minimum_subarray_length(n: Vec<i32>, k: i32) -> i32 {
        c!(n
        .iter()
        .enumerate()
        .fold((0, 0, i32::MAX, [0; 32]),
            |(mut i, mut t, mut ret, mut bits), (j, nj)|
            {
                t |= nj;
                (0..32).rev().for_each(|b| bits[b] += (nj >> b) & 1);
                while i <= j && t >= k {
                    ret = ret.min((j - i + 1) as i32);
                    (0..32).rev().for_each(|b| {
                        bits[b] -= (n[i] >> b) & 1;
                        if bits[b].eq(&0) { t &= !(1 << b); }
                    }); i += 1;
                } (i, t, ret, bits)
            }).2)
    }
}
```

> Inspired by: [CoderPriest's C++ solution](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/4948087/same-old-sliding-window-c)