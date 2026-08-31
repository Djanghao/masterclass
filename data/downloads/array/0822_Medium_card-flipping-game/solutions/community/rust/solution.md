# Rust 3ms 🔥 2.09Mb ☄️ One Liner Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/card-flipping-game/solutions/5474252/](https://leetcode.com/problems/card-flipping-game/solutions/5474252/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn flipgame(fronts: Vec<i32>, backs: Vec<i32>) -> i32 {
        fronts.iter()
        .zip(backs.iter())
        .filter(|(x, y)| x == y)
        .fold(
            fronts.iter()
            .chain(backs.iter())
            .fold([false; 2001], 
            |mut v, i| {v[*i as usize] = true; v}),
        |mut v, (x, _)| {v[*x as usize] = false; v})
        .into_iter()
        .enumerate()
        .take_while(|(_, x)| *x == false)
        .last()
        .filter(|(i, _)| *i < 2000)
        .map_or(0i32, |(i, _)| i as i32 +1)
    }
}
```