# Easy Racket solution ;)

**Author:** ellie_yotkova
**Votes:** 5
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/2997595/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/2997595/)

---

# Approach
Racket's foldl function is almost the same as the for loop in C, C++, Java. The first argument is the "body" of the for loop, the second is the answer and the third is where we collect information from.

# Code
```
(define (final-value-after-operations operations)
    (foldl 
        (lambda(x bottom)
            (if(or (equal? x "--X") (equal? x "X--")) (- bottom 1) (+ bottom 1))) 
         0 
        operations)
  )
```
Please UpVote if you like my solution. It motivates me to keep posting ;)
Here is my LinkedIn, if you'd like to connect: https://www.linkedin.com/in/elitza-yotkova-4a0a17244/