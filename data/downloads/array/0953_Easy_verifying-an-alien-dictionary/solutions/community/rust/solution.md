# Rust solution

**Author:** BigMih
**Votes:** 8
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/1556633/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/1556633/)

---

```
impl Solution {
    pub fn is_alien_sorted(words: Vec<String>, order: String) -> bool {
        let pos = |c: char| -> usize { (c as u8 - b'a') as usize };
        let mut ord = [0; 26];
        order.char_indices().for_each(|(ind, c)| ord[pos(c)] = ind);
        words
            .windows(2)
            .map(|pair| {
                let (w0, w1) = (&pair[0], &pair[1]);
                w1.chars()
                    .map(|c| ord[pos(c)])
                    .ge(w0.chars().map(|c| ord[pos(c)]))
            })
            .all(|x| x)
    }
}
```