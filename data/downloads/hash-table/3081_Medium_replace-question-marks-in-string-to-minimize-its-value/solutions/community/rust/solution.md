# Rust/Python Linear solution with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4916457/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4916457/)

---

# Intuition
A very important obsertvation is that you can't do substitution greedily. When you just noticed a question mark you have no idea what to substitute it with. Lets assume that you can have only characters  `a, b, c` in a string (for simplicity). 

And now for example you see a string `abaabc?...` Technically the best greedy is `b`, but what if all next characters are `b`? So you need to go though all values in a string.

Second important observation is that all 26 characters are fully independent. And for a specific character `a` (which was seen `n` times) the total cost would be  `1 + 2 + ... + n`.

So you count all the values of each character and how many question marks you got. For example lets assume the values are `[5, 3, 4]` and you have 3 question marks. The best is to insert the value b (as it has the smallest count), then another b and so on. As you constantly need to check for minimum you use heap. 

This allows you to know which values do you need to insert. But because you need the find the smallest string, you have to sort the values and later substitute them for a question mark

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Rust []
use std::collections::BinaryHeap;

impl Solution {
  pub fn minimize_string_value(s: String) -> String {
    let mut s = s.as_bytes();
    let (mut cnts, mut cnt) = ([0; 26], 0);
    for i in 0 .. s.len() {
      if s[i] == 63 {
        cnt += 1;
      } else {
        cnts[s[i] as usize - 97] += 1;
      }
    }

    let mut data = BinaryHeap::with_capacity(26);
    for i in 0 .. 26 {
      data.push((-cnts[i], -(i as i32)));
    }

    let (mut values_insert, mut pos) = (Vec::with_capacity(cnt as usize), 0);
    for _ in 0 .. cnt {
      let (v, p) = data.pop().unwrap();
      values_insert.push(-p);
      data.push((v - 1, p));
    }

    values_insert.sort_unstable();
    let mut res = vec![0; s.len()];
    for i in 0 .. s.len() {
      if s[i] == 63 {
        res[i] = values_insert[pos] as u8 + 97;
        pos += 1;
      } else {
        res[i] = s[i];
      }
    }

    return unsafe { String::from_utf8_unchecked(res) };
  }
}
```
```python []
from heapq import heapify, heappop, heappush

class Solution:
  def minimizeStringValue(self, s: str) -> str:
    cnts, cnt = [0] * 26, 0
    for c in s:
      if c == '?':
        cnt += 1
      else:
        cnts[ord(c) - 97] += 1
    
    data = [(cnts[i], i) for i in range(26)]
    heapify(data)

    values_insert, pos = [], 0
    for _ in range(cnt):
      v, p = heappop(data)
      values_insert.append(p)
      heappush(data, (v + 1, p))

    values_insert.sort()
    res = list(s)
    for i in range(len(s)):
      if s[i] == '?':
        res[i] = chr(values_insert[pos] + 97)
        pos += 1

    return ''.join(res)
```