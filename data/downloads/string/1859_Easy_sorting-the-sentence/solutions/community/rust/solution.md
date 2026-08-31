# Rust Simple Solution

**Author:** migash
**Votes:** 2
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1672026/](https://leetcode.com/problems/sorting-the-sentence/solutions/1672026/)

---

```
impl Solution {
    pub fn sort_sentence(s: String) -> String {
        let mut result = vec![""; s.split(" ").count()];
        for w_n in s.split(" ") {
            let (word, number) = w_n.split_at(w_n.len() - 1);
            result[number.parse::<usize>().unwrap() - 1] = word;
        }
        result.join(" ")
    }
}
```