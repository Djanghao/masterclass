# Rust/Python linear solution. Store positions in array

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5052610/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5052610/)

---

# Intuition
Similar to the [previous problem](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5052567/python-linear-solution-with-explanation/) but here instead of just recording whether a particular character was found, you store positions:

 - for lowercase you store the last position it was found
 - for uppercase you store the first position it was found
 
Then for each character (26 of them) you check if it was found and then that `lowercase[i] < uppercase[i]`

# Complexity

- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code


```Python []
class Solution:
  def numberOfSpecialChars(self, word: str) -> int:
    val_l = [-1] * 26
    val_u = [-1] * 26
    
    for i, c in enumerate(word):
      c = ord(c)
      if c >= 97:
        val_l[c - 97] = i
      elif val_u[c - 65] == -1:
        val_u[c - 65] = i
    
    res = 0
    for i in range(26):
      if val_l[i] > -1 and val_l[i] < val_u[i]:
        res += 1
    
    return res
```
```Rust []
impl Solution {
  pub fn number_of_special_chars(word: String) -> i32 {
    let (mut val_l, mut val_u) = ([0; 26], [0; 26]);
    let word = word.as_bytes();
    
    for i in 0 .. word.len() {
      if word[i] >= 97 {
        val_l[(word[i] - 97) as usize] = i + 1;
      } else if val_u[(word[i] - 65) as usize] == 0 {
        val_u[(word[i] - 65) as usize] = i + 1;
      }
    }
    
    let mut res = 0;
    for i in 0 .. 26 {
      if val_l[i] > 0 && val_l[i] < val_u[i] {
        res += 1;
      }
    }
    
    return res;
  }
}

```