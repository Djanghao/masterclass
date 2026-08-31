# Recursive solution in 10 lines

**Author:** bearxy39
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/1839089/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/1839089/)

---

```
(define (reverse-k l k next)
  (if (or (= 0 k) (not l)) next
      (let ([n (list-node-next l)])
        (set-list-node-next! l next)
        (reverse-k n (- k 1) l))))
		
(define (reverse-group-k h c k i)
  (cond [(= i k) (reverse-k h k (reverse-group-k c c k 0))]
        [(not c) h]
        [else (reverse-group-k h (list-node-next c) k (+ 1 i))]))
		
(define (reverse-k-group head k) (reverse-group-k head head k 0))
```