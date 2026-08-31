# Rust solution

**Author:** BigMih
**Votes:** 5
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/1225507/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/1225507/)

---

```
impl Solution {
    pub fn check_zero_ones(s: String) -> bool {
        let (mut max_1, mut max_0) = (0, 0);
        let (mut cur_1, mut cur_0) = (0, 0);
        s.chars().for_each(|c| match c == '1' {
            true => {
                cur_0 = 0;
                cur_1 += 1;
                max_1 = max_1.max(cur_1)
            }
            false => {
                cur_1 = 0;
                cur_0 += 1;
                max_0 = max_0.max(cur_0)
            }
        });
        max_1 > max_0
    }
}
```