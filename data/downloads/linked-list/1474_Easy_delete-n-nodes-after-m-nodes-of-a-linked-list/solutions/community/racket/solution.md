# racket flip between drop and take

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/4614182/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/4614182/)

---

# Code
```scheme
(define (linked-list->numbers linked-list [values '()])
  (cond [(empty? linked-list) '()]
        [(list-node-next linked-list)
         (linked-list->numbers (list-node-next linked-list)
                               (append values (list (list-node-val linked-list))))]
        [else (append values (list (list-node-val linked-list)))]))

(define (numbers->linked-list numbers)
  (define (build-up-list numbers built-up-list)
    (let ([value (make-list-node (first numbers))])
      (if (= 1 (length numbers))
          (begin
            (set-list-node-next! value built-up-list)
            value)
          (begin
            (set-list-node-next! value built-up-list)
            (build-up-list (rest numbers) value)))))
  (cond [(empty? numbers) '()]
        [(= 1 (length numbers)) (make-list-node (first numbers))]
        [else (build-up-list (rest (reverse numbers)) (make-list-node (last numbers)))]))

(define (delete-nodes head m n)
  (let ([convert-back (compose numbers->linked-list flatten reverse)])
    (let loop ([num-ls (linked-list->numbers head)]
               [acc '()] [flip 0])
      (match num-ls
        ['() (convert-back acc)]
        [(list _ ...) #:when (and (< (length num-ls) n) (= 1 flip)) (convert-back acc)]
        [(list _ ...) #:when (and (< (length num-ls) m) (zero? flip)) (convert-back (cons num-ls acc))]
        [_
         (match flip
           [0 (loop (drop num-ls m) (cons (take num-ls m) acc) 1)]
           [1 (loop (drop num-ls n) acc 0)])]))))
```