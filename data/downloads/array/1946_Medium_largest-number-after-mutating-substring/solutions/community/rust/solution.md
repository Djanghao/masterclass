# Rust iterators 0ms

**Author:** cthulhuden
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/3171310/](https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/3171310/)

---

# Intuition
Obviously to obtain bigger number, we must apply modification closer to start of the number. When first opportunity to increase the number is found, just follow up as long as we can, given that no digits can be decreased.

# Approach
Use iterators to solve problem elegantly

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn maximum_number(num: String, change: Vec<i32>) -> String {
        let mut bs = num.into_bytes();

        bs.iter_mut()
            .map(|b| {
                let new = change[(*b - b'0') as usize] as u8 + b'0';
                (b, new)
            })
            .skip_while(|(b, new)| **b >= *new)
            .take_while(|(b, new)| **b <= *new)
            .for_each(|(b, new)| *b = new);

        unsafe { String::from_utf8_unchecked(bs) }
    }
}

```