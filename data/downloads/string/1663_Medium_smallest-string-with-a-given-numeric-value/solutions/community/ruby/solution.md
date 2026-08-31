# [Ruby] 3 lines. Intuitive + math solution with system of linear equations

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/944570/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/944570/)

---

# Algorithm

Search an answer in a form `aa...aa[LETTER]zz...zz`
Numeric Value of that string is a number of `a` chars * 1 + number of `z` chars * 26 + value of `LETTER`.

Min value of a string of len `n`  is `n` for string `aa...aaa`.
After decreasing needed sum (value of string result) by n count of `z` is `s / 25` (how many times 25 points fits in remaining value).

```ruby
CHARS = (1..26).zip('a'..'z').to_h
def get_smallest_string(n, s) # k is a sum
  s -= n
  z, r = s.divmod(25) # s = 25*z + r
  return 'z'*z if z == n
  'a'*(n-z-1) + CHARS[r+1] + 'z'*z
end
```

# Explicit math way to obtain the same solution
Search an answer in a form `aa...aa[LETTER]zz...zz` . `LETTER` is a character in a range `a..z`.
Numeric Value of that string is a number of `a` chars * 1 + number of `z` chars * 26 + value of `LETTER`.
Let `a` is a number of letters `a`, `z` is a number of letters `z`.
Compose a system of linear equations:

**\u23B0 a + z = n - 1** *(1)* , where `a >= 0`, `z >= 0`
**\u23B1 a + l + 26z = s** *(2)*, where`1 \u2264 l \u2264 26`.

from *(1)*:  **a = n - z - 1**, where `z <= n - 1`
then put this into *(2)*: &nbsp;**n-z-1+l+26z = s** &nbsp;&nbsp;&nbsp;*=>*&nbsp;&nbsp;&nbsp; **l-1+25z = s-n**  &nbsp;&nbsp;&nbsp;*=>*&nbsp;&nbsp;&nbsp;   **l-1 = (s-n)%25**, &nbsp;**z = (s-n)/25** (unless z == n)

```
def get_smallest_string(n, s)
  z, r = (s-n).divmod(25)
  return 'z'*z if z == n
  'a'*(n-z-1) + (97+r).chr + 'z'*z
end
```