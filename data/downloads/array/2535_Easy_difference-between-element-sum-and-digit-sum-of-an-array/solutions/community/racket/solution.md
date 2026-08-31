# Conversion to string approach

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3070289/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3070289/)

---

# Intuition
Just convert numbers into strings then find the sum of digits

# Approach
I defined internal function `sum_digits` which handle one given number. If read from right to left. We convert number into string, then string into list of characters, then to list of strings, then to list of numbers - names of functions are self-explanatory. Then finding the difference between number itself and its sum of digits.

In the function `difference-of-sum` we first map `nums` array to their difference of itself and sum of digits, then summing them up using foldr.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
(define/contract (difference-of-sum nums)
  (-> (listof exact-integer?) exact-integer?)
   (foldr + 0 (map sum_digits nums)))

(define (sum_digits x)
(- x (foldr + 0 (map string->number (map string 
  (string->list (format "~v" x)))))))
```