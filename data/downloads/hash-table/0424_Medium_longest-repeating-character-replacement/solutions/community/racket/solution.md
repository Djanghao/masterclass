# Optimal O(n) time, constant space idiomatic Racket solution

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/4472242/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/4472242/)

---

# Intuition
Another standard approach using two pointers for a sliding window.

# Code
```
(define (most-common ht)
    (car
    (for/fold ([max-freq (cons #\\x -1)])
              ([(k v) ht])
        (argmax cdr (list max-freq (cons k v))))))

(define (character-replacement s k)
  (define (go left right cts max-len)
    (if (= right (string-length s)) max-len
    (let* ([cts-new (hash-update cts (string-ref s right) add1 0)]
           [common (most-common cts-new)]
           [window-len (add1 (- right left))])
        (cond [(<= (- window-len (hash-ref cts-new common)) k) (go left 
                                                                   (add1 right)
                                                                   cts-new 
                                                                   (max window-len max-len))]
              [else (go (add1 left)
                        right
                        (hash-update cts (string-ref s left) sub1)
                        max-len)]))))
    (go 0 0 (hash) 0))
```