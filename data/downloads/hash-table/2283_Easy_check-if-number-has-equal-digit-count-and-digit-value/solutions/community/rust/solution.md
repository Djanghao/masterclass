# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2087105/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2087105/)

---

```
impl Solution {
    pub fn digit_count(num: String) -> bool {
        let mut counter = [0; 10];
        let num_it = num.bytes().map(|b| (b - b'0') as usize);
        num_it.clone().for_each(|idx| counter[idx] += 1);
        num_it.enumerate().all(|(i, idx)| counter[i] == idx)
    }
}
```