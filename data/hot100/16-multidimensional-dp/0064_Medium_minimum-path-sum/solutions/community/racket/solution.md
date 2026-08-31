# Racket || beat 100% users using Racket || used a hash table for fast lookup || Let's learn together

**Author:** Shway4
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/4662282/](https://leetcode.com/problems/minimum-path-sum/solutions/4662282/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dynamic programming using a hash table for fast lookup. A simple recursion algorithm

# Approach
<!-- Describe your approach to solving the problem. -->
Dynamic programming.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
; dynamic programming helper function
(define (mpsAux grid curpos dpTable ub)
	(local
		[(define (get grid pos) (list-ref (list-ref grid (car pos)) (cdr pos)))]
		(cond
			; return start value
			[(equal? curpos (cons 0 0)) (car (car grid))]

			; handle out of bounds
			[(or (< (car curpos) 0) (< (cdr curpos) 0)) +inf.0]

			; position appeared before
			[(hash-ref dpTable curpos #f) (hash-ref dpTable curpos)]

			; inductive case
			[else
				(let*
					(
						; go up
						[u_val (mpsAux grid (cons (- (car curpos) 1) (cdr curpos)) dpTable ub)]

						; go left 
						[l_val (mpsAux grid (cons (car curpos) (- (cdr curpos) 1)) dpTable ub)]

						; compute the current least cost
						[cur-least-cost (+ (get grid curpos) (min u_val l_val))]
					)
					(hash-set! dpTable curpos cur-least-cost)
					cur-least-cost
				)
			]
		)
	)
)

; the (x . y) position of the grid is the x'th row and y'th column of the grid
(define/contract (min-path-sum grid)
	(-> (listof (listof exact-integer?)) exact-integer?)
	(local
		[(define dpTable (make-hash))]
		(let*
			(
				[curpos (cons (- (length grid) 1) (- (length (car grid)) 1))]
				[least-val (mpsAux grid curpos dpTable 200)]
			)
			(inexact->exact least-val)
		)
	)
)
```