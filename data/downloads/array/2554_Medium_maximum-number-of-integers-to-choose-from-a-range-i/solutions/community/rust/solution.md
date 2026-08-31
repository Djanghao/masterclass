# [Rust] Using a bit set | 0ms

**Author:** tmtappr
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6117894/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6117894/)

---

# Approach
Using a bit set provides the benefits of $O(1)$ lookup of values that were in `banned` without the hashing and table resolution overhead of `HashSet`. `BitSet` is very fast.

`bset` is populated while iterating over `banned`. Then the numeric range $[1, n]$ is iterated over until `sum` is too large. Numbers in `bset` are skipped.

`count` keeps track of the number of values that were added to `sum`.

# Complexity
- Time complexity: $O(len(banned) + n)$
- Space complexity: $O(1)$ 

# Code
```rust []
impl Solution {
    pub fn max_count(banned: Vec<i32>, n: i32, max_sum: i32) -> i32 {
        let mut bset  = BitSet::new(10_000);
        let mut sum   = 0;
        let mut count = 0;

        for num in banned {
            bset.set(num as usize);
        }

        for num in 1..=n as usize {
            if sum + num > max_sum as usize {
                break;
            }
            if !bset.get(num) {
                count += 1;
                sum   += num;
            }
        }
        count
    }
}

struct BitSet {
    bits: Vec<u64>,
}

impl BitSet {
    fn new(max: usize) -> Self {
        Self { bits: vec![0; (max + 63) / 64] }
    }
    fn set(&mut self, num: usize) {
        self.bits[num / 64] |= 1 << (num % 64);
    }
    fn get(&self, num: usize) -> bool {
        self.bits[num / 64] >> (num % 64) & 1 == 1
    }
}
```