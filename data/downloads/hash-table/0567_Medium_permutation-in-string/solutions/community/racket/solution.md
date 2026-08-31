# Rolling window, update dictionary of letter counts (215ms)

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/5875301/](https://leetcode.com/problems/permutation-in-string/solutions/5875301/)

---



# Code
```racket []
(define (check-inclusion s1 s2)
  (if (< (string-length s2) (string-length s1))
      #f
      (let* ([letters "abcdefghijklmnopqrstuvwxyz"]
             [s1c (letter-dict)]
             [s2c (letter-dict)])
        (for ([i (string-length s1)])
          (let ([ch1 (string-ref s1 i)]
                [ch2 (string-ref s2 i)])
            (hash-set! s1c ch1 (add1 (hash-ref s1c ch1)))
            (when (< i (sub1 (string-length s1)))
              (hash-set! s2c ch2 (add1 (hash-ref s2c ch2))))))
        (for/or ([i (add1 (- (string-length s2) (string-length s1)))])
          (let ([ch2 (string-ref s2 i)]
                [nch2 (string-ref s2 (+ i (sub1 (string-length s1))))])
            (hash-set! s2c nch2 (add1 (hash-ref s2c nch2)))
            (if (equal? s1c s2c)
                #t
                (begin
                  (hash-set! s2c ch2 (sub1 (hash-ref s2c ch2)))
                  #f)))))))

(define (letter-dict)
  (make-hash (for/list ([ch "abcdefghijklmnopqrstuvwxyz"]) (cons ch 0))))
```