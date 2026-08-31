# Racket (Hash Table Counter)

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/1779352/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/1779352/)

---

This result is simple. The first function takes a list and makes a hash table of the frequencies

The second function:
1. generates a list from the input string
2. generates a hash map with the frequencies of each element
3. returns the first index where the hash frequency is 1
	4. if none are found, return -1 

```
(define (hash-table-counter ls)
  (let ([counts (make-hash)])
    (begin
      (for-each (lambda (v) (hash-update! counts v add1 0)) ls)
      counts)))

(define (first-uniq-char s)
  (let* ([vals (string->list s)]
         [counts (hash-table-counter vals)]
         [first-index (index-where vals (lambda (v) (= 1 (hash-ref counts v))))])
    (if first-index first-index -1)))
```