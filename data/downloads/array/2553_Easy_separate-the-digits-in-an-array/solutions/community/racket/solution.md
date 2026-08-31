# Racket 100/100 (by default, few examples)

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3336840/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3336840/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The basic idea is to have one function which turns the individual numbers into lists of ints, and then do a map-flatten using that function.
# Approach
<!-- Describe your approach to solving the problem. -->
**num-to-int-list** appends the rightmost digit to the rest of the list; the rest of the list is obtained by recursively finding the digit list for n/10. The recursive stop condition is hit when n == 0.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) - we make a list for each integer in nums.

# Code
```
(define (num-to-int-list n)
  (if (zero? n) empty
    (append (num-to-int-list (quotient n 10)) (list (remainder n 10)))))
        
(define/contract (separate-digits nums)
  (-> (listof exact-integer?) (listof exact-integer?))
    (flatten (map num-to-int-list nums)))
```