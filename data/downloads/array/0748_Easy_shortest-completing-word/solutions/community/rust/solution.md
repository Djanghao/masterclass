# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/1621072/](https://leetcode.com/problems/shortest-completing-word/solutions/1621072/)

---

```
impl Solution {
    pub fn shortest_completing_word(license_plate: String, words: Vec<String>) -> String {
        let mut counter_lic = [0; 26];
        license_plate
            .chars()
            .filter_map(|c| {
                if c.is_alphabetic() {
                    Some(c.to_ascii_lowercase())
                } else {
                    None
                }
            })
            .for_each(|c| counter_lic[((c as u8) - b'a') as usize] += 1);

        let mut short_word = String::new();
        for word in words.into_iter() {
            let mut counter_word = [0; 26];
            word.as_bytes()
                .iter()
                .for_each(|&b| counter_word[(b - b'a') as usize] += 1);

            if counter_lic
                .iter()
                .zip(counter_word.iter())
                .all(|(l, w)| *w >= *l)
                && (short_word.is_empty() || short_word.len() > word.len())
            {
                short_word = word;
            }
        }
        short_word
    }
}
```