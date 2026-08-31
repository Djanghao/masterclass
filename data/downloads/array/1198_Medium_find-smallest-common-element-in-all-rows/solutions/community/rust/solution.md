# Rust simple solution

**Author:** wddwycc
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/1122045/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/1122045/)

---

```rust
impl Solution {
    pub fn smallest_common_element(mat: Vec<Vec<i32>>) -> i32 {
        let mat_len = mat.len();
        let mut dist = vec![0;10000];
        for nums in mat {
            for num in nums {
                dist[num as usize - 1] += 1;
            }
        }
        for i in 0..dist.len() {
            if dist[i] == mat_len {
                return i as i32 + 1;
            }
        }
        -1
    }
}
```