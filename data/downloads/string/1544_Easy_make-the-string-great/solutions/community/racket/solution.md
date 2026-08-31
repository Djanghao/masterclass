# Racket ( recursive ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/4980062/](https://leetcode.com/problems/make-the-string-great/solutions/4980062/)

---

### Base Case
If the string is less than two characters long, it can't have adjacent letters that are the same, so return it as is.

### Recursive Reduction
Examine the first two characters:

If the characters are the same letter, removes characters and  then apply the same reduction logic on the rest of the string.

If the characters are not the same, keep the first character and recursively reduce the string starting at the second character.

### Iterate Until Stable
After running the reduction once over the entire string, compare the result with the original string. If they are identical, no further reduction is possible. If not, recursively reduce the reduced string.
```
(define/contract (make-good s)
  (-> string? string?)
  (letrec ((reduce (lambda (s)
                     (let ((len (string-length s))
                           (clist (string->list s)))
                       (cond ((< len 2) s)
                             ((let ((ord1 (char->integer (car clist)))
                                    (ord2 (char->integer (cadr clist))))
                                (= (abs (- ord1 ord2))
                                   32)) (reduce (substring s 2 len)))
                             (else (string-append (substring s 0 1)
                                                  (reduce (substring s 1 len)))))))))
    (let ((reduced-s (reduce s)))
      (if (string=? s reduced-s)
          s
          (make-good reduced-s)))))
```