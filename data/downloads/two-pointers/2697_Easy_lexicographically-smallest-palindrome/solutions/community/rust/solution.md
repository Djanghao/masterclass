# Check if you need to change character, if yes, change to smaller

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/3546833/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/3546833/)

---

# Intuition
Check for every position until the half of the string, check if elements are the same:
 - if yes, nothing to be done
 - if no, modify one of them by changing it to a smaller character



# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code

```Rust []
impl Solution {
  pub fn make_smallest_palindrome(s: String) -> String {
    let l = s.len();
    let mut s: Vec<char> = s.chars().collect();
    for i in 0 .. l / 2 {
      if s[i] != s[l - i - 1] {
        let v = s[i].min(s[l - i - 1]);
        s[i] = v;
        s[l - i - 1] = v;
      }
    }

    return s.into_iter().collect();
  }
}
```
```python []
class Solution:
  def makeSmallestPalindrome(self, s: str) -> str:
    s, l = list(s), len(s)
    for i in range(l // 2):
      if s[i] != s[l - i - 1]:
        c = min(s[i], s[l - i - 1])
        s[i], s[l - i - 1] = c, c
    
    return ''.join(s)
```
