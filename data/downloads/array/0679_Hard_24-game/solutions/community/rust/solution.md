# Rust || 1ms || beats 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/24-game/solutions/5314944/](https://leetcode.com/problems/24-game/solutions/5314944/)

---

# Complexity
- Time complexity: $$O(2^n) = O(2^4)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2^n) = O(2^4)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn judge_point24(mut cards: Vec<i32>) -> bool {
        let cards = cards.into_iter().map(|c| c as f64).collect::<Vec<_>>();
        fn prod_div_sum_diff(a: f64, b: f64) -> [f64; 6] {
            [a * b, if b == 0.0 {f64::MAX} else {a/b}, if a == 0.0 {f64::MAX} else {b/a},
            a + b, a - b, b - a]
        };
        fn dfs(cards: &Vec<f64>) -> bool {
            if cards.len() == 1 {
                return (cards[0] - 24.0).abs() < 0.001;
            }
            for i in 0..cards.len() {
                for j in i+1..cards.len() {
                    let mut new_cards = vec![];
                    for k in 0..cards.len() {
                        if k != i && k != j {
                            new_cards.push(cards[k]);
                        }
                    }
                    for &result in prod_div_sum_diff(cards[i], cards[j]).iter() {
                        if result == f64::MAX {
                            continue;
                        }
                        new_cards.push(result);
                        if dfs(&new_cards) {
                            return true;
                        }
                        new_cards.pop();
                    }
                }
            }
            false
        }
        dfs(&cards)
    }
}
```