# My attempt at a Racket solution

**Author:** hunkyjimpjorps
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/1167498/](https://leetcode.com/problems/valid-parentheses/solutions/1167498/)

---

For anyone not familiar with Racket (a Scheme family language):

* it's a Polish notation language, where operators always come first; `(equal? a b)` is equivalent to `a == b` in other languages, and a function call is `(my-func x y z)`, parentheses required 
* iteration is idiomatically performed through recursion rather than `do-while` constructs or similar
* in Racket, all brackets are equivalent, and `[]` are only used for visual organization rather than any inherent syntax meaning; for instance, they are used here to distinguish the various conditional branches for `cond` 

```lisp
(define/contract 
  (is-valid s)
  (-> string? boolean?)
  ; break the input string into a list of 1-length strings
  (define bracket-stack
    (filter non-empty-string? (string-split s "")))
  ; testing functions for the stack parsing functions
  (define (matching-bracket? b1 b2)
    (or (and (equal? b1 "{") (equal? b2 "}"))
        (and (equal? b1 "(") (equal? b2 ")"))
        (and (equal? b1 "[") (equal? b2 "]"))))
  (define (is-opening-bracket? b1)
    (member b1 (list "(" "[" "{")))
  ; opening brackets are popped onto the left stack and are matched with closing brackets on the right stack
  (define (process-brackets lhs rhs)
          ; if both stacks are empty, then everything matched, so declare it valid
    (cond [(and (null? rhs) (null? lhs)) 
           #t]
		  ; if there's nothing in our left stack, move the top of the right stack over to the left stack
		  ; and continue
          [(and (not (null? rhs)) (null? lhs))
           (process-brackets (list (first rhs)) (drop rhs 1))]
          ; if we emptied the right stack but there's still something in the left stack, declare it invalid
		  [(and (null? rhs) (not (null? lhs)))
           #f]
          ; if the left stack has an opening bracket and the right stack has a matching closing bracket,
		  ; drop them both and continue with the updated stacks
		  [(matching-bracket? (last lhs) (first rhs))
           (process-brackets (drop-right lhs 1) (drop rhs 1))]
		  ; if the right stack has an opening bracket, put it onto the left stack and continue 
          [(is-opening-bracket? (first rhs))
           (process-brackets (append lhs (list (first rhs))) (drop rhs 1))]
		  ; if the right stack has a closing bracket but the left stack's opening bracket doesn't match,
		  ; or something else happened,
		  ; declare it invalid
          [else #f]))
  ; start the recursion with an empty left stack and everything in the right stack
  (process-brackets '() bracket-stack))
  ```