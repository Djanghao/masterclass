# racket 60ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6004363/](https://leetcode.com/problems/string-compression-iii/solutions/6004363/)

---

# Code
```racket []
(define/contract (compressed-string word)
  (-> string? string?)
  (apply string
         (let loop ([i 0] [c 0] [prev #f])
           (if (>= i (string-length word))
               (list (string-ref (number->string c) 0) prev)
               (let ([cur (string-ref word i)])
                 (if (or (zero? i) (and (char=? cur prev) (> 9 c)))
                     (loop (add1 i) (add1 c) cur)
                     (cons (string-ref (number->string c) 0)
                           (cons prev
                                 (loop (add1 i) 1 cur)))))))))
```