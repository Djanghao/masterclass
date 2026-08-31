# Functional programming solution

**Author:** bearxy39
**Votes:** 2
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/1879368/](https://leetcode.com/problems/basic-calculator/solutions/1879368/)

---

The simplifed expression must start with a number, then an operation, then number again.... eventually ends with a number. So we will have two functions, one for processing number case and the other one for processing the operation case. 

When processing number case, we can pass the previous result as a partial applied function. If it's a negative number, no matter it has bracket, we can compose the `-` operation with the previous partial applied function, then pass the new function and recurrsively call the processing number function

Now, the only left thing is the brackets. We can meet `(` when processing number and meet `)` when processing operation. The functions need to maintain an operation stack for them. When we meet `(`, push the current operation to the stack. When we meet `)` we pop the lastest opeartion and apply it to  the current number.

Here is the implementation in Racket:
```
#lang racket

(define (char->num ch)
  (let ([v (- (char->integer ch) (char->integer #\\0))])
    (if (and (>= v 0) (<= v 9)) v #f)))

(define (get-num chars)
  (if (empty? chars) (cons #f '())
      (letrec ([imp (\u03BB(l rst)
                      (if (empty? l) (cons rst l)
                          (let ([v (char->num (car l))])
                            (if (not v) (cons rst l)
                                (imp (cdr l) (+ v (* 10 rst)))))))]
               [n (char->num (car chars))])
        (if (not n) (cons #f chars) (imp (cdr chars) n)))))

(define (process-num l op opStack)
  (let ([v (car l)])
    (cond
      [(char=? v #\\-) (process-num (cdr l) (compose1 op -) opStack)]
      [(char=? v #\\() (process-num (cdr l) identity (cons op opStack))]
      [else
       (let* ([parsed-num (get-num l)]
              [num (car parsed-num)]
              [rest-l (cdr parsed-num)])
         (process-op rest-l (op num)  opStack))])))

(define (process-op l num opStack)
  (if (empty? l) num
      (let ([v (car l)])
        (cond
          [(char=? v #\\+) (process-num (cdr l) (curry + num) opStack)]
          [(char=? v #\\-) (process-num (cdr l) (curry - num) opStack)]
          [(char=? v #\\)) (process-op (cdr l) ((car opStack) num) (cdr opStack))]
          [else (displayln (list l num))]))))

(define char!=? (compose1 not char=?))

(define (calculate s)
  (process-num
   (filter (curry char!=? #\\space) (string->list s))
   identity
   '()))
```

