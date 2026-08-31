# 0ms Rust Solution

**Author:** aofdev
**Votes:** 14
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/1373967/](https://leetcode.com/problems/move-zeroes/solutions/1373967/)

---

Runtime: 0 ms
Memory Usage: 2.2 MB

## Using [.retain()](https://doc.rust-lang.org/std/vec/struct.Vec.html#method.retain)
## 
```
impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut z = Vec::new();
        nums.retain(|x| {
         if *x != 0 { true } else { z.push(0); false }
        });
        &nums.append(&mut z);
    }
}
```
## Two lines version using [.drain_filter()](https://github.com/rust-lang/rust/issues/43244) 
##
There's an unstable nightly feature called **drain_filter** that does exactly what you want:
```
#![feature(drain_filter)]

impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
         let mut zeroes = nums.drain_filter(|x| *x == 0).collect::<Vec<_>>();
         &nums.append(&mut zeroes);
    }
}
```