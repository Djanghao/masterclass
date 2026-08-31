# Rust || Poor man's hashmap || TC O(n); SC O(1); 7 ms, 3 MB

**Author:** taconite
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761608/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761608/)

---

# Intuition
This is a standard dynammic programming problem for subsequences.  Since the input range is relatively small (\xB110k), our "hash function" can be an array index.  This is much faster than Rust's `std::collections::HashMap`'s default hashing function.

# Approach
The `offset` function is the hash function.  Inputs that are out of range are implicitly zero, which is implemented with `Option`.  Alternatively, make the array one element longer, leave that space unused (*i.e.*, always `== 0`), and return that space's index.

# Complexity
- Time complexity: $$O(n)$$ because each `arr[i]` is visited once.

- Space complexity: $$O(1)$$ because we always allocate the same space: a vector of \u224820k `i32`s.

# Code
```
const RANGE_MIN: i32 = -10_000;
const RANGE_MAX: i32 = 10_000;

impl Solution {
    pub fn longest_subsequence(arr: Vec<i32>, difference: i32) -> i32 {
        let range = (RANGE_MAX - RANGE_MIN + 1) as usize;
        fn offset(i: i32) -> Option<usize> {
            if RANGE_MIN <= i && i <= RANGE_MAX {
                Some((i - RANGE_MIN) as usize)
            } else {
                None
            }
        }
        /// "Length when last seen"; longest subseq when we last saw that arr[i] value
        let mut lwls = vec![0_i32; range];
        let mut best = 1;
        for &a in arr.iter().rev() {
            let old = offset(a + difference).map(|i| lwls[i]).unwrap_or(0);
            let new_idx = offset(a).unwrap();  // safety: problem constraints
            let len = lwls[new_idx].max(old + 1);
            lwls[new_idx] = len;
            best = best.max(len);
        }
        best
    }
}
```

# Alternative solution without Option\\<usize\\>
+ Time: 14 ms
+ Space: 3.18 MB

## Speculation as to why this is slower
The always-empty space involves looking up an address in RAM.  This is slow.  If the address is not in L1 cache with the rest of the data, then this will be even slower.  Since L1 is usually only \u224832K or so and `lwls` is 80K, this probably happened repeatedly.

In contrast, the `Option<usize>` code above could put the zero directly in the CPU instruction (via `xor edx,edx`) and avoid the lookup altogether.

To see a disassembly, paste either code sample here:
https://godbolt.org/
Remember to remove the `impl Solution {` and `}` lines.

## Code
```rust
const RANGE_MIN: i32 = -10_000;
const RANGE_MAX: i32 = 10_000;
const RANGE: usize = (RANGE_MAX - RANGE_MIN + 1 + 1) as usize;

impl Solution {
    pub fn longest_subsequence(arr: Vec<i32>, difference: i32) -> i32 {
        fn offset(i: i32) -> usize {
            if RANGE_MIN <= i && i <= RANGE_MAX {
                (i - RANGE_MIN) as usize
            } else {
                RANGE - 1
            }
        }
        /// "Length when last seen"; longest subseq when we last saw that arr[i] value
        let mut lwls = vec![0_i32; RANGE];
        let mut best = 1;
        for &a in arr.iter().rev() {
            let old = lwls[offset(a + difference)];
            let new_idx = offset(a);
            let len = lwls[new_idx].max(old + 1);
            lwls[new_idx] = len;
            best = best.max(len);
        }
        best
    }
}
```
