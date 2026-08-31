# Ruby simple solution

**Author:** penk85
**Votes:** 6
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/1539657/](https://leetcode.com/problems/palindrome-number/solutions/1539657/)

---

Quick and easy solution in Ruby without converting to string (convert to array). 2 line solution.
```
def is_palindrome(x)
   return false if x < 0
    return x.digits.join.to_i == x
end
```