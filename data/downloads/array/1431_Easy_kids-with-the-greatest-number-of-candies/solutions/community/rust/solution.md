# Rust functional

**Author:** SaffatHasan
**Votes:** 3
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/1703324/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/1703324/)

---

```rust
impl Solution {
    pub fn kids_with_candies(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
        let most: i32 = *candies.iter().max().unwrap();
        
        candies.iter().map(|kid| {
            kid + extra_candies >= most
        }).collect()
        
    }
}
```