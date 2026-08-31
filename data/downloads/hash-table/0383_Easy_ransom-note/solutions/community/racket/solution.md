# Racket Solution with Counting Approach

**Author:** funk443
**Votes:** 0
**Link:** [https://leetcode.com/problems/ransom-note/solutions/3362502/](https://leetcode.com/problems/ransom-note/solutions/3362502/)

---

For both ransom-note and magazine, make hash tables accordding to their characters.  For example, if ransom-note is "abccb", the hash table will look like:
```
#hash((#\\a . 1)
      (#\\b . 2)
      (#\\c . 2))
```

After we have the hash tables, we can iterate through the hash table of ransom-note (by converting hash table to alist,) and look up in the hash table of magazine to see if there are enough characters for us or not.

# Code
```
(define/contract (can-construct ransomNote magazine)
  (-> string? string? boolean?)
  (check-char (hash->list (count-char ransomNote)) (count-char magazine))
  )

(define (count-char sstring)
  (foldl (lambda (x hhash)
           (hash-set! hhash x (add1 (hash-ref hhash x 0)))
           hhash)
         (make-hash) (string->list sstring)))

(define (check-char llist hhash)
  (match llist
    ['() #t]
    [(cons (cons c n) xs)
     (if (>= (hash-ref hhash c 0) n)
         (check-char xs hhash)
         #f)]))

```