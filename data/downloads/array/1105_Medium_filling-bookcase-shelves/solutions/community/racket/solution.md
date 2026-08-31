# racket

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/5933151/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/5933151/)

---

# Code
```racket []
(define (min-height-shelves books shelfWidth)
  (let ([memo (make-hash)])

    (define (loop L i remshelfW maxh)
      (if (null? L)
          maxh
          (or
           (hash-ref memo (list i remshelfW) #f)
           (begin
             (let ([bookw (first (car L))]
                   [bookh (second (car L))])
               (let
                   ;; option1 if we put current book on new shelf
                   ([option-1-height (+ maxh
                                        (loop (cdr L)
                                              (add1 i)
                                              (- shelfWidth bookw)
                                              bookh))]
                    ;; option2 if we put current book on current shelf
                    [option-2-height (if (>= remshelfW bookw)
                                         (loop (cdr L)
                                               (add1 i)
                                               (- remshelfW bookw)
                                               (max maxh bookh))
                                         +inf.0)])
                   (hash-set! memo (list i remshelfW)
                              (exact-floor
                               (min option-1-height option-2-height)))
                 (hash-ref memo (list i remshelfW))))))))

    (loop books 0 shelfWidth 0)))
```