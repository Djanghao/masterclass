# 91ms find bitwise-ior

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5929208/](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5929208/)

---

# Intuition
Find the `bitwise-ior` of the input list of nums. Then count number of subsets that have the same `bitwise-ior`.

# Code
```racket []
(define (count-max-or-subsets nums)
  (let ([res 0]
        [target (apply bitwise-ior nums)])
    (let loop ([L nums] [path '()])
      (if (null? L)
          (when (= target (apply bitwise-ior path))
            (set! res (add1 res)))
          (begin
            (loop (cdr L) path)
            (loop (cdr L) (cons (car L) path)))))
    res))
```