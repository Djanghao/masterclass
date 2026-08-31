# Rust/Python O(n) time O(1) space with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/solutions/3933576/](https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/solutions/3933576/)

---

# Intuition
The problem has a very convoluted description. If you were able to read and understand it (which is very challenging), you can see that if the string `X..X` of size `n` starts at `i` (then ends at `i + n - 1`). And at another string it starts at `a` (ends at `a + n - 1`).

The value we care about will be `i + n - 1 - a`. And you see that the smaller the string will be the less this value can be. So we care only about strings of one character.

------------------

Using this information we will need to find the most left position of each character in the first string and the most right position of each character in the second string.

Now using this information for each such character we check the minimum distance between each characters and how many times is it seen.

# Complexity

- Time complexity: $O(n)$
- Space complexity: $(1)$

# Code
```Rust []
impl Solution {
  pub fn count_quadruples(s1: String, s2: String) -> i32 {
    let s1: Vec<char> = s1.chars().collect();
    let s2: Vec<char> = s2.chars().collect();

    let mut pos1 = vec![-1; 26];
    for i in 0 .. s1.len() {
      let v = s1[i] as usize - 'a' as usize;
      if pos1[v] == -1 {
        pos1[v] = i as i32;
      }
    }

    let mut pos2 = vec![-1; 26];
    for i in (0 .. s2.len()).rev() {
      let v = s2[i] as usize - 'a' as usize;
      if pos2[v] == -1 {
        pos2[v] = i as i32;
      }
    }

    let (mut res, mut min_d) = (0, i32::MAX);
    for i in 0 .. 26 {
      if pos2[i] != -1 && pos1[i] != -1 {
        let d = pos1[i] - pos2[i];
        if d < min_d {
          min_d = d;
          res = 1;
        } else if d == min_d {
          res += 1;
        }
      }
    }

    return res;
  }
}
```
```python []
class Solution:
  def countQuadruples(self, s1: str, s2: str) -> int:
    pos1 = [-1] * 26
    for i, c in enumerate(s1):
      if pos1[ord(c) - 97] == -1:
        pos1[ord(c) - 97] = i

    pos2 = [-1] * 26
    for i in range(len(s2) - 1, -1, -1):
      if pos2[ord(s2[i]) - 97] == -1:
        pos2[ord(s2[i]) - 97] = i

    res, d = 0, float('inf')
    for i in range(26):
      if pos2[i] != -1 and pos1[i] != -1:
        v = pos1[i] - pos2[i]
        if v < d:
          d, res = v, 1
        elif v == d:
          res += 1
    
    return res
```
