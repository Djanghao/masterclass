# Inefficient possibly but very Elixir-y

**Author:** stevensonmt
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-palindrome-ii/solutions/1967611/](https://leetcode.com/problems/valid-palindrome-ii/solutions/1967611/)

---

```
  def valid_palindrome(s), do: valid_palindrome(s, String.length(s))
  def valid_palindrome(_, l) when l < 2, do: true
  def valid_palindrome(s, l) do
    n = l - 2
    <<a::binary-size(1), b::binary-size(n), c::binary-size(1)>> = s
    (a == c and valid_palindrome(b, n)) || valid_deleted(a <> b, l - 1) || valid_deleted(b <> c, l - 1)
  end
  
  def valid_deleted("", _), do: true    
  def valid_deleted(_, 1), do: true
  def valid_deleted(s, l) do 
    n = l - 2
    <<a::binary-size(1), b::binary-size(n), c::binary-size(1)>> = s
    a == c and valid_deleted(b, n)  
  end
```
Passing the original string length as a parameter and decrementing it with each recursive call made this work. Calling String.length on each recursion was too slow and led to timeouts.