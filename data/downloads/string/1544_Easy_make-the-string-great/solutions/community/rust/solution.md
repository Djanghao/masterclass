# Rust | Stack | One-liner | With Comments

**Author:** wallicent
**Votes:** 6
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/2792347/](https://leetcode.com/problems/make-the-string-great/solutions/2792347/)

---

# Intuition
Any character added can form an unwanted pair with the last character added to the result, so we want to ignore all those pairs.

# Approach
Treat the result string as a stack. For each character of `s`, check if it forms an unwanted pair with the top of the stack. Add only those characters that do not form unwanted pairs.

A one-liner is its own reward. :)

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
    pub fn make_good(s: String) -> String {
        s.chars().fold(String::new(), |mut rez, c2| {
            match (rez.pop(), c2) {
                (None, c2) => c2.to_string(),
                (Some(c1), c2) 
                    if c1 != c2 && c1.to_lowercase().eq(c2.to_lowercase())
                    => rez,
                (Some(c1), c2) => rez + &c1.to_string() + &c2.to_string(),
            }
        })
    }
}
```