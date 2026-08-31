# BTreeMap - collect and iterate

**Author:** mknawara
**Votes:** 0
**Link:** [https://leetcode.com/problems/describe-the-painting/solutions/4232800/](https://leetcode.com/problems/describe-the-painting/solutions/4232800/)

---

# Code
```
use std::collections::BTreeMap;

#[inline]
fn inc(hm: &mut BTreeMap<i32, i64>, k: i32, v: i64) {
    let v = match hm.get(&k) {
        Some(&x) => x + v,
        None => v,
    };
    hm.insert(k, v);
}

impl Solution {
    pub fn split_painting(segments: Vec<Vec<i32>>) -> Vec<Vec<i64>> {
        let mut hm: BTreeMap<i32, i64> = BTreeMap::new();
        segments
            .iter()
            .for_each(|segment| match segment.as_slice() {
                [start, end, color] => {
                    inc(&mut hm, *start, *color as i64);
                    inc(&mut hm, *end, (-1 * color) as i64);
                }
                _ => panic!("shouldn't happen"),
            });

        let mut iter = hm.iter();
        let (&(mut p), &acc) = iter.next().unwrap();
        let mut acc = acc as i64;
        let mut res: Vec<Vec<i64>> = vec![];
        iter.for_each(|(&e, &k)| {
            if acc > 0 {
                let v = vec![p as i64, e as i64, acc];
                res.push(v);
            }
            p = e;
            acc += k as i64;
        });
        res
    }
}
```