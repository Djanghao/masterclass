# 0ms - Calculate the power of the integer in O(1) with this sneaky trick

**Author:** jkoudys
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/5893012/](https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/5893012/)

---

# Intuition
There's only 1000 possible integers. It's an easy case for a constant function.

# Approach
Brute-force calculate the 1000 possible powers. Any attempt at a more clever calculation is doomed because we're limited in constant-space to known-sizes, and any indirection is likely slower than just brute forcing the math. Not that it matters much as it's a miniscule extra bit of compile-time.

Since we have the powers all calculated ahead of time, mapping and sorting the Vec is trivial. I tested both a basic `Vec.sort_unstable` vs doing a min-heap, and found the sort profiled a little better. Rust's great at sorting Vecs, so let it do its thing.

# Complexity
- Time complexity:
$$O((hi - lo) log (hi -lo))$$
We're only bound by the number of entries in the range. They're all mappable in CPU cache since we're doing a simple map + sort. Sorts always tell half-truths about the time complexity since extra work in the algorithm is often handled in the most optimized space in hardware.

It could be brought down to $$O((hi - lo) log k)$$ if you use a min heap, but profiling shows this to be fruitless. It's a case of being too smart for one's own good.

- Space complexity:
$$O(n)$$

# Code
```rust []
const fn pows() -> [i32; 1000] {
    let mut pows = [0i32; 1000];
    let mut i = 0;
    while i < 1000 {
        let mut count = 0;
        let mut pow = i + 1;
        loop {
            if pow == 1 {
                pows[i] = count;
                i += 1;
                break;
            }
            count += 1;
            if pow % 2 == 0 {
                pow /= 2;
            } else {
                pow = 3 * pow + 1;
            }
        }
    }
    pows
}

const POWS: [i32; 1000] = pows();

impl Solution {
    pub fn get_kth(lo: i32, hi: i32, k: i32) -> i32 {
        let mut powers = (lo..=hi)
            .map(|v| {
                (POWS[v as usize - 1], v)
            })
            .collect::<Vec<_>>();
        powers.sort_unstable();
        powers[k as usize - 1].1
    }
}
```