# Rust; 0ms; 2.10MB; 1-liner; beats 100%

**Author:** JSusi
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/5767849/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/5767849/)

---

# Code
```rust []
impl Solution {
    pub fn area_of_max_diagonal(dimensions: Vec<Vec<i32>>) -> i32 {
        dimensions
            .into_iter()
            .max_by_key(|dim| (dim[0].pow(2) + dim[1].pow(2), dim[0] * dim[1]))
            .map(|dim| dim[0] * dim[1])
            .unwrap()
    }
}
```