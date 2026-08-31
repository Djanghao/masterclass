# DP:  recursive + iterative

**Author:** Meigumikato
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-texts/solutions/5149962/](https://leetcode.com/problems/count-number-of-texts/solutions/5149962/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn number_table() -> HashMap<&'static str, char> {
        // 2 abc
        // 3 def
        // 4 ghi
        // 5 jkl
        // 6 mno
        // 7 pqrs
        // 8 tuv
        // 9 wxyz
        HashMap::from([
            ("2", 'a'),
            ("22", 'b'),
            ("222", 'c'),
            ("3", 'd'),
            ("33", 'e'),
            ("333", 'f'),
            ("4", 'g'),
            ("44", 'h'),
            ("444", 'i'),
            ("5", 'j'),
            ("55", 'k'),
            ("555", 'l'),
            ("6", 'm'),
            ("66", 'n'),
            ("666", 'o'),
            ("7", 'p'),
            ("77", 'q'),
            ("777", 'r'),
            ("7777", 's'),
            ("8", 't'),
            ("88", 'u'),
            ("888", 'v'),
            ("9", 'w'),
            ("99", 'x'),
            ("999", 'y'),
            ("9999", 'z'),
        ])
    }

    pub fn top_down(
        pressed_keys: &str,
        memo: &mut [i32],
        table: &HashMap<&str, char>,
        i: usize,
    ) -> i32 {
        if i == pressed_keys.len() {
            return 1;
        }

        if memo[i] != -1 {
            return memo[i];
        }

        let mut res = 0;
        for x in 1..=4 {
            if x + i > pressed_keys.len() {
                break;
            }

            let sub_keys = &pressed_keys[i..i + x];
            if table.contains_key(sub_keys) {
                res += Self::top_down(pressed_keys, memo, table, i + x) % 1_000_000_007;
                res %= 1_000_000_007;
            }
        }

        memo[i] = res;
        res
    }

    pub fn bottom_up(pressed_keys: &str) -> i32 {
        let mut dp = vec![0; pressed_keys.len() + 1];
        let table = Self::number_table();

        dp[0] = 1;

        for i in 1..=pressed_keys.len() {
            for x in 1..=4 {
                if i < x {
                    break;
                }
                if table.contains_key(&pressed_keys[i - x..i]) {
                    dp[i] += dp[i - x] % 1_000_000_007;
                    dp[i] %= 1_000_000_007;
                }
            }
        }
        println!("{:?}", dp);
        *dp.last().unwrap()
    }

    pub fn count_texts1(pressed_keys: String) -> i32 {
        let mut memo = vec![-1; pressed_keys.len()];
        let table = Self::number_table();
        Self::top_down(&pressed_keys, &mut memo, &table, 0)
    }
    pub fn count_texts(pressed_keys: String) -> i32 {
        Self::bottom_up(&pressed_keys)
    }
}

```