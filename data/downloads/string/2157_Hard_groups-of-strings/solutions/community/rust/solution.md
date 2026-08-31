# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/groups-of-strings/solutions/3255038/](https://leetcode.com/problems/groups-of-strings/solutions/3255038/)

---

# Code
```
impl Solution {
    pub fn group_strings(words: Vec<String>) -> Vec<i32> {
        let mut m = std::collections::HashMap::new();
        let mut groups = 0;
        let mut max_size = 0;
        for w in words.iter() {
            let mut mask = 0;
            for ch in w.chars() {
                mask |= 1 << (ch as u8 - b'a');
            }
            *m.entry(mask).or_insert(0) += 1;
        }
        while !m.is_empty() {
            let mask = *m.iter().next().unwrap().0;
            let size = Self::dfs(mask, &mut m);
            max_size = max_size.max(size);
            groups += if size > 0 { 1 } else { 0 };
        }
        vec![groups, max_size]
    }

    fn dfs(mask: i32, m: &mut std::collections::HashMap<i32, i32>) -> i32 {
        let mut res = 0;
        let it = m.get(&mask);
        if it.is_none() {
            return res;
        }
        res += it.unwrap();
        m.remove(&mask);
        for i in 0..26 {
            res += Self::dfs(mask ^ (1 << i), m);
            for j in (i + 1)..26 {
                if ((mask >> i) & 1) != ((mask >> j) & 1) {
                    res += Self::dfs(mask ^ (1 << i) ^ (1 << j), m);
                }
            }
        }
        res
    }
}
```