# Rust | Literally just Backtracking

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/3916816/](https://leetcode.com/problems/count-special-integers/solutions/3916816/)

---

# Intuition

Backtracking...

# Complexity
- Time complexity:
*Very high*

- Space complexity:
$$O(1)$$

# Code
```rust
pub fn solve(
    num: u64,
    threshold: u64,
    flag: u16,
    ret: &mut usize,
) {
    if num > threshold { return; }
    *ret += 1; // add current number

    if flag + 1 >= (1 << 10) { return; }

    for i in 0..10 {
        let flag_next = flag | (1 << i);
        if flag_next == flag { continue; }
        let num_next = num * 10 + i;

        // BEGIN backtracking
        solve(num_next, threshold, flag_next, ret);
        // END backtracking
    }
}

impl Solution {
    pub fn count_special_numbers(n: i32) -> i32 {
        let n = n as u64;
        
        let mut ret = usize::MIN;
        for i in 1..10 { solve(i, n, 1 << i, &mut ret); }
        ret as i32
    }
}
```