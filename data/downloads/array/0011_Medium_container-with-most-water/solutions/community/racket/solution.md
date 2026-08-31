# Simple Racket Solution

**Author:** rymaju
**Votes:** 1
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/1069927/](https://leetcode.com/problems/container-with-most-water/solutions/1069927/)

---

This is a recursive implementation of the O(N) solution.

Remember that our general idea is to have a shrinking window, where the shorter goalpost will move first. Our base case is when the goalposts meet, since the area will be 0. Lets descibe this as a function `W(h, l, r)` where `h` is our array of heights, `l` is the left index, and `r` is the right index.

Im assuming the reader (you) is more familiar with imperative programming so im gonna speak pseudo-Python here.
```
W(h, l, r) 
    if l >= r: 0
	else: max(min(h[l], h[r]) * (r-l), if h[l] < h[r] then W(h, l+1, r) else W(h, l, r-1)
```

We know we will hit the base case since at each step we either increment `l` or decrement `r`, so they must converge.

We convert to Racket with minimal difficulty. We do need to convert out input list to a vector to get O(1) access which is annoying but what can you do...

```scheme
(define/contract (max-area height)
  (-> (listof exact-integer?) exact-integer?)
    
    (define h (list->vector height))
    (define (helper left right)
        (cond [(>= left right) 0]
              [else (let ([area (* (min (vector-ref h left) (vector-ref h right)) (- right left))])
                        (max area
                            (if (< (vector-ref h left) (vector-ref h right))
                                (helper (add1 left) right)
                                (helper left (sub1 right)))))]))
                                
    (helper 0 (sub1 (vector-length h)))
  )
```