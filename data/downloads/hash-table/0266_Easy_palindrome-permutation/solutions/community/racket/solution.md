# Racket with hash

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/4543181/](https://leetcode.com/problems/palindrome-permutation/solutions/4543181/)

---

# Approach
A palindrome will either have every letter being a multiple of 2, or a single letter being a multiple of 1 and the rest a multiple of 2. 

This code makes a counter of the characters in the string, then checks if there is < 2 counts that are odd

# Code

```scheme
(define (hash-table-counter ls)
  (let ([counts (make-hash)])
    (for-each (lambda (v) (hash-update! counts v add1 0)) ls)
    counts))

(define (can-permute-palindrome s)
  (let* ([strls (string->list s)]
         [hsh (hash-table-counter strls)])
    (match (hash-keys hsh)
      [(list _) #t]
      [_ (match-let ([(list 1-mults _)
                      (call-with-values (\u03BB () (partition odd? (hash-values hsh))) list)])
           (< (length 1-mults) 2))])))
```