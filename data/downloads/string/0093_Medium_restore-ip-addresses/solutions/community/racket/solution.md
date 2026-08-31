# 183ms brute force

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/5841664/](https://leetcode.com/problems/restore-ip-addresses/solutions/5841664/)

---

# Intuition
Brute force all partitions of 1-3 digits and check each one for validity. (N is only 12)

# Code
```racket []
(define (restore-ip-addresses s)
  (let ([sl (string->list s)]
        [res '()])
    (when (and (<= 4 (length sl) 12)
               (andmap char-numeric? sl))
      (let loop ([L sl] [groups '()])
        (cond ((null? L)
               (when (check-ip groups)
                 (set! res (cons (string-join (reverse groups) ".") res))))
              ((null? groups)
               (loop (cdr L) (cons (string (car L)) groups)))
              ((< 0 (string-length (car groups)) 3)
               (loop (cdr L)
                     (cons (string-append (car groups) (string (car L)))
                           (cdr groups)))
               (loop (cdr L) (cons (string (car L)) groups)))
              (else
               (loop (cdr L) (cons (string (car L)) groups))))))
    res))

(define (check-ip L)
  (and (= 4 (length L))
       (for/and ([s L])
         (and (<= 0 (string->number s) 255)
              (if (> (string-length s) 1)
                  (if (char=? #\\0 (string-ref s 0))
                      #f
                      #t)
                  #t)))))
```