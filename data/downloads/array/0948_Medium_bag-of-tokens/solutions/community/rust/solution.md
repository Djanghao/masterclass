# Rust | Greedy - Two pointers | 0ms | 100% faster | 100% smaller

**Author:** mehrishi
**Votes:** 2
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/2565709/](https://leetcode.com/problems/bag-of-tokens/solutions/2565709/)

---

```
impl Solution {
    pub fn bag_of_tokens_score(mut tokens: Vec<i32>, mut power: i32) -> i32 {
        tokens.sort_unstable();
        let mut i = 0usize;
        let mut j = tokens.len();

        let mut score = 0;
        let mut max_seen = 0;

        while i < j {
            if power >= tokens[i] {
                power -= tokens[i];
                score += 1;
                i += 1;
            } else if score > 0 {
                power += tokens[j-1];
                score -= 1;
                j -= 1;
            } else {
                break;
            }

            max_seen = max_seen.max(score);
        }

        max_seen
    }
}
```