# Straightforward Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4354552/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4354552/)

---

# Code
```
(define/contract (char->ordinal char)
  (-> char-lower-case? exact-integer?)
  (- (char->integer char) 97)
)

(define/contract (count-characters words chars)
  (-> (listof string?) string? exact-integer?)
    (let ([count (make-vector 26 0)])
        (for ([i chars])
            (let ([j (char->ordinal i)])
            (vector-set! count j (add1 (vector-ref count j)))
            )
        )        
        
        (for/sum ([s words])
            (let ([tmp (vector-copy count)])
                (if 
                (for/and ([i s])
                    (let ([j (char->ordinal i)])
                    (vector-set! tmp j (sub1 (vector-ref tmp j)))
                    (if (negative-integer? (vector-ref tmp j)) #f #t)
                    )
                )
                (string-length s) 0
                )
            )
        )
    )
  )
```