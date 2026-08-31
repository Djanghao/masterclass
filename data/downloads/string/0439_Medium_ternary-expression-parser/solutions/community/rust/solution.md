# Rust/Python <15 lines (without cheating). Stack with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/3924433/](https://leetcode.com/problems/ternary-expression-parser/solutions/3924433/)

---

# Intuition

The problem is similar to general stack problems where you evaluate some math expression. But it has not really worked for me. Then I tried looking how I evaluate math expressions and this expression and noticed that here I do in backward. So I tried looking at a string in reverse.

So the idea it to look at each character in reverse and then:
- if you see `T` or `F` then it is possible that you have to evaluate the string. But this can be done only if right before this the character was `?`. If you evaluate then you take 2 elements from a stack and select first or second depending on whether the character is `T` or `F`. Now we need to figure out how to check for that previous character and what to store in stack
- instead of checking whether the previous character is `?`, we maintain a boolean `is_calc` which is set to `true` if you see a `?` and `false` at every other char.
- You need to store any character which is not `?` or `:`

This gives us an easy stack solution.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn parse_ternary(s: String) -> String {
    let (mut data, mut is_calc) = (Vec::new(), false);
    for c in s.chars().rev() {
      if c == '?' {
        is_calc = true;
      } else if is_calc & (c == 'T' || c == 'F') {
        let (v_t, v_f) = (data.pop().unwrap(), data.pop().unwrap());
        if c == 'T' {
          data.push(v_t);
        } else {
          data.push(v_f);
        }
        is_calc = false;
      } else if c != ':' {
        data.push(c);
      }
    }

    return data[0].to_string();
  }
}
```
```python []
class Solution:

  def parseTernary(self, s: str) -> str:
    data, is_calc = [], False
    for c in s[::-1]:
      if c == '?':
        is_calc = True
      elif c in ['T', 'F'] and is_calc:
        val_t, val_f = data.pop(), data.pop()
        data.append(val_t if c == 'T' else val_f)
        is_calc = False
      elif c != ':':
        data.append(c)
        is_calc = False
    
    return data[0]
```
