# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/1597740/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/1597740/)

---

```
impl Solution {
    pub fn number_of_lines(widths: Vec<i32>, s: String) -> Vec<i32> {
        let (mut num_lines, mut last_line) = (0, 0);
        for width in s.as_bytes().iter().map(|b| widths[(*b - b'a') as usize]) {
            last_line += width;
            if last_line > 100 {
                last_line = width;
                num_lines += 1;
            }
        }
        vec![num_lines + 1, last_line]
    }
}
```