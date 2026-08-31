# Racket solution

**Author:** rymaju
**Votes:** 1
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/1068488/](https://leetcode.com/problems/letter-case-permutation/solutions/1068488/)

---

Very straighforward solution, no weird tricks. I definied a helper to map and cons to make things more readable.

We first convert to a list of chars because car/cdr is much nicer than string-ref/substring

help will return the answer as a list of chars, so the output is a list of list of chars.

If its an empty string, then we have a list of an empty string (list of an empty list)

Otherwise in the numeric case we map our numeric character and cons it into all the permuations of the cdr
And in the char case we do the same thing twice, just with an upper and lower case character, we append both lists together.

We also use a let binding to only do the subproblem once, avoiding duplicate work.

I bet you could use accumulators or continuation passing style to make this even faster! I'll stop here for now though.

```scheme
(define/contract (letter-case-permutation S)
  (-> string? (listof string?))
  
    (define ch (string->list S))
    
    (define (map-cons a l)
        (map (lambda (d) (cons a d)) l))
    
    (define (help ch)
        (cond [(empty? ch) '(())]
              [(char-numeric? (car ch)) (map-cons (car ch) (help (cdr ch)))]
              [else (let ([rest-perm (help (cdr ch))])
                (append (map-cons (char-downcase (car ch)) rest-perm)
                        (map-cons (char-upcase (car ch)) rest-perm)))]))
                            
    (map list->string (help ch))
  )
```