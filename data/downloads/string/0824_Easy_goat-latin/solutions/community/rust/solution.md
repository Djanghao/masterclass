# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/goat-latin/solutions/1593022/](https://leetcode.com/problems/goat-latin/solutions/1593022/)

---

```
impl Solution {
    pub fn to_goat_latin(sentence: String) -> String {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let mut v = Vec::new();
        for (n, word) in sentence.split_ascii_whitespace().enumerate() {
            let trans_word = match word.starts_with(&vowels[..]) {
                true => word.to_string(),
                false => word[1..].to_string() + &word[..1],
            } + "ma";
            v.push(trans_word + &"a".repeat(n + 1))
        }
        v.join(" ")
    }
}
```