# it's in rust

**Author:** sizbei
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4717889/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4717889/)

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
    pub fn first_palindrome(words: Vec<String>) -> String {
        for i in words {
            if i.chars().rev().collect::<String>() == i{
                return i;
            }
        }
        return "".to_string();
    }
}
```