# rust iterators

**Author:** zakharovvi
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/2698221/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/2698221/)

---

```
impl Solution {
    pub fn frequency_sort(s: String) -> String {
        use std::collections::HashMap;

        let mut cnts = s
            .chars()
            .fold(HashMap::new(), |mut cnts, c| {
                *cnts.entry(c).or_insert(0) += 1;
                cnts
            })
            .into_iter()
            .collect::<Vec<_>>();
        cnts.sort_by(|a, b| b.1.cmp(&a.1));
        cnts.iter()
            .map(|(c, cnt)| String::from(*c).repeat(*cnt))
            .collect::<Vec<String>>()
            .join("")
    }
}
```