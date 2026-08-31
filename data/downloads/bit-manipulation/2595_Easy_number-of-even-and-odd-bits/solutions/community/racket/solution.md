# Racket, 100/100 (by default, few examples)

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3333655/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3333655/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Doing both even and odd bits in turn, then summing the outputs with car and cadr seemed too complicated to me. So I did the outputs separately and put them in the output list.

# Approach
<!-- Describe your approach to solving the problem. -->
The custom function **count-every-other-bit** adds the rightmost bit to the value of **count-every-other-bit** applied to (quotient n 4). This gets us the count of the bits at 0,2,4... To get the bits at 1,3,5... we divide the original n and pass it to the same function.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N), where N is the number of bits of n.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N) - we hold the (bitwise-and n 1) for each bit position as we recurse.

# Code
```
(define (count-every-other-bit n)
    (if (= 0 n) 0
        (+ (bitwise-and n 1) (count-every-other-bit (quotient n 4))))
)

(define/contract (even-odd-bit n)
  (-> exact-integer? (listof exact-integer?))
    (list (count-every-other-bit n) (count-every-other-bit (quotient n 2)))
  )
```