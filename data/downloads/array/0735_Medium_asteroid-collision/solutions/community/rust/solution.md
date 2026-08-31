# Rust simple solution

**Author:** sugyan
**Votes:** 5
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/904299/](https://leetcode.com/problems/asteroid-collision/solutions/904299/)

---

```rust
impl Solution {
    pub fn asteroid_collision(asteroids: Vec<i32>) -> Vec<i32> {
        let mut answer = Vec::new();
        for &asteroid in asteroids.iter() {
            answer.push(asteroid);
            while answer.len() > 1 && answer[answer.len() - 2] > 0 && answer[answer.len() - 1] < 0 {
                let l = answer.pop().unwrap();
                let r = answer.pop().unwrap();
                match r.cmp(&-l) {
                    std::cmp::Ordering::Less => answer.push(l),
                    std::cmp::Ordering::Equal => {}
                    std::cmp::Ordering::Greater => answer.push(r),
                }
            }
        }
        answer
    }
}
```