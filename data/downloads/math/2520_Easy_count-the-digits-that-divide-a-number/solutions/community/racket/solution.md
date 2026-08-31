# Racket, 100%/100% (by default, too few examples)

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/3182353/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/3182353/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
I tried to use built-in methods as much as possible. "~v" converts the int to a string, "string->list" gets a list of characters, and "char->integer" (and subtracting the zero character's integer value) gets our list of numbers. And then I filter using a custom lambda function for the predicate.

It would also be possible to get the ints by successively mod'ing by ten and dividing by ten afterwards.

Please share a slicker method if you have it!

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) - this creates a list of the component integers, which could be avoided by using the other method listed above.

# Code
```
(define (num-components num)
    (let ((zeroval (char->integer #\\0)))
        (map (lambda (c) (- (char->integer c) zeroval)) (string->list (~v num)))
    )
)

(define/contract (count-digits num)
  (-> exact-integer? exact-integer?)
    (length (filter (lambda (n) (= 0 (modulo num n))) (num-components num)))
  )
```