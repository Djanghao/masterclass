# Ruby, DivMod

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/5525358/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/5525358/)

---

# Code
```
def minimum_pushes(word)
  number_of_keys = 8

  quotient, modulus = word.length.divmod(number_of_keys)

  divisible_pushes = (1..quotient).sum { _1 * number_of_keys }
  remainder_of_pushes = modulus * (quotient + 1)

  divisible_pushes + remainder_of_pushes
end
```