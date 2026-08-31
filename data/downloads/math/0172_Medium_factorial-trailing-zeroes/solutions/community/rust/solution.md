# 0ms - Beats 100% - O(1) time complexity. Precalculates everything with a const fn!

**Author:** jkoudys
**Votes:** 0
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/5805177/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/5805177/)

---

# Intuition
We only need 10,000 possible inputs, and none of the 0-counts are particularly huge.

# Approach
I'm not a maths guy, so I just looked up how to count 0s using powers of 5. Maybe there's a way to use the n-1 count to more quickly count for n, but what's here compiles plenty fast. Runtime speed won't matter, because it's literally just an array lookup. We know the trailing 0s for all possible inputs, and it doesn't take a huge amount of memory either way.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(n)$$

# Code
```rust []
const MAX: usize = 10_001;

const fn trails() -> [usize; MAX] {
    let mut ret = [0; MAX];
    let mut n = 1usize;

    while n < MAX {
        let mut zeroes = 0;
        let mut fives = 5;

        while n / fives > 0 {
            zeroes += n / fives;
            fives *= 5;
        }
        ret[n] = zeroes;
        n += 1;
    }
    ret
}

const TRAILS: [usize; MAX] = trails();

impl Solution {
    pub fn trailing_zeroes(n: i32) -> i32 {
        TRAILS[n as usize] as _
    }
}
```