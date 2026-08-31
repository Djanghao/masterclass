# Racket Solution

**Author:** gilbertsheng
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/3979612/](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/3979612/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```racket
(define/contract (minimum-replacement nums)
  (-> (listof exact-integer?) exact-integer?)
  (let ([reversed (reverse nums)])
    (let loop ([up-limit (car reversed)]
               [remaining (cdr reversed)]
               [count 0])
      (if (null? remaining)
          count
          (let ([current (car remaining)]
                [rest (cdr remaining)])
            (if (> current up-limit)
                (let ([n (exact-ceiling (/ current up-limit))])
                  (loop (quotient current n)
                        rest
                        (+ count (sub1 n))))
                (loop current rest count))))))
)
```