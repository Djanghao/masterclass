# rust solution

**Author:** FuNn1esT
**Votes:** 16
**Link:** [https://leetcode.com/problems/shuffle-the-array/solutions/840292/](https://leetcode.com/problems/shuffle-the-array/solutions/840292/)

---

```rust
impl Solution {
    pub fn shuffle(nums: Vec<i32>, n: i32) -> Vec<i32> {
        nums[..n as usize]
            .iter()
            .zip(nums[n as usize..].iter())
            .flat_map(|(&x, &y)| vec![x, y])
            .collect()
    }
}
```