# Racket, recursive, 100%/100% (by default, too few examples)

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/3194948/](https://leetcode.com/problems/alternating-digit-sum/solutions/3194948/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Let's just leave the decision about whether the first digit is positive or negative until the end, by carrying along a boolean value "pos" and alternating it when we calculate the next digit.

At the end, if "pos" is true, flip the sign.

# Approach
<!-- Describe your approach to solving the problem. -->
Given the above, we look at the current sign and add n modulo 10 to the total if it's positive, and subtract it if it's negative.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n), where n is the number of digits.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
This is also O(n), because we are n calls deep when we return.

# Code
```
(define (alternating-sum n tot pos)
    (if (= 0 n)
        (if pos (- tot)
            tot)
        (if pos (alternating-sum (truncate (/ n 10)) (+ tot (modulo n 10)) (not pos))
            (alternating-sum (truncate (/ n 10)) (- tot (modulo n 10)) (not pos)))))

(define/contract (alternate-digit-sum n)
  (-> exact-integer? exact-integer?)
    (alternating-sum n 0 #t)
  )
```