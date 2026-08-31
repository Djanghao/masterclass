# Rust 0ms

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-game/solutions/5108020/](https://leetcode.com/problems/sum-game/solutions/5108020/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn sum_game(num: String) -> bool {
        let n = num.len() as u32;
        num
            .bytes()
            .zip(0..n)
            .fold(0, |acc, (b, i)| acc
                + if i < n / 2 { 1 } else { -1 }
                * if b == 63 { 9 } else { 2 * b as i32 - 96 }
            ) != 0
    }
}
```