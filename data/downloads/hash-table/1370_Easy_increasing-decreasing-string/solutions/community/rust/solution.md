# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/1356668/](https://leetcode.com/problems/increasing-decreasing-string/solutions/1356668/)

---

```
impl Solution {
    pub fn sort_string(s: String) -> String {
        let mut res = String::with_capacity(s.len());
        let mut counter = [0; 26];
        let (mut incr, mut ind) = (1, 0);

        s.as_bytes()
            .iter()
            .for_each(|b| counter[(*b - b'a') as usize] += 1);

        while res.len() < s.len() {
            if counter[ind as usize] > 0 {
                res.push((b'a' + ind as u8) as char);
                counter[ind as usize] -= 1;
            };

            ind += incr;
            if ind < 0 || ind > 25 {
                ind = if ind < 0 { 0 } else { 25 }; // ind.clamp(0, 25) doesn't work in this old version of Rust
                incr *= -1;
            };
        }
        res
    }
}
```