# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/1580087/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/1580087/)

---

```
impl Solution {
    pub fn uncommon_from_sentences(s1: String, s2: String) -> Vec<String> {
        let mut map = std::collections::HashMap::new();
        s1.split(' ')
            .chain(s2.split(' '))
            .for_each(|s| *map.entry(s).or_insert(0) += 1);
        map.iter()
            .filter_map(|(key, val)| match *val == 1 {
                true => Some((*key).to_string()),
                false => None,
            })
            .collect::<Vec<_>>()
    }
}
```