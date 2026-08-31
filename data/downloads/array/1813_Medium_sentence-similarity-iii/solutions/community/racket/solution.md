# Remove prefix and suffix, check whether one is empty (200ms)

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity-iii/solutions/5878655/](https://leetcode.com/problems/sentence-similarity-iii/solutions/5878655/)

---

# Intuition
If we strip the common prefix and the common suffix (which is the prefix of the reversed string) and at least one of the strings is empty, then the sentences are similar.

# Code
```racket []
(define (are-sentences-similar s1 s2)
  (match-let* ([(list s1 s2) (remove-prefix (string-split s1 " ")
                                            (string-split s2 " "))]
               [(list s1 s2) (remove-prefix (reverse s1)
                                            (reverse s2))])
    (or (null? s1) (null? s2))))

(define (remove-prefix L1 L2)
  (cond ((or (null? L1) (null? L2))
         (list L1 L2))
        ((equal? (car L1) (car L2))
         (remove-prefix (cdr L1) (cdr L2)))
        (else
         (list L1 L2))))
```