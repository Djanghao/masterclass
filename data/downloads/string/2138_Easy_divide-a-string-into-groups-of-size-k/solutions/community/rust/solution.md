# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1696553/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1696553/)

---

```
impl Solution {
    pub fn divide_string(mut s: String, k: i32, fill: char) -> Vec<String> {
        let l = s.len();
        let ku = k as usize;
        let rem = l % ku;
        let parts = l / ku + (rem > 0) as usize;
        let mut res = Vec::with_capacity(parts);

        (0..ku - rem).for_each(|_| s.push(fill));
        for i in 0..parts {
            res.push(s[i * ku..(i + 1) * ku].to_string());
        }
        res
    }
}
```