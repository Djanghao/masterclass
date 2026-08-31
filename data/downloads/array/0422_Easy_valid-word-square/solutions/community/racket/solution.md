# Racket string-padding and for/and

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/4762510/](https://leetcode.com/problems/valid-word-square/solutions/4762510/)

---


# Code
```scheme
(define (valid-word-square words)
  (let* ([max-word-len (apply max (map string-length words))]
         [f-words (map (compose
                        string->list
                        (\u03BB (word) (if (< (string-length word) max-word-len)
                                      (string-append word (make-string (- max-word-len (string-length word)) #\\0))
                                      word)))
                       words)]
         [equal-cross-section?
          (\u03BB (x y)
            (let ([horizontal (list-ref f-words x)]
                  [vertical (map (curryr list-ref y) f-words)])
              (equal? horizontal vertical)))])
    (for/and ([i (in-range (length f-words))])
      (equal-cross-section? i i))))
```