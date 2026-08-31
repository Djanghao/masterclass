# Racket solution O(n) with accumulators

**Author:** rymaju
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/1083931/](https://leetcode.com/problems/validate-stack-sequences/solutions/1083931/)

---

```scheme
(define/contract (validate-stack-sequences pushed popped)
  (-> (listof exact-integer?) (listof exact-integer?) boolean?)
  
  (define (validate-stack-sequence-acc? pushed popped stack)
    (if (empty? pushed) 
        (empty? popped)
        (let* ([stack (cons (car pushed) stack)]
               [res (remove-identical-prefixes popped stack)])
                 
          (validate-stack-sequence-acc? (cdr pushed) (car res) (cdr res)))))

  ;; [List-of Number] [List-of Number] -> [Pair [List-of Number] [List-of Number]]
  ;; removes elements from the front of stack and popped until they no longer match
  (define (remove-identical-prefixes popped stack)
    (if (and (cons? stack) (cons? popped) (= (car stack) (car popped)))
        (remove-identical-prefixes (cdr popped) (cdr stack))
        `(,popped . ,stack)))
  
  (validate-stack-sequence-acc? pushed popped '()))
```