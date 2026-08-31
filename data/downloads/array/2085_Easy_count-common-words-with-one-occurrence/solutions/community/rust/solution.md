# Rust || 2ms || beats 100%

**Author:** user7454af
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/5324271/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/5324271/)

---

# Complexity
- Time complexity: $$O(m+n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m+n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn count_words(words1: Vec<String>, words2: Vec<String>) -> i32 {
        let mut map1 = std::collections::HashMap::new();
        for w in words1.iter() {
            *map1.entry(w).or_insert(0) += 1;
        }
        let mut map2 = std::collections::HashMap::new();
        for w in words2.iter() {
            match map1.get(&w) {
                Some(1) => {
                    *map2.entry(w).or_insert(0) += 1;
                },
                _ => {}
            }
        }
        let mut count = 0;
        for (k, v) in map2.into_iter() {
            if v == 1 {
                count += 1;
            }
        }
        count
    }
}
```