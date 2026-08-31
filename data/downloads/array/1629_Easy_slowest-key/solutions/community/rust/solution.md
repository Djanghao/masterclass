# Rust zip-fold solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/slowest-key/solutions/1182742/](https://leetcode.com/problems/slowest-key/solutions/1182742/)

---

```
impl Solution {
    pub fn slowest_key(release_times: Vec<i32>, keys_pressed: String) -> char {
        let (mut max_time, mut max_key) = (0, ' ');
        release_times
            .iter()
            .zip(keys_pressed.chars())
            .fold(0, |t_prev, (&t_cur, c)| {
                let delay = t_cur - t_prev;
                if delay > max_time || delay == max_time && c > max_key {
                    max_key = c;
                    max_time = delay;
                }
                t_cur
            });
        max_key
    }
}
```