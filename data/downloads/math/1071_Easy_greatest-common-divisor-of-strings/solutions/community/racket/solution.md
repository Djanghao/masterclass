# racket string partition approach

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3945306/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3945306/)

---

# Approach
- take the greatest common divisor of both strings lengths
- grab the gcd length of either string
- check if both strings are only made up of that substring of gcd length. This is done using partition-n and all-equal
- if so, return the substring, else return ""

# Code
```

(define (partition-n ls n)
  (match (length ls)
    [0 '()]
    [(? (\u03BB (v) (< v n))) (list ls)]
    [_ (cons (take ls n)
             (partition-n (drop ls n) n))]))

(define (all-equal? ls [val (car ls)])
  (andmap (\u03BB (a) (equal? a val)) ls))

(define (gcd-of-strings str1 str2)
  (let* ([divisor (apply gcd (map string-length (list str1 str2)))]
         [sls1 (string->list str1)]
         [sls2 (string->list str2)]
         [ssub (take sls1 divisor)])
    ;; check if strings are both made up of only that subset
    (match (and (all-equal? (partition-n sls1 (length ssub)) ssub)
                (all-equal? (partition-n sls2 (length ssub)) ssub))
      [#t (list->string ssub)]
      [_ ""])))

```