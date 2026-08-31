# Shortest Palindrome using Rust

**Author:** dtapas26
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/3295814/](https://leetcode.com/problems/shortest-palindrome/solutions/3295814/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Add characters in beginning to make the whole string into Palindrome

# Approach
<!-- Describe your approach to solving the problem. -->
1. Reverse the original string and store it in a variable rev_str.
```
let rev_str = s.chars().rev().collect::<String>();
```
2. Iterate through each index i in the reversed string rev_str.
```
for i in 0..rev_str.len()
```
3. Check if the original string s starts with the suffix of rev_str from index i to the end.
```
if s.starts_with(&rev_str[i..])
```
4. If a palindrome suffix is found, prepend the remaining characters in rev_str to s to create the shortest palindrome.
```
return format!("{}{}", &rev_str[..i], s)
```
5. If no palindrome suffix is found, the entire reversed string rev_str must be added to the front of s to create the shortest palindrome.
```
format!("{}{}", &rev_str, s)
```

# Code
```
impl Solution {
    pub fn shortest_palindrome(s: String) -> String {
        let rev_str = s.chars().rev().collect::<String>();
        
        for i in 0..rev_str.len() {
            if s.starts_with(&rev_str[i..]) {
                return format!("{}{}", &rev_str[..i], s);
            }
        }

        format!("{}{}", &rev_str, s)
    }
}
```