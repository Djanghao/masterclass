# Rust | (170ms, 16 MB)

**Author:** RBird111
**Votes:** 3
**Link:** [https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/2851872/](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/2851872/)

---

Rust Solution ([170ms, 16 MB](https://leetcode.com/submissions/detail/850420343/)):
```rust
impl Solution {
    pub fn number_of_arithmetic_slices(nums: Vec<i32>) -> i32 {
        use std::collections::HashMap;

        let n = nums.len();
        let mut ans = 0;
        let mut map: Vec<HashMap<i64, i32>> = Vec::with_capacity(n);

        for i in 1..n {
            for j in 0..i {
                let diff: i64 = nums[i] as i64 - nums[j] as i64;

                let count = match map.len() {
                    0 => 0,
                    _ => *map[j].get(&diff).unwrap_or(&0),
                };

                if map.len() < i + 1 {
                    let n = i - map.len() + 1;
                    map.extend(vec![HashMap::new(); n]);
                }

                map[i]
                    .entry(diff)
                    .and_modify(|x| *x += count + 1)
                    .or_insert(count + 1);

                ans += count;
            }
        }
        ans
    }
}
```