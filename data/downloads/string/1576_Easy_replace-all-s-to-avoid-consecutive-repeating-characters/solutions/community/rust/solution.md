# Rust - Simple, 100%

**Author:** jrockett
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/5369399/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/5369399/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
pub fn modify_string(s: String) -> String {
    let mut modified = s.chars().collect::<Vec<_>>();

    for (ind, c) in s.char_indices() {
        if c == '?' {
            let prev = modified.get(ind - 1).copied();
            let next = modified.get(ind + 1).copied();

            match Solution::get_valid_char(prev, next) {
                Some(new_char) => modified[ind] = new_char,
                None => unreachable!(),
            };
        }
    }

    modified.iter().collect::<String>()
}

fn get_valid_char(prev: Option<char>, next: Option<char>) -> Option<char> {
    // Iterate from a to z
    for c in 97u8..=122u8 {
        let c = c as char;

        if Some(c) != prev && Some(c) != next {
            return Some(c);
        }
    }

    None
}
}
```