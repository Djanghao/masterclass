# cases: zero, one and many

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/5235641/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/5235641/)

---

```
impl Solution {
    pub fn reorder_spaces(text: String) -> String {
        let w = text.split_ascii_whitespace().collect::<Vec<_>>();
        let k = text.len() - w.iter().map(|w|w.len()).sum::<usize>();
        let n = w.len();
        let (pad, r) = match w.len() {
            0 => ("".to_string(), k),
            1 => ("".to_string(), text.len() - w[0].len()),
            _ => (" ".repeat(k/(n-1)), k % (n-1)),
        };
        println!("{} {} {}", w.len(), pad, r);
        format!("{}{}", w.join(&pad), " ".repeat(r))
    }
}
```