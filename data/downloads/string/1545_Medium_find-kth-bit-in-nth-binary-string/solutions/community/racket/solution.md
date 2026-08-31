# racket 235ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5939150/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5939150/)

---


# Code
```racket []
(define (find-kth-bit n k)
  (let ([s "0"])
    (for ([i (in-range 1 n)])
      (set! s (string-append s "1" (invert-reverse s))))
    (string-ref s (sub1 k))))

(define (invert-reverse s)
  (let loop ([i 0] [path '()])
    (if (= i (string-length s))
        (apply string path)
        (if (char=? (string-ref s i) #\\0)
            (loop (add1 i) (cons #\\1 path))
            (loop (add1 i) (cons #\\0 path))))))
```