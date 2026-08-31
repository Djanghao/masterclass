# Ruby solution, easy variable names

**Author:** user4658vo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/2740248/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/2740248/)

---

```
def kth_palindrome(queries, int_length)
  half_length = (int_length + 1) / 2
  first_palindrome = 10.pow(half_length - 1)
  max_palindromes = first_palindrome * 9
  queries.map do |query|
    if query > max_palindromes
      -1
    else
      left_part = (first_palindrome + query - 1).to_s
      right_part = left_part.reverse
      right_part[0] = '' if int_length.odd?
      (left_part + right_part).to_i
    end
  end
end
```