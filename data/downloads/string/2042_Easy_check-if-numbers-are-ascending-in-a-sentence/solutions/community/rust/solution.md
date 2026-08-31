# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1527770/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1527770/)

---

```
impl Solution {
    pub fn are_numbers_ascending(s: String) -> bool {
        let mut num = 0;
        for n in s.split(' ').filter_map(|ss| ss.parse::<i32>().ok()) {
            match n > num {
                true => num = n,
                false => return false,
            }
        }
        true
    }
}
```