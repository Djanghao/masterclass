# easy to read solution

**Author:** yvhnp
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/5323404/](https://leetcode.com/problems/number-of-changing-keys/solutions/5323404/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->


# Code
```
impl Solution {
    pub fn count_key_changes(s: String) -> i32 {
        let lowercase_s = s.to_lowercase();
        let mut last_char: char = s.chars().next().unwrap().to_lowercase().next().unwrap();
        let mut change_counter = 0;

        for c in lowercase_s.chars() {
            if c == last_char {
                continue;
            }
            change_counter += 1;
            last_char = c;
        }
        return change_counter;
    }
}
```