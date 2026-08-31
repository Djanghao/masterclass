# Rust using HashSet (and a bit of an explanation)

**Author:** c0x10
**Votes:** 1
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/1386588/](https://leetcode.com/problems/fair-candy-swap/solutions/1386588/)

---

The reasoning behind it: the total amount of candies that Alice has is `sum_a`. Similarly, the total amount of candies that Bob has is `sum_b`. For the candy swap to be fair, Alice gives a box `x` of candies to Bob and in exchange receives a box `y` of candies from Bob, such that `sum_a - x + y = sum_b - y + x`. If we move things around, then we get `((sum_a - sum_b) / 2) + y = x`. So, effectively, we need to check if there is a pair (`x`, `y`) that solves the equation. In other words, we iterate over Bob's boxes of candies, `y`, and check if the `((sum_a - sum_b) / 2) + y` exists in Alice's boxes of candies.

```rust
use std::collections::HashSet;

impl Solution {
    pub fn fair_candy_swap(alice_sizes: Vec<i32>, bob_sizes: Vec<i32>) -> Vec<i32> {
        let sum_a = alice_sizes.iter().sum::<i32>();
        let sum_b = bob_sizes.iter().sum::<i32>();
        let set_a = alice_sizes.iter().fold(HashSet::new(), |mut acc, x| {
            acc.insert(x);
            acc
        });
		
        for y in bob_sizes.iter() {
            let x = (sum_a - sum_b) / 2 + y;
            if set_a.contains(&x) {
                return vec![x, *y];
            }
        }
        
        unreachable!()
    }
}
```