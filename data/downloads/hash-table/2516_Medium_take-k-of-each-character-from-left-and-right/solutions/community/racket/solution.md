# racket 158ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6067286/](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6067286/)

---

# Intuition
Start with a frequence count of all characters. Then make a sliding window where we add/subtract from the frequency count as we adjust the window. Don't move the window in a certain direction if it means we aren't consuming enough of the new character.

# Code
```racket []
(define (take-characters s k)
  (let* ([N (string-length s)]
         [c (let ([d (make-hash)])
              (for ([ch (in-string s)])
                (hash-set! d ch (add1 (hash-ref d ch 0))))
              d)]
         [right 0]
         [mn N])
    (if (ormap (lambda (x) (< (hash-ref c x 0) k))
               '(#\\a #\\b #\\c))
        (set! mn -1)
        (for ([left N])
          (for ([r (in-range right N)]
                #:break (<= (hash-ref c (string-ref s r)) k))
            (hash-set! c (string-ref s r) (sub1 (hash-ref c (string-ref s r))))
            (set! right (add1 r)))
          (set! mn (min mn (+ left (- N right))))
          (hash-set! c (string-ref s left)
                     (add1 (hash-ref c (string-ref s left))))))
    mn))
```