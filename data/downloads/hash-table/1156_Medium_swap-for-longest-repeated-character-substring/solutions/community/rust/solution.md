# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/3059448/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/3059448/)

---

# Code
```
impl Solution {
    pub fn max_rep_opt1(text: String) -> i32 {
        use std::collections::HashMap;

        fn good(w: &HashMap<char, usize>, m: &HashMap<char, usize>) -> bool {
            if w.len() == 1 {
                return true;
            }
            if w.len() > 2 {
                return false;
            }
            let mut a = '#';
            let mut b = '#';
            for k in w.keys() {
                if a == '#' {
                    a = *k;
                } else {
                    b = *k;
                }
            }
            if w[&a] == 1 && m.contains_key(&b) || w[&b] == 1 && m.contains_key(&a) {
                return true;
            }
            false
        }

        let mut m = HashMap::<char, usize>::new();
        for c in text.chars() {
            *m.entry(c).or_default() += 1;
        }

        let mut i = 0;
        let mut ans = 0;
        let mut w = HashMap::<char, usize>::new();
        for (j, c) in text.chars().enumerate() {
            *w.entry(c).or_default() += 1;
            *m.entry(c).or_default() -= 1;
            if m[&c] == 0 {
                m.remove(&c);
            }

            while !good(&w, &m) {
                *w.entry(text.chars().nth(i).unwrap()).or_default() -= 1;
                *m.entry(text.chars().nth(i).unwrap()).or_default() += 1;
                if w[&text.chars().nth(i).unwrap()] == 0 {
                    w.remove(&text.chars().nth(i).unwrap());
                }
                i += 1;
            }
            ans = ans.max(j - i + 1);
        }
        ans as i32
    }
}

```