# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/3174804/](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/3174804/)

---

# Code
```
impl Solution {
    pub fn is_transformable(s: String, t: String) -> bool {
        let s = s
            .chars()
            .map(|c| c.to_digit(10).unwrap() as usize)
            .collect::<Vec<usize>>();
        let t = t
            .chars()
            .map(|c| c.to_digit(10).unwrap() as usize)
            .collect::<Vec<usize>>();
        let mut pos = vec![vec![]; 10];
        for i in 0..s.len() {
            pos[s[i]].push(i);
        }
        for &item_t in &t {
            let c = item_t;
            if pos[c].is_empty() {
                return false;
            }
            let p = pos[c][0];
            for item in pos.iter().take(c) {
                if !item.is_empty() && item[0] < p {
                    return false;
                }
            }
            pos[c].remove(0);
        }
        true
    }
}
```