# Rust solution

**Author:** jayjay11
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/2790757/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/2790757/)

---

# Intuition
Reverse the vector. Find the spaces and reverse the sub vectors

# Approach
- Reverse the input vector
- Parse the reversed vector:
    - Find the space in the vector
    - When a space is found, reverse the sub vector between the previous and the current space positions
- Reverse the last word once out of the loop

# Complexity
- Time complexity:
I am thinking this is O(n ^ 3):
    - O(n) for reversing the string
    - O(n) for parsing the reversed string
    - O(n) for reversing the substrings

- Space complexity:
O(1) as vector is reversed in place.

# Code
```
impl Solution {
    pub fn reverse_words(s: &mut Vec<char>) {
        s.reverse();
        let mut prev = 0;
        for i in 0..s.len() {
            if s[i] == ' ' {
                s[prev..i].reverse();
                prev = i + 1;
            }
        }
        let slen = s.len();
        s[prev..slen].reverse();
    }
}
```