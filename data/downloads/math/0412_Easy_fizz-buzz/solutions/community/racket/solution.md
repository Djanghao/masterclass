# Racket if you don't know Racket but aren't afraid of parentheses

**Author:** zelr0x
**Votes:** 0
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/4572292/](https://leetcode.com/problems/fizz-buzz/solutions/4572292/)

---

# Intuition
Disclaimer: I don't know fancy Racket things like streams, I only know a bit of Scheme.

- We need to build a list, so we better avoid other data intermediate structures if we can.

- To build a list fast, we have to add items to the front of it using cons.
- Our result items have to be in the normal order, i.e. from 1 to n. 

That means we have to move backwards, i.e. start from n and go all the way down to 0, each time consing the n-i item to the list, essentially building it in reverse.

# Approach
fb solves FizzBuzz for a single number
iter resursively builds a list from the end

Inner functions don't use arguments of the outer fizz-buzz function and both take one numeric parameter, so I intentionally named it the same as in the outer fizz-buzz function to avoid accidentally introducing a bug by referring to that outer parameter.


# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
(define/contract (fizz-buzz n)
  (-> exact-integer? (listof string?))
  (define (fb n)
    (let ([d3 (zero? (remainder n 3))]
          [d5 (zero? (remainder n 5))])
      (cond [(and d3 d5) "FizzBuzz"]
            [d3 "Fizz"]
            [d5 "Buzz"]
            [else (number->string n)])))
  (define (iter n acc)
    (if (zero? n)
        acc
        (iter (- n 1) (cons (fb n) acc))))
  (iter n '()))
```