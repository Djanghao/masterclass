# Elegant Racket with foldr

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/1832316/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/1832316/)

---

The first two definitions just create 
```
'("a", "b", ..., "z")
'("1", "2", ..., "26#")
```

The idea of the algorithm is to do successive string replacements with the cipher backwards

```
(define letter-list
  (map (compose string integer->char)
       (inclusive-range (char->integer #\\a) (char->integer #\\z))))

(define cipher
  (append (map ~v (inclusive-range 1 9))
          (map (compose (curryr string-append "#") ~v) (inclusive-range 10 26))))

(define (freq-alphabets s)
  (foldr (\u03BB (a b str) (string-replace str a b)) s cipher letter-list))
```