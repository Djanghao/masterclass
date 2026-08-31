# Chunk chunk 0ms

**Author:** jkoudys
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008528/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008528/)

---

# Intuition
Because the input strings are even and the subslices are even, we don't need to be so clever. If you have "1001" it's the same as "1010", "0110", or "0101". All that matters is finding the pairs that don't match. We don't even need to care about starting from different slice beginnings either, or connecting slices together, as the minimum changes is the same.

# Approach
Rust's `chunks` is a pretty straightforward way to do this. Check which len-2 chunks have non-matching values and say that that's one required change. Count those and you have your answer.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```rust []
impl Solution {
    pub fn min_changes(s: String) -> i32 {
        s.as_bytes().chunks(2).filter(|chunk| chunk[0] != chunk[1]).count() as _
    }
}
```