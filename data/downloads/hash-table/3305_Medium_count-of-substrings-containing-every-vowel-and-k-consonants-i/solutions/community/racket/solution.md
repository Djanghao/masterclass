# racket 839ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5999003/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5999003/)

---

# Code
```racket []
(define vowels (list #\\a #\\e #\\i #\\o #\\u))

(define (count-of-substrings word k)
  (let ([ans 0])
    (for ([left (string-length word)])
      (let* ([memo (make-hash)]
             [memo (update-dict memo (string-ref word left))])
        (for ([right (in-range (add1 left) (string-length word))])
          (update-dict memo (string-ref word right))
          (when (satisfy? memo k)
            (set! ans (add1 ans))))))
    ans))

(define (satisfy? memo k)
  (and (andmap (lambda (x) (= 1 (hash-ref memo x 0))) vowels)
       (= k (hash-ref memo #\\c 0))))

(define (update-dict memo a)
  (if (member a vowels)
      (hash-set! memo a 1)
      (hash-set! memo #\\c (add1 (hash-ref memo #\\c 0))))
  memo)

```