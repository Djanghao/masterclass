# Rust || O(n) || 0ms

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5266457/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5266457/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn remove_trailing_zeros(num: String) -> String {
        let sc = num.chars().collect::<Vec<_>>();
        let mut i = sc.len()-1;
        while sc[i] == '0' {
            i -= 1;
        }
        sc[..=i].iter().collect()
    }
}
```