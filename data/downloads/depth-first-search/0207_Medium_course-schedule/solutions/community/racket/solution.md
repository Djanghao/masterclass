# racket 0ms: dfs, andmap (exit early)

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule/solutions/6035107/](https://leetcode.com/problems/course-schedule/solutions/6035107/)

---

# Code
```racket []
(define (can-finish num-courses prereqs)
  (let ([adj (make-hash)]
        [seen (make-vector num-courses 0)])
    (for ([x prereqs])
      (hash-set! adj (first x)
                 (cons (second x) (hash-ref adj (first x) '()))))
   
    (define (dfs node)
      (cond ((= 1 (vector-ref seen node)) #f)
            ((= 2 (vector-ref seen node)) #t)
            (else
             (vector-set! seen node 1)
             (if (andmap dfs (hash-ref adj node '()))         
                 (begin
                   (vector-set! seen node 2)
                   #t)
                 #f))))

    (andmap dfs (hash-keys adj))))
```