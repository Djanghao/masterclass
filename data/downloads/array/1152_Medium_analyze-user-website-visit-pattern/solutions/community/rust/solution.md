# Rust idiomatic solution

**Author:** pierrewang
**Votes:** 0
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/2234435/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/2234435/)

---

I also try using index instead of iterator in the triple for loop part, but the running time is worse.
```
impl Solution {
    pub fn most_visited_pattern(username: Vec<String>, timestamp: Vec<i32>, website: Vec<String>) -> Vec<String> {
        use std::collections::{HashMap, HashSet};
        let mut gathered: Vec<_> = username.into_iter().zip(timestamp.into_iter()).zip(website.into_iter()).collect();
        gathered.sort_unstable_by(|a, b| a.0.cmp(&b.0));
        let mut hm = HashMap::new();
        let mut cnt = HashMap::new();

        gathered.into_iter().for_each(|elem| { hm.entry((elem.0).0).or_insert(vec![]).push(elem.1); });
        
        for (_, v) in hm.iter() {
            let mut hs = HashSet::new();
            for (i1, s1) in v.iter().enumerate() {
                for (i2, s2) in v.iter().enumerate().skip(i1 + 1) {
                    for (_, s3) in v.iter().enumerate().skip(i2 + 1) {
                        hs.insert(format!("{},{},{}", s1, s2, s3));
                    }
                }
            }
            hs.into_iter().for_each(|s| *cnt.entry(s).or_insert(0) += 1 );
        }
        let res = cnt.iter().max_by(|x, y| x.1.cmp(y.1).then(y.0.cmp(x.0))).unwrap();
        res.0.split(',').map(|s| s.to_string()).collect()
    }
}
```