# Rust Fisher–Yates shuffle

**Author:** wddwycc
**Votes:** 3
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/1350537/](https://leetcode.com/problems/shuffle-an-array/solutions/1350537/)

---

```rust
use rand::distributions::Uniform;
use rand::prelude::*;

struct Solution {
    origin: Vec<i32>,
    shuffled: Vec<i32>,
    rng: ThreadRng,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Solution {
    fn new(nums: Vec<i32>) -> Self {
        Self {
            origin: nums.clone(),
            shuffled: nums,
            rng: thread_rng(),
        }
    }

    /** Resets the array to its original configuration and return it. */
    fn reset(&mut self) -> Vec<i32> {
        self.shuffled = self.origin.clone();
        self.origin.clone()
    }

    /** Returns a random shuffling of the array. */
    fn shuffle(&mut self) -> Vec<i32> {
        let n = self.shuffled.len();
        // NOTE: Fisher\u2013Yates shuffle
        for i in 0..(n - 1) {
            let uniform = Uniform::from(i..n);
            let j = self.rng.sample(uniform);
            self.shuffled.swap(i, j);
        }
        self.shuffled.clone()
    }
}
```