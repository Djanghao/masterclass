# rust: single method chain

**Author:** bunnycode
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/4906737/](https://leetcode.com/problems/palindrome-permutation/solutions/4906737/)

---

# Code
```
impl Solution {
    pub fn can_permute_palindrome(s: String) -> bool {
        s.chars()
            // create a character count array
            .fold([0; 26], |mut acc, c| {
                acc[c as usize - 'a' as usize] += 1;
                acc
            })
            // filter the character count array for odd counts
            .iter().filter(|cc| *cc % 2 != 0)
            // check if number of odds is less than 2
            .count() < 2
    }
}
```