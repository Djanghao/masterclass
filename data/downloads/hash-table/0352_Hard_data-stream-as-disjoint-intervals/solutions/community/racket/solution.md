# Racket solution (without explanation, easy to understand)

**Author:** yoshissac6
**Votes:** 0
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3125053/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3125053/)

---

# Code
```
;; The avl code is stealed from https://github.com/mordae/racket-avl
(require racket/generator
         racket/contract
         racket/match)

(struct avl
  (<=? =? (root #:mutable)))

;; An immutable tree node.
(struct node
  (left right value height))

;; Create an empty tree with specified comparator,
;; that determines two values are identical using equal?.
(define (make-avl <=?)
  (avl <=? equal? #f))

;; Determine whether the value is an AVL tree have been
;; created using `make-avl`.
(define (avl-equal? v)
  (and (avl? v)
       (eq? equal? (avl-=? v))))

;; Determine whether is the AVL tree empty or not.
(define (avl-empty? tree)
  (not (avl-root tree)))

;; Modify an existing tree to include given value.
(define (avl-add! tree value)
  (match tree
    ((avl <=? =? root)
     (set-avl-root! tree (add <=? =? root value)))))

;; Perform the non-modifying addition of a value into the tree.
(define (add <=? =? parent new-value)
  (match parent
    ((node left right value height)
     (cond
       ((=? value new-value)
        (make-node left right new-value))

       ((<=? new-value value)
        (rebalance
          (make-node (add <=? =? left new-value) right value)))

       (else
        (rebalance
          (make-node left (add <=? =? right new-value) value)))))

    (else
     (make-node #f #f new-value))))

;; Rebalance tree node if required.
(define (rebalance parent)
  (match parent
    ((node left right value _)
     (cond
       ((= (balance parent) 2)
        (if (= (balance left) -1)
            (let ((left (rotate-left left)))
              (rotate-right (make-node left right value)))
            (rotate-right parent)))

       ((= (balance parent) -2)
        (if (= (balance right) 1)
            (let ((right (rotate-right right)))
              (rotate-left (make-node left right value)))
            (rotate-left parent)))

       (else parent)))))

;; Create right-rotated version of the node.
(define (rotate-right parent)
  (match parent
    ((node left right value _)
     (match left
       ((node l-left l-right l-value _)
        (let ((new-right (make-node l-right right value)))
          (make-node l-left new-right l-value)))))))

;; Create left-rotated version of the node.
(define (rotate-left parent)
  (match parent
    ((node left right value _)
     (match right
       ((node r-left r-right r-value _)
        (let ((new-left (make-node left r-left value)))
          (make-node new-left r-right r-value)))))))

;; Create new node, automatically computing height using the
;; higher of left and right children.
(define (make-node left right value)
  (node left right value (add1 (max (height right) (height left)))))

;; Return height of node or 0 for #f.
(define (height maybe-node)
  (if maybe-node (node-height maybe-node) 0))

;; Return balance for node or 0 for #f.
(define (balance maybe-node)
  (match maybe-node
    ((node left right _ _)
     (- (height left)
        (height right)))

    (else 0)))

;; Determine whether the tree contains specified value.
(define (avl-contains? tree value)
  (match tree
    ((avl <=? =? root)
     (contains? <=? =? root value))))

;; Return value corresponding to specified needle.
(define (contains? <=? =? parent needle)
  (match parent
    ((node left right value _)
     (cond
       ((=? value needle)
        (begin #t))

       ((<=? needle value)
        (contains? <=? =? left needle))

       (else
        (contains? <=? =? right needle))))

    (else #f)))

;; Create ordered value sequence.
(define (in-avl tree)
  (in-generator
    (let iterate ((parent (avl-root tree)))
      (match parent
        ((node left right value _)
         (iterate left)
         (yield value)
         (iterate right))

        (else #t)))))

;; Convert the tree to a list.
(define (avl->list tree)
  (for/list ((x (in-avl tree))) x))

(define summary-ranges%
  (class object%
    (super-new)
    
    (init-field (avl-tree (make-avl <))
		        (len 0))
                
    ; add-num : exact-integer? -> void?
    (define/public (add-num value)
        (unless (avl-contains? avl-tree value)
            (avl-add! avl-tree value)
            (set! len (add1 len))))
   
    ; get-intervals : -> (listof (listof exact-integer?))
    (define/public (get-intervals)
        (let ((vec (list->vector (avl->list avl-tree))))
	        (let lp ((i 0) (old-cur (vector-ref vec 0)) (res '()))
	          (if (>= i (sub1 len))
	            (reverse (cons `(,old-cur ,(vector-ref vec (sub1 len))) res))
	            (let* ((cur (vector-ref vec i))
	        	       (next (vector-ref vec (add1 i))))
	        	    (if (> (- next cur) 1)
	            	    (lp (add1 i) next (cons `(,old-cur ,cur) res))
	            	    (lp (add1 i) old-cur res)))))))
))

;; Your summary-ranges% object will be instantiated and called as such:
;; (define obj (new summary-ranges%))
;; (send obj add-num value)
;; (define param_2 (send obj get-intervals))
```