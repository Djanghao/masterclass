# Rust/Python sort only vowels and update the vowel with sorted value

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4281057/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4281057/)

---

# Intuition

What you can do is to extract only vowle letters from your string and sort them. Then look at original string and when you see a vowel, change it with a vowel from a sorted list (do not forget to maintain the position)


# Complexity
- Time complexity: $O(n \\log n)$ for sorting, but you can reduce it to $O(n)$ knowing that you have only 10 chars and use count sort
- Space complexity: $O(n)$

# Code
```Rust []
use std::collections::HashSet;

impl Solution {
  pub fn sort_vowels(s: String) -> String {
    let vowels = HashSet::from(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let mut all_vowels: Vec<_> = s.chars().filter(|c| vowels.contains(&c)).collect();
    all_vowels.sort_unstable();

    let (mut pos, mut res) = (0,  String::with_capacity(s.len()));
    for c in s.chars() {
      if vowels.contains(&c) {
        res.push(all_vowels[pos]);
        pos += 1;
      } else {
        res.push(c);
      }
    }

    return res;
  }
}
```
```python []
class Solution:
  def sortVowels(self, s: str) -> str:
    all_vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
    vowels = sorted([c for c in s if c in all_vowels])
    pos, res = 0, list(s)
    for i, c in enumerate(res):
      if c in all_vowels:
        res[i] = vowels[pos]
        pos += 1
    return ''.join(res)
```
