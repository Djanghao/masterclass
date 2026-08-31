# Extremely fast and simple Racket solution using group-by and hashing

**Author:** hilalmufti
**Votes:** 1
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/4355720/](https://leetcode.com/problems/group-anagrams/solutions/4355720/)

---

# Code
```
(define (anagram s)
    (foldl (lambda (i acc) (hash-update acc (string-ref s i) add1 0))
           (hash)
           (range (string-length s))))

(define (group-anagrams strs)
  (group-by anagram strs))
```