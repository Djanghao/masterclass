# Racket ( hash table, recursion, functional )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-duplicate-number/solutions/3840673/](https://leetcode.com/problems/find-the-duplicate-number/solutions/3840673/)

---

Maintain a hash set of numbers already seen as we walk through each number in the list. If number has been seen, return the number. Otherwise, add to hash set of seen numbers and continue to walk the list.
```
(require racket/hash)

(define/contract (find-duplicate nums)
  (-> (listof exact-integer?) exact-integer?)
  (letrec
      ([find-recurse
           (lambda (ns seen)
             (cond [(null? ns) -1]
                   [(hash-has-key? seen (car ns)) (car ns)]
                   [else (find-recurse
                           (cdr ns)
                           (hash-union
                             seen
                             (make-immutable-hash (list (cons (car ns) #t)))))]))])
    (find-recurse nums (make-immutable-hash))))
```