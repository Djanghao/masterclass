# Rust | 0ms | 1-liner

**Author:** JSusi
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/6054534/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/6054534/)

---

# Code
```rust []
impl Solution {
    pub fn most_frequent(nums: Vec<i32>, key: i32) -> i32 {
        nums.windows(2)
            .fold(std::collections::HashMap::<_, u32>::with_capacity(nums.len()), |mut map, win| {
                if win[0] == key { map.entry(win[1]).and_modify(|v| *v += 1).or_default(); }
                map
            })
            .into_iter()
            .max_by_key(|(_, v)| *v)
            .unwrap()
            .0
    }
}
```