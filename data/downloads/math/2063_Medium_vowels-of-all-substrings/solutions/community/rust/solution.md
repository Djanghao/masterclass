# Functional Rust Solution

**Author:** rlaboulaye
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-of-all-substrings/solutions/5089523/](https://leetcode.com/problems/vowels-of-all-substrings/solutions/5089523/)

---

# Approach
For each vowel, find the number of substrings it could belong to by multiplying the number of possible starting positions by the number of ending positions for a substring containing that vowel. For a vowel at index i, a substring containing it could start anywhere from 0 to i and could end anywhere from i to the length of the whole string. This gives the number of substrings the form $$(i + 1) * (n - i)$$.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn count_vowels(word: String) -> i64 {
        let n = word.len() as i64;
        word.chars()
            .enumerate()
            .filter(|(i, c)| *c == 'a' || *c == 'e' || *c == 'i' || *c == 'o' || *c == 'u')
            .map(|(i, c)| i as i64)
            .fold(0i64, |acc, i| {
                acc + (i + 1) * (n - i)
            })
    }
}
```